import { EntityManager } from "@/components/crud/EntityManager";
import { ServiceNav } from "@/components/nav/ServiceNav";
import { messagesConfig } from "@/modules/messages/config";

export default function MessagesPage() {
  return (
    <div className="crud-page">
      <ServiceNav />
      <EntityManager {...messagesConfig} />
    </div>
  );
}
