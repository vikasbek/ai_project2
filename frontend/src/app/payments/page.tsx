import { EntityManager } from "@/components/crud/EntityManager";
import { ServiceNav } from "@/components/nav/ServiceNav";
import { paymentsConfig } from "@/modules/payments/config";

export default function PaymentsPage() {
  return (
    <div className="crud-page">
      <ServiceNav />
      <EntityManager {...paymentsConfig} />
    </div>
  );
}
