from datetime import datetime, timezone

from pydantic import BaseModel, Field


class UserCreate(BaseModel):
    email: str
    name: str


class UserUpdate(BaseModel):
    email: str | None = None
    name: str | None = None


class User(BaseModel):
    id: str
    email: str
    name: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
