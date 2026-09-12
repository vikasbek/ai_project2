import type { FieldDef } from "@/components/crud/types";

export const paymentsConfig = {
  title: "Payments",
  resourcePath: "/payment-service/payments",
  fields: [
    { name: "orderId", label: "Order ID", type: "text", required: true },
    { name: "amount", label: "Amount", type: "number", required: true },
  ] satisfies FieldDef[],
};
