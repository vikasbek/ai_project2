import type { FieldDef } from "@/components/crud/types";

export const usersConfig = {
  title: "Users",
  resourcePath: "/user-service/users",
  fields: [
    { name: "email", label: "Email", type: "text", required: true },
    { name: "name", label: "Name", type: "text", required: true },
  ] satisfies FieldDef[],
};
