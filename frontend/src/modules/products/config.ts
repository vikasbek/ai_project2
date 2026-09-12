import type { FieldDef } from "@/components/crud/types";

export const productsConfig = {
  title: "Products",
  resourcePath: "/product-service/products",
  fields: [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "description", label: "Description", type: "textarea" },
    { name: "price", label: "Price", type: "number", required: true },
    { name: "stock", label: "Stock", type: "number", required: true },
  ] satisfies FieldDef[],
};
