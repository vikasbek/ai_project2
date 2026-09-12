from fastapi import APIRouter

from app.core.config import settings

router = APIRouter(prefix=f"/{settings.service_name}", tags=["health"])


@router.get("/health")
async def health_check():
    return {"status": "ok", "service": settings.service_name}
