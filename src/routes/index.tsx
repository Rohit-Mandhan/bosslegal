import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import heroImg from "@/assets/hero-courthouse.jpg";
import officeImg from "@/assets/office.jpg";
import scalesImg from "@/assets/scales.jpg";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { PracticeIcon } from "@/components/PracticeIcon";
import { FIRM, PRACTICE_AREAS } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Boss Legal Associates | Advocates in CBD Belapur, Navi Mumbai" },
      {
        name: "description",
        content:
          "Boss Legal Associates advises clients across civil, corporate, criminal, property, banking, labour and advisory matters from CBD Belapur, Navi Mumbai.",
      },
      { property: "og:title", content: "Boss Legal Associates | Advocates & Legal Consultants" },
      {
        property: "og:description",
        content: "Committed to Justice. Dedicated to Excellence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-ink pt-28 pb-20">
        <img
          src={heroImg}
          alt="Courthouse facade with classical columns at dusk"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="container-page">
          <div className="max-w-3xl">
            <Reveal>
              <p className="eyebrow">Advocates &amp; Legal Consultants · Navi Mumbai</p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 text-4xl leading-[1.08] text-ink-foreground sm:text-5xl lg:text-[4.1rem]">
                {FIRM.name}
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 font-serif text-lg italic text-gold sm:text-2xl">
                {FIRM.tagline}
              </p>
            </Reveal>
            <Reveal delay={260}>
              <span className="gold-rule mt-8" />
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-foreground/80 sm:text-lg">
                A client-first legal practice built on integrity, diligence and
                measurable results. We advise individuals, families and businesses
                across civil, corporate and criminal matters, translating complex
                legal positions into clear, practical decisions.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-gold px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-accent-foreground transition-all hover:bg-gold-soft hover:shadow-[0_18px_40px_-14px_oklch(0.68_0.084_78/0.7)]"
                >
                  Book a Consultation
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center border border-ink-foreground/35 px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-ink-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  Contact Us
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Practice areas */}
      <section className="bg-background py-24">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Practice Areas</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Counsel across the matters that shape our clients&apos; interests
            </h2>
            <span className="gold-rule mt-6" />
          </Reveal>

          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {PRACTICE_AREAS.map((area, i) => (
              <Reveal key={area.slug} delay={i * 60}>
                <Link
                  to="/practice-areas"
                  hash={area.slug}
                  className="group flex h-full flex-col bg-card p-8 transition-all duration-300 hover:bg-ink"
                >
                  <span className="flex size-12 items-center justify-center border border-gold/45 text-gold transition-colors group-hover:bg-gold group-hover:text-accent-foreground">
                    <PracticeIcon icon={area.icon} />
                  </span>
                  <h3 className="mt-6 font-serif text-xl text-card-foreground transition-colors group-hover:text-ink-foreground">
                    {area.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-ink-foreground/70">
                    {area.short}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-gold">
                    Learn more
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={420} className="hidden lg:block">
              <div className="flex h-full flex-col justify-center bg-ink p-8">
                <p className="font-serif text-xl text-ink-foreground">
                  Not sure which area your matter falls under?
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-gold hover:text-gold-soft"
                >
                  Speak with us
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="bg-secondary py-24">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img
                src={scalesImg}
                alt="Brass scales of justice beside law books"
                loading="lazy"
                width={1280}
                height={960}
                className="w-full object-cover shadow-[var(--shadow-lift)]"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 -z-10 hidden h-full w-full border border-gold/50 sm:block"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">About the Firm</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              A practice defined by preparation, candour and care
            </h2>
            <span className="gold-rule mt-6" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Boss Legal Associates was established to offer considered, accessible
              legal representation to clients in Navi Mumbai and beyond. Every
              engagement begins with listening carefully, setting out the realistic
              options, and agreeing a strategy the client fully understands.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We hold ourselves to standards of integrity, confidentiality and
              responsiveness at every stage, whether a matter is resolved through
              negotiation or contested to judgment.
            </p>
            <Link
              to="/about"
              className="group mt-9 inline-flex items-center gap-3 border border-primary px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Learn More
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Office / contact preview */}
      <section className="bg-background py-24">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Our Office</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Visit us in CBD Belapur, Navi Mumbai
            </h2>
            <span className="gold-rule mt-6" />
            <ul className="mt-8 space-y-5 text-sm">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.5} />
                <span className="leading-relaxed text-muted-foreground">{FIRM.address}</span>
              </li>
              <li className="flex gap-4">
                <Phone className="size-5 shrink-0 text-gold" strokeWidth={1.5} />
                <a href={`tel:${FIRM.phone.replace(/\s/g, "")}`} className="text-muted-foreground transition-colors hover:text-gold">
                  {FIRM.phone}
                </a>
              </li>
              <li className="flex gap-4">
                <Mail className="size-5 shrink-0 text-gold" strokeWidth={1.5} />
                <span className="text-muted-foreground">
                  {FIRM.email}{" "}
                  <span className="text-xs italic">(to be updated)</span>
                </span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="group mt-9 inline-flex items-center gap-3 bg-primary px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-ink"
            >
              Get in Touch
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={officeImg}
              alt="Conference room of a modern law office overlooking a city skyline"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full object-cover shadow-[var(--shadow-card)]"
            />
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
