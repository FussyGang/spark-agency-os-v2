import { useState } from "react";
import { createLead } from "../services/LeadMutation";

export default function LeadForm() {
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  async function saveLead(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await createLead({
      company_name: company,
      contact_name: contact,
      email,
      phone,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Lead Created Successfully");

    setCompany("");
    setContact("");
    setEmail("");
    setPhone("");
  }

  return (
    <form
      onSubmit={saveLead}
      className="mb-8 rounded-2xl bg-white p-6 shadow"
    >
      <h2 className="mb-6 text-2xl font-bold">
        New Lead
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <input
          className="rounded-lg border p-3"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <input
          className="rounded-lg border p-3"
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />

        <input
          className="rounded-lg border p-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="rounded-lg border p-3"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

      </div>

      <button
        className="mt-6 rounded-lg bg-black px-6 py-3 text-white"
      >
        Create Lead
      </button>

    </form>
  );
}