import { Router } from "express";
import { env } from "../../config/env";
import { createServiceProxy } from "../../middleware/service-proxy";

export const userServiceRouter = Router();

userServiceRouter.use("/", createServiceProxy("user-service", env.services.userService));
