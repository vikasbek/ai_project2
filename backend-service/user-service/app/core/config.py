from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    service_name: str = "user-service"
    mongo_uri: str = "mongodb://localhost:27017"
    mongo_db_name: str = "user_service_db"
    port: int = 8001

    class Config:
        env_file = ".env"


settings = Settings()
