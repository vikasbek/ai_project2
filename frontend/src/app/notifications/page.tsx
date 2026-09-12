import { EntityManager } from "@/components/crud/EntityManager";
import { ServiceNav } from "@/components/nav/ServiceNav";
import { notificationsConfig } from "@/modules/notifications/config";

export default function NotificationsPage() {
  return (
    <div className="crud-page">
      <ServiceNav />
      <EntityManager {...notificationsConfig} />
    </div>
  );
}
