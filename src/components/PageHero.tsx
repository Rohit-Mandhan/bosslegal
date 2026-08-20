import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pt-32 pb-20 md:pt-40 md:pb-28">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full object-cover opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="container-page max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 text-4xl leading-[1.1] text-ink-foreground md:text-5xl lg:text-[3.4rem]">
          {title}
        </h1>
        <span className="gold-rule mt-7" />
        {intro ? (
          <p className="mt-7 text-base leading-relaxed text-ink-foreground/75 md:text-lg">
            {intro}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}