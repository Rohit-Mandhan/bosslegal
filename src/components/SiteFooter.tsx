import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react";
import { FIRM, NAV, PRACTICE_AREAS } from "@/lib/site";

const socials = [
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Twitter, label: "X" },
  { Icon: Facebook, label: "Facebook" },
  { Icon: Instagram, label: "Instagram" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <h3 className="font-serif text-xl">{FIRM.name}</h3>
          <span className="gold-rule mt-4" />
          <p className="mt-4 text-sm italic text-ink-foreground/70">{FIRM.tagline}</p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Office</h4>
          <ul className="mt-5 space-y-3 text-sm text-ink-foreground/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.5} />
              <span>{FIRM.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="size-4 shrink-0 text-gold" strokeWidth={1.5} />
              <span>{FIRM.phone}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="size-4 shrink-0 text-gold" strokeWidth={1.5} />
              <span>{FIRM.email}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-ink-foreground/70 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/disclaimer"
                className="text-ink-foreground/70 transition-colors hover:text-gold"
              >
                Disclaimer &amp; Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Practice Areas</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {PRACTICE_AREAS.slice(0, 5).map((area) => (
              <li key={area.slug}>
                <Link
                  to="/practice-areas"
                  hash={area.slug}
                  className="text-ink-foreground/70 transition-colors hover:text-gold"
                >
                  {area.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex size-9 items-center justify-center border border-ink-foreground/20 text-ink-foreground/70 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="size-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-ink-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {FIRM.name}. All rights reserved.
          </p>
          <Link to="/disclaimer" className="transition-colors hover:text-gold">
            Disclaimer &amp; Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}