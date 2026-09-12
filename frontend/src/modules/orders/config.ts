import type { FieldDef } from "@/components/crud/types";

export const ordersConfig = {
  title: "Orders",
  resourcePath: "/order-service/orders",
  fields: [
    { name: "userId", label: "User ID", type: "text", required: true },
    { name: "productIds", label: "Product IDs (comma separated)", type: "list" },
    { name: "totalAmount", label: "Total Amount", type: "number", required: true },
  ] satisfies FieldDef[],
};
