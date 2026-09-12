import { Router } from "express";
import { env } from "../../config/env";
import { createServiceProxy } from "../../middleware/service-proxy";

export const paymentServiceRouter = Router();

paymentServiceRouter.use("/", createServiceProxy("payment-service", env.services.paymentService));
