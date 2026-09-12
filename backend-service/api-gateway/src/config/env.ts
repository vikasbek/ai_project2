import "dotenv/config";

export const env = {
  port: Number(process.env.PORT ?? 4000),
  services: {
    userService: process.env.USER_SERVICE_URL ?? "http://localhost:8001",
    chatService: process.env.CHAT_SERVICE_URL ?? "http://localhost:8002",
    messageService: process.env.MESSAGE_SERVICE_URL ?? "http://localhost:8003",
    notificationService:
      process.env.NOTIFICATION_SERVICE_URL ?? "http://localhost:8004",
    paymentService: process.env.PAYMENT_SERVICE_URL ?? "http://localhost:8005",
    orderService: process.env.ORDER_SERVICE_URL ?? "http://localhost:8006",
    productService: process.env.PRODUCT_SERVICE_URL ?? "http://localhost:8007",
  },
};
