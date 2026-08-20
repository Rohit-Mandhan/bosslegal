import { createFileRoute } from "@tanstack/react-router";
import scalesImg from "@/assets/scales.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { FIRM } from "@/lib/site";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer & Privacy Policy | Boss Legal Associates" },
      {
        name: "description",
        content:
          "Bar Council of India compliant disclaimer and the privacy policy of Boss Legal Associates covering enquiry data, cookies and confidentiality.",
      },
      { property: "og:title", content: "Disclaimer & Privacy Policy | Boss Legal Associates" },
      {
        property: "og:description",
        content: "Terms of access to this website and our privacy commitments.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Disclaimer,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal className="border-t border-border pt-10">
      <h2 className="font-serif text-2xl text-foreground">{title}</h2>
      <span className="gold-rule mt-5" />
      <div className="mt-6 space-y-5 text-base leading-[1.85] text-muted-foreground">
        {children}
      </div>
    </Reveal>
  );
}

function Disclaimer() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Disclaimer & Privacy Policy"
        intro="Please read the following terms carefully before proceeding to use or rely upon any part of this website."
        image={scalesImg}
      />

      <section className="bg-background py-24">
        <div className="container-page max-w-3xl space-y-14">
          <Section title="Disclaimer">
            <p>
              The Bar Council of India does not permit advertisement or solicitation
              by advocates in any form or manner. This website is not intended to be
              a source of advertising, solicitation or inducement, and the contents
              hereof should not be construed as legal advice.
            </p>
            <p>
              By accessing this website, the user acknowledges and confirms that the
              user is seeking information relating to {FIRM.name} of the user&apos;s
              own accord and that there has been no form of solicitation,
              advertisement or inducement by {FIRM.name} or any of its members. The
              information provided on this website is made available solely at the
              user&apos;s specific request and is for the user&apos;s own information
              and personal use only.
            </p>
            <p>
              Nothing contained on this website constitutes or is intended to
              constitute legal advice, nor does the transmission or receipt of any
              information from this website create an advocate-client relationship
              between the user and {FIRM.name}. The firm shall not be liable for any
              consequence of any action taken by the user relying on material or
              information published on this website.
            </p>
            <p>
              While reasonable care has been taken in preparing the contents of this
              website, the firm does not warrant that the information is accurate,
              complete or current at all times. Users are advised to seek independent
              legal advice in respect of their specific facts and circumstances
              before acting on any information contained herein.
            </p>
            <p>
              All material and content on this website is the intellectual property
              of {FIRM.name} and may not be reproduced, republished or otherwise
              exploited without prior written permission.
            </p>
          </Section>

          <Section title="Privacy Policy">
            <p>
              <strong className="text-foreground">Information we collect.</strong> Where
              a user voluntarily submits the enquiry form on this website, we collect
              the name, email address, telephone number, selected subject or practice
              area and message content provided by the user. We do not require or
              request any sensitive personal information through this website.
            </p>
            <p>
              <strong className="text-foreground">Purpose of use.</strong> Information
              submitted is used solely to respond to the enquiry, to assess whether
              the firm is able to assist, and to maintain a record of correspondence.
              We do not sell, rent or trade user information, and we do not use it for
              marketing communications.
            </p>
            <p>
              <strong className="text-foreground">Confidentiality.</strong> All
              communications received are treated as confidential and are accessible
              only to members of the firm who need access in order to respond. Users
              are nonetheless requested not to transmit confidential or privileged
              material through this website before an engagement is formally
              established.
            </p>
            <p>
              <strong className="text-foreground">Cookies and analytics.</strong> This
              website may use functional cookies and similar technologies necessary
              for site operation and, where enabled, aggregate analytics to understand
              usage patterns. Such data is examined in aggregate form and is not used
              to identify individual visitors. Users may disable cookies through their
              browser settings, though certain features may then not function as
              intended.
            </p>
            <p>
              <strong className="text-foreground">Third-party content.</strong> This
              website embeds a third-party map service to display the office location.
              Use of that service is governed by the privacy terms of the relevant
              provider.
            </p>
            <p>
              <strong className="text-foreground">Retention and access.</strong>{" "}
              Enquiry records are retained only for as long as necessary for the
              purpose for which they were collected or as required by applicable law.
              A user may request correction or deletion of information submitted
              through the enquiry form by writing to the firm at its office address.
            </p>
            <p>
              <strong className="text-foreground">Amendments.</strong> This policy may
              be revised from time to time, and the revised version will be published
              on this page.
            </p>
          </Section>
        </div>
      </section>
    </>
  );
}