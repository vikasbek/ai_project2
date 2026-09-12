from fastapi import FastAPI

from app.core.config import settings
from app.health.router import router as health_router
from app.modules.users.router import router as users_router

app = FastAPI(title=settings.service_name)

app.include_router(health_router)
app.include_router(users_router)
