import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake, Gavel, Eye, Clock } from "lucide-react";
import handshakeImg from "@/assets/handshake.jpg";
import officeImg from "@/assets/office.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Firm | Boss Legal Associates" },
      {
        name: "description",
        content:
          "Learn about Boss Legal Associates: our mission, values of integrity and client-centricity, and why clients in Navi Mumbai choose our practice.",
      },
      { property: "og:title", content: "About the Firm | Boss Legal Associates" },
      {
        property: "og:description",
        content:
          "Our mission, values and approach to client-first legal representation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const values = [
  {
    title: "Integrity",
    body: "Advice is given candidly, including when the answer is not the one a client hoped for.",
  },
  {
    title: "Client-Centricity",
    body: "Strategy is built around the client's objectives, timelines and appetite for risk.",
  },
  {
    title: "Excellence",
    body: "Thorough preparation, disciplined drafting and careful attention to procedure.",
  },
  {
    title: "Dedication to Justice",
    body: "A commitment to fair process and to representing every matter with equal seriousness.",
  },
];

const pillars = [
  {
    Icon: HeartHandshake,
    title: "Client-Focused Approach",
    body: "We begin with a detailed understanding of the facts and the outcome that matters most to you, then shape the legal strategy around it.",
  },
  {
    Icon: Gavel,
    title: "Proven Expertise",
    body: "Our practice spans civil, criminal, corporate, property, banking, labour and advisory work, allowing us to address matters that cut across areas.",
  },
  {
    Icon: Eye,
    title: "Transparent Process",
    body: "Scope, likely stages and fee structure are explained at the outset, and you are kept informed of every material development.",
  },
  {
    Icon: Clock,
    title: "Timely Resolution",
    body: "We work to avoid unnecessary delay, pursuing settlement or alternative resolution wherever it genuinely serves the client's interest.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A modern practice grounded in traditional professional values"
        intro="Boss Legal Associates is a legal practice based in CBD Belapur, Navi Mumbai, advising individuals, families and businesses on contentious and advisory matters."
        image={handshakeImg}
      />

      <section className="bg-background py-24">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <p className="eyebrow">Our Mission</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Clear counsel, carefully executed
            </h2>
            <span className="gold-rule mt-6" />
          </Reveal>
          <Reveal delay={120} className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Our mission is to provide legal representation that is rigorous in
              preparation and straightforward in communication. We believe clients
              are best served when they understand not only what the law permits,
              but what it will practically take to achieve a result.
            </p>
            <p>
              The firm handles matters across litigation and advisory work, and
              maintains a deliberate balance between the two. Contentious
              experience informs the documents we draft; advisory work keeps our
              litigation grounded in commercial reality.
            </p>
            <p>
              Confidentiality is absolute. Every engagement is handled with the
              discretion that professional obligations and client trust require.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-24 text-ink-foreground">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Our Values</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              The principles behind every engagement
            </h2>
            <span className="gold-rule mt-6" />
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <p className="font-serif text-3xl text-gold/60">0{i + 1}</p>
                <h3 className="mt-4 font-serif text-xl">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-foreground/70">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              What working with our team looks like
            </h2>
            <span className="gold-rule mt-6" />
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {pillars.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="group h-full border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[var(--shadow-lift)]">
                  <span className="flex size-12 items-center justify-center border border-gold/45 text-gold transition-colors group-hover:bg-gold group-hover:text-accent-foreground">
                    <Icon className="size-6" strokeWidth={1.4} />
                  </span>
                  <h3 className="mt-6 font-serif text-xl text-card-foreground">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Philosophy &amp; Vision</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Access to considered legal advice should never feel out of reach
            </h2>
            <span className="gold-rule mt-6" />
            <blockquote className="mt-8 border-l-2 border-gold pl-6 text-lg italic leading-relaxed text-foreground/85">
              We aim to be the practice clients return to — not because a matter was
              won or lost, but because they were advised honestly, kept informed, and
              represented with genuine care.
            </blockquote>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Our long-term vision is a practice that grows through the confidence of
              the clients it serves, while continuing to invest in depth of research,
              quality of drafting and professional conduct of the highest order.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={officeImg}
              alt="Law office conference room with city view"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}