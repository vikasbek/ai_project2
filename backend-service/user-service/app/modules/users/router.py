from fastapi import APIRouter, HTTPException

from app.core.config import settings
from app.modules.users.schemas import User, UserCreate, UserUpdate
from app.modules.users.service import UserService

router = APIRouter(prefix=f"/{settings.service_name}/users", tags=["users"])
service = UserService()


@router.post("", response_model=User)
async def create_user(payload: UserCreate):
    return await service.create_user(payload)


@router.get("", response_model=list[User])
async def list_users():
    return await service.list_users()


@router.get("/{user_id}", response_model=User)
async def get_user(user_id: str):
    user = await service.get_user(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@router.put("/{user_id}", response_model=User)
async def update_user(user_id: str, payload: UserUpdate):
    user = await service.update_user(user_id, payload)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@router.delete("/{user_id}", status_code=204)
async def delete_user(user_id: str):
    deleted = await service.delete_user(user_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="User not found")
