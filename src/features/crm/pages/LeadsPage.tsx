import { useLeads } from "../hooks/useLeads";
import { Link } from "react-router-dom";

export default function LeadsPage() {
  const { leads, loading } = useLeads();

  if (loading) {
    return (
      <div className="rounded-xl bg-white p-6 shadow">
        Loading leads...
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-6 text-2xl font-bold">
        Leads ({leads.length})
      </h2>

      {leads.length === 0 ? (
        <p>No Leads Found.</p>
      ) : (
        <div className="space-y-4">
          {leads.map((lead: any) => (
            <Link
              to={`/leads/${lead.id}`}
              key={lead.id}
            >
            <div className="rounded-lg border p-4 transition hover:border-blue-500 hover:shadow-md">
              <h3 className="font-semibold">
                {lead.company_name}
              </h3>

              <p>{lead.contact_name}</p>

              <p>{lead.email}</p>

              <p>{lead.phone}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}