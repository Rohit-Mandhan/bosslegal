import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays } from "lucide-react";
import officeImg from "@/assets/office.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { ARTICLES, formatDate } from "@/lib/site";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Legal Insights | Boss Legal Associates" },
      {
        name: "description",
        content:
          "Articles, case-law notes and legal updates from Boss Legal Associates on Indian civil, criminal, property and commercial law.",
      },
      { property: "og:title", content: "Legal Insights | Boss Legal Associates" },
      {
        property: "og:description",
        content: "Articles, case-law notes and legal updates from our practice.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Insights,
});

function Insights() {
  return (
    <>
      <PageHero
        eyebrow="Legal Insights"
        title="Notes on legal developments and practical process"
        intro="Periodic articles, case-law updates and general commentary prepared by our team. These notes are for information only and do not constitute legal advice."
        image={officeImg}
      />

      <section className="bg-background py-24">
        <div className="container-page grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article, i) => (
            <Reveal key={article.slug} delay={i * 80}>
              <article className="group flex h-full flex-col border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[var(--shadow-lift)]">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold">
                  {article.category}
                </p>
                <h2 className="mt-4 font-serif text-xl leading-snug text-card-foreground">
                  <Link to="/insights/$slug" params={{ slug: article.slug }}>
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
                <div className="mt-7 flex items-center justify-between border-t border-border pt-5">
                  <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                    <CalendarDays className="size-3.5" strokeWidth={1.5} />
                    {formatDate(article.date)}
                  </span>
                  <Link
                    to="/insights/$slug"
                    params={{ slug: article.slug }}
                    className="inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-gold"
                  >
                    Read More
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="container-page mt-14">
          <p className="border-l-2 border-gold pl-6 text-sm italic leading-relaxed text-muted-foreground">
            Further articles will be published here as our practice publishes new
            commentary.
          </p>
        </Reveal>
      </section>

      <CtaBanner />
    </>
  );
}