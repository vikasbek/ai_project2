from datetime import datetime, timezone

from app.modules.users.repository import UserRepository
from app.modules.users.schemas import UserCreate, UserUpdate


class UserService:
    def __init__(self):
        self.repository = UserRepository()

    async def create_user(self, payload: UserCreate) -> dict:
        data = payload.model_dump()
        data["created_at"] = datetime.now(timezone.utc)
        return await self.repository.create(data)

    async def list_users(self) -> list[dict]:
        return await self.repository.list()

    async def get_user(self, user_id: str) -> dict | None:
        return await self.repository.get(user_id)

    async def update_user(self, user_id: str, payload: UserUpdate) -> dict | None:
        data = {k: v for k, v in payload.model_dump().items() if v is not None}
        if not data:
            return await self.repository.get(user_id)
        return await self.repository.update(user_id, data)

    async def delete_user(self, user_id: str) -> bool:
        return await self.repository.delete(user_id)
