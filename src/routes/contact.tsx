import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { toast } from "sonner";
import handshakeImg from "@/assets/handshake.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { FIRM, PRACTICE_AREAS } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Boss Legal Associates, CBD Belapur" },
      {
        name: "description",
        content:
          "Contact Boss Legal Associates at Office No. 403, Mayuresh Square, Sector 15, CBD Belapur, Navi Mumbai. Send an enquiry or book a consultation.",
      },
      { property: "og:title", content: "Contact Us | Boss Legal Associates" },
      {
        property: "og:description",
        content: "Book a consultation with our team in CBD Belapur, Navi Mumbai.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const fieldClass =
  "w-full border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold";

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Enquiry noted", {
        description:
          "Thank you. Message delivery will be enabled once the firm's email and phone details are confirmed.",
      });
    }, 500);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get in touch with Boss Legal Associates"
        intro="Share a brief outline of your matter and our team will respond with the next practical step. All enquiries are treated in confidence."
        image={handshakeImg}
      />

      <section className="bg-background py-24">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">Office</p>
            <h2 className="mt-4 text-3xl leading-tight">Visit or write to us</h2>
            <span className="gold-rule mt-6" />
            <ul className="mt-8 space-y-6 text-sm">
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
                  {FIRM.email} <span className="text-xs italic">(to be updated)</span>
                </span>
              </li>
              <li className="flex gap-4">
                <Clock className="size-5 shrink-0 text-gold" strokeWidth={1.5} />
                <span className="text-muted-foreground">
                  Consultations by prior appointment
                </span>
              </li>
            </ul>

            <a
              href={FIRM.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-3 border border-primary px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <MessageCircle className="size-4" strokeWidth={1.6} />
              Chat on WhatsApp
            </a>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={onSubmit}
              className="border border-border bg-card p-8 shadow-[var(--shadow-card)] md:p-10"
            >
              <h2 className="font-serif text-2xl text-card-foreground">Enquiry Form</h2>
              <span className="gold-rule mt-5" />
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <label className="block sm:col-span-1">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Name
                  </span>
                  <input required name="name" placeholder="Full name" className={`mt-2 ${fieldClass}`} />
                </label>
                <label className="block sm:col-span-1">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className={`mt-2 ${fieldClass}`}
                  />
                </label>
                <label className="block sm:col-span-1">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Phone
                  </span>
                  <input
                    required
                    name="phone"
                    inputMode="tel"
                    placeholder="+91"
                    className={`mt-2 ${fieldClass}`}
                  />
                </label>
                <label className="block sm:col-span-1">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Subject / Practice Area
                  </span>
                  <select required name="subject" defaultValue="" className={`mt-2 ${fieldClass}`}>
                    <option value="" disabled>
                      Select an area
                    </option>
                    {PRACTICE_AREAS.map((a) => (
                      <option key={a.slug} value={a.title}>
                        {a.title}
                      </option>
                    ))}
                    <option value="Other">Other / Not sure</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Message
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Briefly describe your matter"
                    className={`mt-2 resize-y ${fieldClass}`}
                  />
                </label>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="mt-8 w-full bg-gold px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-accent-foreground transition-all hover:bg-gold-soft hover:shadow-[0_16px_36px_-14px_oklch(0.68_0.084_78/0.7)] disabled:opacity-60 sm:w-auto"
              >
                {submitting ? "Submitting…" : "Submit Enquiry"}
              </button>
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                Submitting this form does not create an advocate-client relationship.
                Please do not include confidential details in your first message.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary pb-24">
        <Reveal className="container-page">
          <div className="border border-border bg-card p-2 shadow-[var(--shadow-card)]">
            <iframe
              title="Map showing Mayuresh Square, Sector 15, CBD Belapur, Navi Mumbai"
              src="https://www.google.com/maps?q=Mayuresh%20Square%2C%20Plot%20No.%2017%2C%20Sector%2015%2C%20CBD%20Belapur%2C%20Navi%20Mumbai%2C%20400601&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full border-0 md:h-[440px]"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}