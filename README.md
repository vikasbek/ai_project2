# AI Project 2

Polyglot microservices platform: Next.js frontend, an Express API gateway, four FastAPI
services, and three Spring Boot services, all backed by a shared MongoDB Atlas cluster.
Built as a foundation to extend with RAG, LangChain, LangGraph, and a vector DB.

## Structure

```
frontend/                    Next.js (TypeScript), routes start with /
backend-service/
  api-gateway/                Express (TypeScript) — the only entry point for the frontend, routes under /api/
  user-service/                FastAPI — /user-service/
  chat-service/                FastAPI — /chat-service/
  message-service/             FastAPI — /message-service/
  notification-service/        FastAPI — /notification-service/
  payment-service/             Spring Boot — /payment-service/
  order-service/               Spring Boot — /order-service/
  product-service/             Spring Boot — /product-service/
```

Each service is organized internally by domain module (router/service/repository/model,
or controller/service/repository for Java) rather than by technical layer.

Every service uses the same MongoDB Atlas cluster. Each service has its own logical
database on that cluster, and inside it a single collection named exactly after the
service (e.g. `user-service`, `payment-service`).

The frontend never talks to a backend service directly — everything goes through the API
gateway at `/api/<service-name>/...`, which proxies to the matching internal service.

## MongoDB Atlas

All services connect to:
```
mongodb+srv://vikasbek35_db_user:<db_password>@ai-ml-project1.yvtnqrp.mongodb.net/?retryWrites=true&w=majority
```

The real password is never committed. It's supplied via env vars:
- **Docker Compose**: copy `.env.example` → `.env` at the repo root and set `MONGO_PASSWORD`. Compose interpolates it into every service's `MONGO_URI`.
- **Local dev**: each service has its own `.env.example` — copy to `.env` and replace `<db_password>` with the real password (or set `MONGO_URI`/`MONGO_PASSWORD` env vars directly for Spring Boot).

## Run everything with Docker Compose

```bash
cp .env.example .env   # set MONGO_PASSWORD
docker compose up --build
```

- Frontend: http://localhost:3000
- API gateway: http://localhost:4000/api

## Run services individually (local dev)

**Frontend**
```bash
cd frontend
npm install
npm run dev
```

**API gateway**
```bash
cd backend-service/api-gateway
npm install
cp .env.example .env
npm run dev
```

**FastAPI services** (user-service, chat-service, message-service, notification-service)
```bash
cd backend-service/<service-name>
cp .env.example .env
uv sync
uv run uvicorn app.main:app --reload --port <service-port>
```
Ports: user-service 8001, chat-service 8002, message-service 8003, notification-service 8004.

**Spring Boot services** (payment-service, order-service, product-service)
```bash
cd backend-service/<service-name>
MONGO_URI="mongodb+srv://vikasbek35_db_user:<db_password>@ai-ml-project1.yvtnqrp.mongodb.net/?retryWrites=true&w=majority" \
  ./mvnw spring-boot:run
```
Ports: payment-service 8005, order-service 8006, product-service 8007.
