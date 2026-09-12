import type { FieldDef } from "@/components/crud/types";

export const notificationsConfig = {
  title: "Notifications",
  resourcePath: "/notification-service/notifications",
  fields: [
    { name: "user_id", label: "User ID", type: "text", required: true },
    { name: "type", label: "Type", type: "text", required: true },
    { name: "content", label: "Content", type: "textarea", required: true },
    { name: "read", label: "Read", type: "checkbox" },
  ] satisfies FieldDef[],
};
