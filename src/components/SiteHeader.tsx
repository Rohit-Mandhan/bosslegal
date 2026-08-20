import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Scale } from "lucide-react";
import { FIRM, NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-ink/95 backdrop-blur-md shadow-[0_10px_30px_-24px_oklch(0.16_0.024_258/0.9)]"
          : "bg-ink/70 backdrop-blur-sm",
      )}
    >
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link to="/" className="group flex items-center gap-3">
          <span className="flex size-11 items-center justify-center border border-gold/50 text-gold transition-colors group-hover:bg-gold group-hover:text-accent-foreground">
            <Scale className="size-5" strokeWidth={1.5} />
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-[1.05rem] tracking-wide text-ink-foreground sm:text-lg">
              {FIRM.name}
            </span>
            <span className="hidden text-[0.62rem] uppercase tracking-[0.2em] text-gold sm:block">
              Advocates &amp; Legal Consultants
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => {
            const active =
              item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative py-1 text-sm tracking-wide text-ink-foreground/75 transition-colors hover:text-gold",
                  "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform hover:after:scale-x-100",
                  active && "text-gold after:scale-x-100",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden bg-gold px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-accent-foreground transition-all hover:bg-gold-soft hover:shadow-[0_12px_30px_-12px_oklch(0.68_0.084_78/0.7)] md:inline-flex"
          >
            Book a Consultation
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex size-11 items-center justify-center border border-ink-foreground/20 text-ink-foreground transition-colors hover:border-gold hover:text-gold lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-ink-foreground/10 bg-ink transition-[max-height] duration-500 lg:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <nav className="container-page flex flex-col py-4">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="border-b border-ink-foreground/10 py-3 text-sm tracking-wide text-ink-foreground/85 last:border-0 hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 bg-gold px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-accent-foreground"
          >
            Book a Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}