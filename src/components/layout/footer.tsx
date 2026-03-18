import Link from "next/link";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";

const services = [
  { label: "AI Voice Agent", href: "#services" },
  { label: "AI Personal Assistant", href: "#services" },
  { label: "AI Business Operations", href: "#services" },
];

const company = [
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "/blog" },
];

export function Footer() {
  return (
    <footer className="relative bg-surface">
      {/* Top gradient border */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #00D4AA 30%, #0EA5E9 70%, transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 md:px-6 lg:px-8 pt-16 pb-8">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 - Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M18.5 3L8 17h7l-2 12L25 15h-7l2.5-12z"
                  fill="#00D4AA"
                />
              </svg>
              <span className="text-lg font-bold text-text-primary tracking-tight">
                NimbleLogic
                <span className="text-primary"> AI</span>
              </span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
              {SITE.tagline}
            </p>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-text-secondary transition-colors hover:text-primary"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-primary"
                >
                  <Mail className="size-4 shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.phoneTel}
                  className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-primary"
                >
                  <Phone className="size-4 shrink-0" />
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-text-secondary">
                <MapPin className="size-4 shrink-0" />
                {SITE.location}
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md p-2 text-text-secondary transition-colors hover:bg-white/5 hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
              <a
                href={SITE.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md p-2 text-text-secondary transition-colors hover:bg-white/5 hover:text-primary"
                aria-label="X (Twitter)"
              >
                <Twitter className="size-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-sm text-text-muted">{SITE.location}</p>
        </div>
      </div>
    </footer>
  );
}
