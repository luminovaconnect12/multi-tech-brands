import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { site, nav } from "@/lib/site";
import { services, brands } from "@/data/content";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10">
      <div className="shell py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-6 text-sm leading-relaxed text-silver-400">
              {site.description}
            </p>
            <Link href="/contact" className="btn-primary mt-7" data-cursor="hover">
              <span>Start a project</span>
            </Link>
          </div>

          <FooterCol title="Services">
            {services.map((s) => (
              <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                {s.name}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Company">
            {nav.map((n) => (
              <FooterLink key={n.href} href={n.href}>
                {n.label}
              </FooterLink>
            ))}
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterCol>

          <FooterCol title="Our Brands">
            {brands.map((b) => (
              <li key={b.url}>
                <a
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-silver-400 transition-colors hover:text-white"
                  data-cursor="hover"
                >
                  {b.name}
                </a>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Connect">
            <FooterLink href={site.social.linkedin}>LinkedIn</FooterLink>
            <FooterLink href={site.social.instagram}>Instagram</FooterLink>
            <FooterLink href={site.social.x}>X / Twitter</FooterLink>
            <FooterLink href={`mailto:${site.email}`}>{site.email}</FooterLink>
          </FooterCol>
        </div>

        <div className="hairline my-12" />

        <div className="flex flex-col items-start justify-between gap-4 text-xs text-silver-400 md:flex-row md:items-center">
          <p>
            &copy; {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 animate-pulse-glow rounded-full bg-neon" />
            One group. Every advantage your brand needs to scale.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-eyebrow uppercase tracking-eyebrow text-silver-200">{title}</h4>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-silver-400 transition-colors hover:text-white"
        data-cursor="hover"
      >
        {children}
      </Link>
    </li>
  );
}
