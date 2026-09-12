import type { FieldDef } from "@/components/crud/types";

export const messagesConfig = {
  title: "Messages",
  resourcePath: "/message-service/messages",
  fields: [
    { name: "chat_id", label: "Chat ID", type: "text", required: true },
    { name: "sender_id", label: "Sender ID", type: "text", required: true },
    { name: "content", label: "Content", type: "textarea", required: true },
  ] satisfies FieldDef[],
};
