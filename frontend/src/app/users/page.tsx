import { EntityManager } from "@/components/crud/EntityManager";
import { ServiceNav } from "@/components/nav/ServiceNav";
import { usersConfig } from "@/modules/users/config";

export default function UsersPage() {
  return (
    <div className="crud-page">
      <ServiceNav />
      <EntityManager {...usersConfig} />
    </div>
  );
}
