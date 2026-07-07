import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How United Movers collects, uses, and protects your information, including our SMS and mobile messaging privacy practices.",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      crumb="Privacy Policy"
      updated="July 7, 2026"
    >
      <LegalSection title="Overview">
        <p>
          {site.legalName} (&ldquo;United Movers,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This
          Privacy Policy explains what information we collect when you contact us,
          request a quote, or use our website at {site.domain}, how we use that
          information, and the choices you have. By using our website or providing
          your information to us, you agree to the practices described here.
        </p>
      </LegalSection>

      <LegalSection title="Information we collect">
        <p>We collect information you give us directly, including:</p>
        <ul>
          <li>Your name, phone number, and email address.</li>
          <li>
            Details about your move, such as origin and destination addresses,
            move date, home size, and any notes you share.
          </li>
          <li>
            Messages and communications you send us by form, phone, text, or
            email.
          </li>
        </ul>
        <p>
          We also collect limited technical information automatically, such as
          your IP address, browser type, and pages viewed, through standard web
          analytics. This helps us keep the site working and improve it.
        </p>
      </LegalSection>

      <LegalSection title="How we use your information">
        <p>We use the information we collect to:</p>
        <ul>
          <li>Prepare and send you a moving quote.</li>
          <li>Schedule, coordinate, and complete your move.</li>
          <li>
            Respond to your questions and send service updates about your move.
          </li>
          <li>
            Send you text messages related to your request when you have opted
            in (see the Mobile Messaging section below).
          </li>
          <li>Keep records, meet legal obligations, and prevent fraud.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Mobile messaging and SMS">
        <p>
          When you provide your phone number and check the consent box on our
          contact form, or otherwise give us express written consent, you agree
          to receive text messages from United Movers related to your quote,
          scheduling, and service updates. Message frequency varies. Message and
          data rates may apply.
        </p>
        <p>
          <strong>
            No mobile information will be shared with third parties or affiliates
            for marketing or promotional purposes. All of the above categories
            exclude text messaging originator opt-in data and consent; this
            information will not be shared with any third parties.
          </strong>
        </p>
        <p>
          You can opt out of text messages at any time by replying{" "}
          <strong>STOP</strong> to any message you receive from us. After you
          reply STOP, we will send one confirmation message and then stop sending
          texts, unless you opt back in. For help, reply <strong>HELP</strong> or
          contact us at <a href={site.phoneHref}>{site.phone}</a>. Consent to
          receive text messages is not a condition of purchasing any service.
        </p>
      </LegalSection>

      <LegalSection title="How we share information">
        <p>
          We do not sell your personal information. We do not share your mobile
          opt-in information or consent with any third party for their own
          marketing. We may share information only in these limited cases:
        </p>
        <ul>
          <li>
            With trusted service providers who help us operate our business, such
            as scheduling, dispatch, or email tools, and only to perform work on
            our behalf.
          </li>
          <li>
            When required by law, subpoena, or to protect the rights, property, or
            safety of United Movers, our customers, or others.
          </li>
          <li>
            In connection with a business transfer, such as a merger or sale, with
            notice to you where required.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Data retention">
        <p>
          We keep your information for as long as needed to provide our services,
          maintain business records, and comply with our legal obligations. When
          we no longer need it, we take reasonable steps to securely delete or
          de-identify it.
        </p>
      </LegalSection>

      <LegalSection title="How we protect your information">
        <p>
          We use reasonable administrative, technical, and physical safeguards to
          protect the information we collect. No method of transmission or storage
          is completely secure, so we cannot guarantee absolute security, but we
          work to protect your information and limit access to it.
        </p>
      </LegalSection>

      <LegalSection title="Your choices">
        <ul>
          <li>
            You can opt out of text messages any time by replying STOP.
          </li>
          <li>
            You can ask us to update or delete the information we hold about you by
            contacting us using the details below.
          </li>
          <li>
            You can unsubscribe from any marketing email using the link in the
            message.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Children's privacy">
        <p>
          Our website and services are intended for adults. We do not knowingly
          collect personal information from children under 13. If you believe a
          child has provided us information, please contact us and we will remove
          it.
        </p>
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. When we do, we will
          revise the &ldquo;Last updated&rdquo; date at the top of this page.
          Continued use of our website after a change means you accept the updated
          policy.
        </p>
      </LegalSection>

      <LegalSection title="Contact us">
        <p>
          If you have questions about this Privacy Policy or your information,
          contact us at:
        </p>
        <p>
          {site.legalName}
          <br />
          {site.address.line1}, {site.address.city}, {site.address.state}{" "}
          {site.address.zip}
          <br />
          Phone: <a href={site.phoneHref}>{site.phone}</a>
          <br />
          Email: <a href={site.emailHref}>{site.email}</a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
