import { useState } from "react";
import { UpdateLeadService, UpdateLeadPayload } from "../services/UpdateLeadService";

export function useUpdateLead() {
    const [saving, setSaving] = useState(false);

    async function update(id: string, values: UpdateLeadPayload) {
        setSaving(true);

        const result = await UpdateLeadService.update(id, values);

        setSaving(false);

        return result;
    }

    return {
        update,
        saving,
    };
}