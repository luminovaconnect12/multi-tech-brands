import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import ContactForm from "@/components/sections/ContactForm";
import { site } from "@/lib/site";
import { faqs } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact — Start a project",
  description:
    "Tell Multi Tech Brands about your project. Trademark, publishing, design, or marketing — a senior lead will respond within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build your <span className="text-gradient">advantage.</span>
          </>
        }
        intro="Tell us where you're headed. We'll come back with the fastest, most defensible path to get there — usually within one business day."
      />

      <Section className="pt-4">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <ContactForm />

          <div className="space-y-6">
            <InfoCard title="Email" value={site.email} href={`mailto:${site.email}`} />
            <InfoCard title="Coverage" value={site.address} />
            <div className="glass rounded-4xl p-8">
              <h3 className="font-display text-title font-semibold text-white">
                What happens next
              </h3>
              <ol className="mt-5 space-y-4 text-sm text-silver-400">
                <Step n="1" text="We review your message and route it to the right specialist." />
                <Step n="2" text="A senior lead replies within one business day to scope a call." />
                <Step n="3" text="You get a clear plan, timeline, and quote — no obligation." />
              </ol>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          {faqs.slice(0, 4).map((f) => (
            <div key={f.q} className="glass rounded-4xl p-7">
              <h3 className="font-display text-base font-semibold text-white">{f.q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-silver-400">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

function InfoCard({ title, value, href }: { title: string; value: string; href?: string }) {
  const body = (
    <div className="glass glass-hover rounded-4xl p-8">
      <span className="text-eyebrow uppercase tracking-eyebrow text-silver-400">{title}</span>
      <p className="mt-3 font-display text-lg text-white">{value}</p>
    </div>
  );
  return href ? <a href={href} data-cursor="hover">{body}</a> : body;
}

function Step({ n, text }: { n: string; text: string }) {
  return (
    <li className="flex gap-4">
      <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-premium-soft font-mono text-xs text-electric">
        {n}
      </span>
      <span>{text}</span>
    </li>
  );
}
