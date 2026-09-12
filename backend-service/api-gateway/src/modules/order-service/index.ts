import { Router } from "express";
import { env } from "../../config/env";
import { createServiceProxy } from "../../middleware/service-proxy";

export const orderServiceRouter = Router();

orderServiceRouter.use("/", createServiceProxy("order-service", env.services.orderService));
