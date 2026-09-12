import { Router } from "express";
import { env } from "../../config/env";
import { createServiceProxy } from "../../middleware/service-proxy";

export const productServiceRouter = Router();

productServiceRouter.use("/", createServiceProxy("product-service", env.services.productService));
