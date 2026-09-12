from bson import ObjectId

from app.core.config import settings
from app.core.database import get_collection


def _serialize(doc: dict) -> dict:
    doc["id"] = str(doc.pop("_id"))
    return doc


class UserRepository:
    def __init__(self):
        self.collection = get_collection(settings.service_name)

    async def create(self, data: dict) -> dict:
        result = await self.collection.insert_one(data)
        created = await self.collection.find_one({"_id": result.inserted_id})
        return _serialize(created)

    async def list(self) -> list[dict]:
        docs = await self.collection.find().to_list(length=100)
        return [_serialize(doc) for doc in docs]

    async def get(self, user_id: str) -> dict | None:
        doc = await self.collection.find_one({"_id": ObjectId(user_id)})
        return _serialize(doc) if doc else None

    async def update(self, user_id: str, data: dict) -> dict | None:
        await self.collection.update_one({"_id": ObjectId(user_id)}, {"$set": data})
        return await self.get(user_id)

    async def delete(self, user_id: str) -> bool:
        result = await self.collection.delete_one({"_id": ObjectId(user_id)})
        return result.deleted_count > 0
