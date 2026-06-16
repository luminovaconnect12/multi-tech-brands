"use client";

import { useState } from "react";
import { services } from "@/data/content";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState(services[0].name);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire to your endpoint / WordPress (e.g. /wp-json/contact-form-7 or a CRM).
    setSent(true);
  }

  if (sent) {
    return (
      <div className="glass rounded-4xl p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-premium-soft text-electric">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M4 12.5 9 17l11-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-6 font-display text-heading font-semibold text-white">
          Message received.
        </h3>
        <p className="mt-3 text-silver-400">
          Thanks for reaching out. A senior lead will be in touch within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-4xl p-8 md:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Work email" name="email" type="email" required />
        <Field label="Company" name="company" />
        <Field label="Phone (optional)" name="phone" />
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm text-silver-200">Service of interest</label>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <button
              type="button"
              key={s.slug}
              onClick={() => setService(s.name)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                service === s.name
                  ? "border-electric/60 bg-electric/10 text-white"
                  : "border-white/10 text-silver-400 hover:text-white"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm text-silver-200">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-silver-400/60 focus:border-electric/60"
          placeholder="What are you trying to achieve, and by when?"
        />
      </div>

      <button type="submit" className="btn-primary mt-7 w-full sm:w-auto">
        <span>
          Send message
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm text-silver-200">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-silver-400/60 focus:border-electric/60"
      />
    </div>
  );
}
