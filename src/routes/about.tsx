import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake, Gavel, Eye, Clock } from "lucide-react";
import handshakeImg from "@/assets/handshake.jpg";
import officeConferenceAsset from "@/assets/office-conference.png.asset.json";
import founderAsset from "@/assets/founder.png.asset.json";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";

const founderImg = founderAsset.url;

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

const qualifications = [
  "Doctor of Philosophy (Ph.D.) in Law — Maryland State University (USA).",
  "Master of Laws (LL.M.) — Jindal Global Law School (Institution of Eminence), O.P. Jindal Global University.",
  "14+ Years of Active Legal Practice — extensive experience in bridging complex legal frameworks with actionable, real-world solutions.",
];

const honours = [
  "Dr. A.P.J. Abdul Kalam Bharat Puraskar — Conferred in recognition of outstanding professional contributions and unwavering commitment to excellence.",
  "Bharat Gaurav Ratna Shri Sammaan Award — Awarded for remarkable achievements in the legal field and significant leadership in women's empowerment.",
  "Government of India Honour — Felicitated for exceptional contributions toward the advancement of human rights and women's welfare.",
  "Advocate Excellence Award — Recognised for exemplary legal service, professional integrity, and steadfast dedication to social justice.",
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Welcome to Boss Legal Associates"
        intro="A premier full-service law firm dedicated to providing exceptional legal strategy, compassionate advocacy, and transformative solutions."
        image={handshakeImg}
      />

      <section className="bg-background py-24">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <p className="eyebrow">Who We Are</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              A firm built on integrity, knowledge and purpose
            </h2>
            <span className="gold-rule mt-6" />
          </Reveal>
          <Reveal delay={120} className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Welcome to Boss Legal Associates, a premier full-service law firm
              dedicated to providing exceptional legal strategy, compassionate
              advocacy, and transformative solutions. Built on a foundation of
              integrity, deep industry knowledge, and academic rigor, our
              practice bridges high-level global legal standards with impactful
              local execution.
            </p>
            <p>
              With a multidisciplinary team of 15+ dedicated legal
              professionals, researchers, and support staff, Boss Legal
              Associates handles complex legal matters with precision,
              confidentiality, and an unyielding commitment to justice. Whether
              advising corporate entities or advocating for systemic change, we
              tailor our strategies to protect our clients' interests and secure
              meaningful outcomes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="container-page grid items-start gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Leadership</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              About the Founder
            </h2>
            <span className="gold-rule mt-6" />
            <div className="mt-8">
              <h3 className="font-serif text-2xl text-foreground md:text-3xl">
                Dr. Kiran Chachlani
              </h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-gold">
                Founder & Managing Director
              </p>
            </div>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Dr. Kiran Chachlani is a distinguished advocate and legal
                scholar whose career spans over 14 years of impactful legal
                practice. Renowned for combining international academic research
                with domestic legal expertise, she stands as one of the rare
                Indian women advocates to hold an international doctoral degree
                in legal studies.
              </p>
              <p>
                Throughout her career, Dr. Chachlani has balanced high-stakes
                legal advocacy with a profound dedication to pro bono service,
                grassroots leadership, and the empowerment of marginalised
                communities. Her contributions to the legal field, human
                rights, and social justice have earned her widespread national
                and international recognition.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <img
              src={founderImg}
              alt="Dr. Kiran Chachlani, Founder & Managing Director"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>

          <Reveal className="lg:col-span-2">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h4 className="font-serif text-xl text-foreground">
                  Key Qualifications & Credentials
                </h4>
                <ul className="mt-5 list-disc space-y-3 pl-5 text-muted-foreground">
                  {qualifications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-serif text-xl text-foreground">
                  Honours & Recognitions
                </h4>
                <ul className="mt-5 list-disc space-y-3 pl-5 text-muted-foreground">
                  {honours.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
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
              src={officeConferenceAsset.url}
              alt="Boss Legal Associates conference room at the CBD Belapur office"
              loading="lazy"
              width={1229}
              height={769}
              className="w-full object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
