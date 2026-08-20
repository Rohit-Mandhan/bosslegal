import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { ARTICLES, formatDate } from "@/lib/site";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const article = loaderData?.article;
    if (!article) {
      return {
        meta: [
          { title: "Article Unavailable | Boss Legal Associates" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return {
      meta: [
        { title: `${article.title} | Boss Legal Associates` },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();

  return (
    <>
      <section className="bg-ink pt-36 pb-16 text-ink-foreground md:pt-44">
        <div className="container-page max-w-3xl">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-gold hover:text-gold-soft"
          >
            <ArrowLeft className="size-3.5" />
            All Insights
          </Link>
          <p className="mt-8 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold">
            {article.category}
          </p>
          <h1 className="mt-4 text-3xl leading-[1.15] md:text-[2.75rem]">{article.title}</h1>
          <span className="mt-7 inline-flex items-center gap-2 text-xs text-ink-foreground/60">
            <CalendarDays className="size-3.5" strokeWidth={1.5} />
            {formatDate(article.date)}
          </span>
        </div>
      </section>

      <section className="bg-background py-20">
        <Reveal className="container-page max-w-3xl space-y-6">
          {article.body.map((para) => (
            <p key={para.slice(0, 24)} className="text-base leading-[1.85] text-muted-foreground">
              {para}
            </p>
          ))}
          <p className="border-l-2 border-gold pl-6 text-sm italic leading-relaxed text-muted-foreground">
            This article is general information and does not constitute legal advice.
            Please seek advice specific to your circumstances.
          </p>
        </Reveal>
      </section>

      <CtaBanner />
    </>
  );
}