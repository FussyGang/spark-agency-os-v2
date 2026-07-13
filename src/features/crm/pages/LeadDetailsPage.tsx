import { useParams } from "react-router-dom";
import { useLead } from "../hooks/useLead";

export default function LeadDetailsPage() {
    const { id = "" } = useParams();

    const { lead, loading } = useLead(id);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!lead) {
        return <div>Lead not found.</div>;
    }

    return (
        <div className="space-y-6">

            <h1 className="text-3xl font-bold">
                {lead.company_name}
            </h1>

            <div className="rounded-xl border bg-white p-6 space-y-3">

                <div>

                    <strong>Contact:</strong> {lead.contact_name}

                </div>

                <div>

                    <strong>Email:</strong> {lead.email}

                </div>

                <div>

                    <strong>Phone:</strong> {lead.phone}

                </div>

                <div>

                    <strong>Status:</strong> {lead.status}

                </div>

                <div>

                    <strong>Source:</strong> {lead.source}

                </div>

            </div>

        </div>
    );
}