import { EntityManager } from "@/components/crud/EntityManager";
import { ServiceNav } from "@/components/nav/ServiceNav";
import { ordersConfig } from "@/modules/orders/config";

export default function OrdersPage() {
  return (
    <div className="crud-page">
      <ServiceNav />
      <EntityManager {...ordersConfig} />
    </div>
  );
}
