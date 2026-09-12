import type { FieldDef } from "@/components/crud/types";

export const chatsConfig = {
  title: "Chats",
  resourcePath: "/chat-service/chats",
  fields: [
    { name: "title", label: "Title", type: "text", required: true },
    { name: "user_id", label: "User ID", type: "text", required: true },
  ] satisfies FieldDef[],
};
