import { ServiceNav } from "@/components/nav/ServiceNav";

export function Welcome() {
  return (
    <div className="crud-page">
      <ServiceNav />
      <h1>AI Project 2</h1>
      <p>
        Next.js frontend talking to the API gateway at <code>/api</code>. Pick a service
        above to manage its records.
      </p>
    </div>
  );
}
