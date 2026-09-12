import { Router } from "express";
import { env } from "../../config/env";
import { createServiceProxy } from "../../middleware/service-proxy";

export const notificationServiceRouter = Router();

notificationServiceRouter.use("/", createServiceProxy("notification-service", env.services.notificationService));
