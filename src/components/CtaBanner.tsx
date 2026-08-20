import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export function CtaBanner() {
  return (
    <section className="bg-ink py-20 text-ink-foreground">
      <Reveal className="container-page flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <p className="eyebrow">Speak With Us</p>
          <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
            Discuss your matter with our team in confidence.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-foreground/70">
            Share the background of your matter and we will advise on the options
            available, the likely process, and the next practical step.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="bg-gold px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-accent-foreground transition-all hover:bg-gold-soft hover:shadow-[0_16px_36px_-14px_oklch(0.68_0.084_78/0.7)]"
          >
            Book a Consultation
          </Link>
          <Link
            to="/contact"
            className="border border-ink-foreground/30 px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-ink-foreground transition-colors hover:border-gold hover:text-gold"
          >
            Contact Us
          </Link>
        </div>
      </Reveal>
    </section>
  );
}