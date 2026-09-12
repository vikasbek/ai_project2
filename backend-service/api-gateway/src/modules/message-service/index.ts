import { Router } from "express";
import { env } from "../../config/env";
import { createServiceProxy } from "../../middleware/service-proxy";

export const messageServiceRouter = Router();

messageServiceRouter.use("/", createServiceProxy("message-service", env.services.messageService));
