import cors from "cors";
import express from "express";

import { requestLogger } from "./middleware/request-logger";
import { userServiceRouter } from "./modules/user-service";
import { chatServiceRouter } from "./modules/chat-service";
import { messageServiceRouter } from "./modules/message-service";
import { notificationServiceRouter } from "./modules/notification-service";
import { paymentServiceRouter } from "./modules/payment-service";
import { orderServiceRouter } from "./modules/order-service";
import { productServiceRouter } from "./modules/product-service";

export const app = express();

app.use(cors());
app.use(requestLogger);

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "api-gateway" });
});

app.use("/api/user-service", userServiceRouter);
app.use("/api/chat-service", chatServiceRouter);
app.use("/api/message-service", messageServiceRouter);
app.use("/api/notification-service", notificationServiceRouter);
app.use("/api/payment-service", paymentServiceRouter);
app.use("/api/order-service", orderServiceRouter);
app.use("/api/product-service", productServiceRouter);
