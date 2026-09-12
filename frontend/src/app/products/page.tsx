import { EntityManager } from "@/components/crud/EntityManager";
import { ServiceNav } from "@/components/nav/ServiceNav";
import { productsConfig } from "@/modules/products/config";

export default function ProductsPage() {
  return (
    <div className="crud-page">
      <ServiceNav />
      <EntityManager {...productsConfig} />
    </div>
  );
}
