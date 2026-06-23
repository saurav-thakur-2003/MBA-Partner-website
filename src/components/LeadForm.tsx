import { useState } from "react";

export function LeadForm() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", status: "MBA Student", target: "", message: "" });

  const submit = async (e: any) => {
    e.preventDefault();
    try {
      const url = new URL(window.location.href);
      const utm_source = url.searchParams.get("utm_source") ?? "";
      const utm_medium = url.searchParams.get("utm_medium") ?? "";
      const payload = { ...form, utm_source, utm_medium, page: url.pathname };

      // POST to serverless endpoint
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('submit failed');
      setOpen(false);
      // open WhatsApp prefill for immediate follow-up (optional)
      const wa = `https://api.whatsapp.com/send?phone=&text=${encodeURIComponent("Hi, I'm " + form.name + " interested in " + form.target + ".")}`;
      // don't force open; leave as optional quick follow
      console.log('Lead submitted, opening WA optional:', wa);
      alert('Thanks — we received your request. Our team will contact you shortly.');
    } catch (err) {
      console.error(err);
      alert("There was an issue submitting the form. Please try again or message us on WhatsApp.");
    }
  };

  return (
    <div>
      <button onClick={() => setOpen(true)} className="fixed bottom-28 right-6 z-40 rounded-full bg-accent px-4 py-3 text-sm font-bold text-accent-foreground shadow-lg">
        Book Free Counseling
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40">
          <div className="w-full max-w-xl rounded-2xl bg-card p-6">
            <h3 className="font-display text-xl font-bold">Book Free Counseling</h3>
            <form onSubmit={submit} className="mt-4 grid gap-3">
              <input required placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input" />
              <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input" />
              <input required placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="input" />
              <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="input">
                <option>MBA Student</option>
                <option>CAT Aspirant</option>
                <option>Working Professional</option>
              </select>
              <input placeholder="Target B-School" value={form.target} onChange={(e) => setForm({ ...form, target: e.target.value })} className="input" />
              <textarea placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input h-24" />
              <div className="mt-2 flex justify-end gap-2">
                <button type="button" onClick={() => setOpen(false)} className="btn">Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
