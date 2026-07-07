import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms that govern your use of the United Movers website and our SMS text messaging program, including opt-in, opt-out, and message and data rate details.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      crumb="Terms & Conditions"
      updated="July 7, 2026"
    >
      <LegalSection title="Agreement to terms">
        <p>
          These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of the
          website at {site.domain} and your communications with{" "}
          {site.legalName} (&ldquo;United Movers,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By using this website,
          submitting a form, or joining our text messaging program, you agree to
          these Terms. If you do not agree, please do not use the website or the
          messaging program.
        </p>
      </LegalSection>

      <LegalSection title="Quotes and estimates">
        <p>
          Quotes provided through this website or by phone are estimates based on
          the information you give us. Final pricing depends on the actual
          inventory, access, distance, and services required on move day. A
          binding price, when offered, will be confirmed in a written moving
          agreement before your move. Nothing on this website is a guarantee of
          availability or final price.
        </p>
      </LegalSection>

      <LegalSection title="SMS text messaging program">
        <p>
          United Movers offers a text messaging program to help you request and
          coordinate moving services. The details below describe the program and
          how it works.
        </p>
        <ul>
          <li>
            <strong>Program description.</strong> When you opt in, we send text
            messages about your quote, scheduling, move coordination, and related
            customer service. These are conversational and transactional messages
            tied to the request you submitted.
          </li>
          <li>
            <strong>How to opt in.</strong> You opt in by providing your mobile
            number and checking the consent box on our contact form, by texting us
            first, or by giving us express written consent to text you. Consent is
            not a condition of purchasing any goods or services.
          </li>
          <li>
            <strong>Message frequency.</strong> Message frequency varies based on
            your interaction with us and the status of your move.
          </li>
          <li>
            <strong>Cost.</strong> Message and data rates may apply. These charges
            come from your mobile carrier and are your responsibility. Check your
            plan for details.
          </li>
          <li>
            <strong>Opt out.</strong> You can cancel at any time by replying{" "}
            <strong>STOP</strong> to any message from us. After you reply STOP, we
            will send one confirmation message and will not send you any further
            texts unless you opt back in.
          </li>
          <li>
            <strong>Help.</strong> For help, reply <strong>HELP</strong> to any
            message or contact us at <a href={site.phoneHref}>{site.phone}</a>.
          </li>
          <li>
            <strong>Carriers.</strong> Carriers are not liable for delayed or
            undelivered messages. Message delivery is subject to effective
            transmission by your mobile carrier and is not guaranteed.
          </li>
          <li>
            <strong>Privacy.</strong> Your mobile opt-in information and consent
            are never shared with third parties or affiliates for marketing
            purposes. See our <a href="/privacy-policy">Privacy Policy</a> for
            full details.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Use of the website">
        <p>You agree not to:</p>
        <ul>
          <li>
            Use the website in any way that violates applicable law or regulation.
          </li>
          <li>
            Attempt to gain unauthorized access to the website, its servers, or
            any connected systems.
          </li>
          <li>
            Submit false, misleading, or fraudulent information, or use another
            person&rsquo;s contact details without permission.
          </li>
          <li>
            Interfere with or disrupt the website or the networks connected to it.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Intellectual property">
        <p>
          The content on this website, including text, graphics, logos, and
          images, is owned by or licensed to United Movers and is protected by
          applicable intellectual property laws. You may not copy, reproduce, or
          distribute it without our written permission.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimers">
        <p>
          The website is provided on an &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; basis. While we work to keep information accurate and
          current, we do not warrant that the website will be error free,
          uninterrupted, or free of harmful components. Your use of the website is
          at your own risk.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of liability">
        <p>
          To the fullest extent permitted by law, United Movers is not liable for
          any indirect, incidental, or consequential damages arising from your use
          of the website or the text messaging program. Liability related to your
          actual move is governed by the separate written moving agreement and
          applicable state and federal moving regulations.
        </p>
      </LegalSection>

      <LegalSection title="Governing law">
        <p>
          These Terms are governed by the laws of the State of Florida, without
          regard to its conflict of law rules. Any dispute relating to these Terms
          or the website will be handled in the state or federal courts located in
          Miami-Dade County, Florida.
        </p>
      </LegalSection>

      <LegalSection title="Changes to these terms">
        <p>
          We may update these Terms from time to time. Changes take effect when we
          post them, and we will update the &ldquo;Last updated&rdquo; date above.
          Your continued use of the website or messaging program after a change
          means you accept the updated Terms.
        </p>
      </LegalSection>

      <LegalSection title="Contact us">
        <p>
          Questions about these Terms? Reach us at:
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
