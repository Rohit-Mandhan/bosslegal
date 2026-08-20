<<<<<<<
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import scalesImg from "@/assets/scales.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { PracticeIcon } from "@/components/PracticeIcon";
import { PRACTICE_AREAS } from "@/lib/site";

export const Route = createFileRoute("/practice-areas")({
  head: () => ({
    meta: [
      { title: "Practice Areas | Boss Legal Associates" },
      {
        name: "description",
        content:
          "Civil litigation, property and real estate, corporate and commercial, banking and finance, criminal litigation, labour and employment, and legal advisory services.",
      },
      { property: "og:title", content: "Practice Areas | Boss Legal Associates" },
      {
        property: "og:description",
        content: "Seven practice areas spanning litigation, advisory and documentation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PracticeAreas,
});

function PracticeAreas() {
  return (
    <>
      <PageHero
        eyebrow="Practice Areas"
        title="Focused expertise across seven core areas of law"
        intro="Our practice covers contentious and advisory work. Where a matter spans more than one area, it is handled cohesively rather than in isolation."
        image={scalesImg}
      />

      <section className="bg-background py-24">
        <div className="container-page space-y-6">
          {PRACTICE_AREAS.map((area, i) => (
            <Reveal key={area.slug} delay={(i % 3) * 60}>
              <article
                id={area.slug}
                className="group scroll-mt-28 border border-border bg-card p-8 transition-all duration-300 hover:border-gold/50 hover:shadow-[var(--shadow-lift)] md:p-10"
              >
                <div className="flex flex-col gap-8 md:flex-row md:items-start">
                  <div className="flex items-center gap-5 md:w-72 md:shrink-0 md:flex-col md:items-start">
                    <span className="flex size-14 items-center justify-center border border-gold/45 text-gold transition-colors group-hover:bg-gold group-hover:text-accent-foreground">
                      <PracticeIcon icon={area.icon} className="size-7" />
                    </span>
                    <span className="font-serif text-4xl text-muted-foreground/25">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-serif text-2xl text-card-foreground md:text-[1.7rem]">
                      {area.title}
                    </h2>
                    <span className="gold-rule mt-5" />
                    <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                      {area.detail}
                    </p>
                    <Link
                      to="/contact"
                      className="mt-6 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-gold hover:text-accent-foreground"
                    >
                      Enquire about this area
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}