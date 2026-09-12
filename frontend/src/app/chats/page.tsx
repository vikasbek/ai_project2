import { EntityManager } from "@/components/crud/EntityManager";
import { ServiceNav } from "@/components/nav/ServiceNav";
import { chatsConfig } from "@/modules/chats/config";

export default function ChatsPage() {
  return (
    <div className="crud-page">
      <ServiceNav />
      <EntityManager {...chatsConfig} />
    </div>
  );
}
