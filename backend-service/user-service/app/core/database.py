from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase

from app.core.config import settings

_client: AsyncIOMotorClient = AsyncIOMotorClient(settings.mongo_uri)
_database: AsyncIOMotorDatabase = _client[settings.mongo_db_name]


def get_database() -> AsyncIOMotorDatabase:
    return _database


def get_collection(name: str):
    return _database[name]
