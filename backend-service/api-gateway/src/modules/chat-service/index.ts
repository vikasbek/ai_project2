import { Router } from "express";
import { env } from "../../config/env";
import { createServiceProxy } from "../../middleware/service-proxy";

export const chatServiceRouter = Router();

chatServiceRouter.use("/", createServiceProxy("chat-service", env.services.chatService));
