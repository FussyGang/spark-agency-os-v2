import { useEffect, useState } from "react";
import { LeadDetailsService } from "../services/LeadDetailsService";

export function useLead(id: string) {
    const [lead, setLead] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            const { data } = await LeadDetailsService.getById(id);

            setLead(data);

            setLoading(false);
        }

        if (id) {
            load();
        }
    }, [id]);

    return {
        lead,
        loading,
    };
}