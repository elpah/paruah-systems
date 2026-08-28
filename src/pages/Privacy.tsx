import LegalLayout, { LegalSection } from '@/components/sharedUi/LegalLayout';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <LegalLayout
      cat="Legal"
      header="Privacy"
      italicHeader="Policy"
      paragraph="How we collect, use, and protect information when you visit this website or contact Paruah Systems."
      lastUpdated="28 August 2026"
    >
      <LegalSection title="1. Who we are">
        <p>
          This Privacy Policy explains how Paruah Systems (“Paruah Systems”, “we”, “us”, or “our”)
          handles personal information in connection with this website and related inquiries.
        </p>
        <p>
          Paruah Systems is a software and digital services company registered in Ghana, the
          Netherlands, and Canada. Depending on where you are located and how you engage with us,
          the Paruah Systems entity that interacts with you may vary. This policy is intended to
          describe our practices across those operations in a single, consistent way.
        </p>
        <p>
          If you have questions about this policy or about your personal information, contact us at{' '}
          <a
            href="mailto:info@paruah.com"
            className="text-[#0D3D3D] font-semibold underline underline-offset-2"
          >
            info@paruah.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="2. Scope">
        <p>This policy applies to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            this website, including pages such as Home, Solutions, Custom Dev, Projects, About, and
            Contact;
          </li>
          <li>inquiry and contact forms on the website;</li>
          <li>
            email and messaging you send to the contact details published on this website; and
          </li>
          <li>related communications we send in response to those inquiries.</li>
        </ul>
        <p>
          It does not automatically apply to third-party websites we may link to, to software
          products we build for clients under separate agreements, or to employee or recruitment
          processes, unless we say otherwise.
        </p>
      </LegalSection>

      <LegalSection title="3. Personal information we collect">
        <p>The information we collect depends on how you use the site.</p>
        <p>
          <span className="font-semibold text-slate-800">Information you provide.</span> When you
          submit the contact form, we collect the details you enter, which currently include your
          name, email address, entity or company name (if provided), project type, and message. If
          you email us or contact us through WhatsApp using the details on this website, we receive
          the information you choose to send, such as your phone number, name, and the content of
          the conversation.
        </p>
        <p>
          <span className="font-semibold text-slate-800">Technical and usage information.</span>{' '}
          Like most websites, our hosting and content-delivery infrastructure may automatically
          process limited technical data needed to operate and secure the site. This can include
          internet protocol (IP) address, browser type, device and operating-system information,
          referring URL, pages requested, and timestamps. We do not use this website to run
          advertising profiles about you.
        </p>
        <p>
          We do not ask you to create an account on this website, and we do not collect payment card
          details through this site.
        </p>
      </LegalSection>

      <LegalSection title="4. How we use personal information">
        <p>We use personal information to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>respond to inquiries and discuss potential projects or services;</li>
          <li>
            send an acknowledgement when you submit the contact form, where that feature is enabled;
          </li>
          <li>operate, maintain, and improve the website;</li>
          <li>protect the security and integrity of our systems; and</li>
          <li>
            comply with legal obligations that apply to us, and to establish, exercise, or defend
            legal claims.
          </li>
        </ul>
        <p>We do not sell your personal information.</p>
      </LegalSection>

      <LegalSection title="5. Contact form and EmailJS">
        <p>
          The contact form on this website is processed using EmailJS, a third-party email delivery
          service. When you submit an inquiry, the information you enter is transmitted to EmailJS
          so that we can receive your message and, where configured, so that an automatic reply can
          be sent to the email address you provide.
        </p>
        <p>
          EmailJS acts as a service provider / processor for this purpose. Its handling of data is
          also governed by EmailJS’s own terms and privacy documentation. We use this service only
          to deliver and acknowledge inquiries, not to build marketing lists from the form.
        </p>
      </LegalSection>

      <LegalSection title="6. Cookies, analytics, and similar technologies">
        <p>
          This website is a static marketing site. We do not currently operate a first-party
          advertising cookie, a client-side analytics dashboard that we control, or a cookie-consent
          banner tied to optional tracking.
        </p>
        <p>
          Essential or strictly technical storage may still be used by the browser, hosting
          platform, or embedded resources in order for the site to load and function. Our hosting
          provider may also generate standard server logs and security telemetry.
        </p>
        <p>
          If we later introduce optional analytics or non-essential cookies, we will update this
          policy and, where required, provide an appropriate notice or choice mechanism.
        </p>
      </LegalSection>

      <LegalSection title="7. Third-party services">
        <p>
          We use reputable third parties to help us run the website and communicate with you. These
          currently include, or may include:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>website hosting and content delivery (including Vercel);</li>
          <li>EmailJS, for sending and acknowledging contact-form messages;</li>
          <li>Cloudinary, for delivering some images displayed on the site;</li>
          <li>Google Fonts, which may be requested by your browser when pages load; and</li>
          <li>
            WhatsApp / Meta, if you choose to contact us through the WhatsApp link on the site.
          </li>
        </ul>
        <p>
          Some pages also display images served from other content sources. Those providers may
          receive technical information (such as IP address) as a normal part of delivering the
          file. Third-party services have their own privacy practices. We encourage you to review
          them if you want detail about how those providers process data.
        </p>
      </LegalSection>

      <LegalSection title="8. Legal bases and applicable privacy laws">
        <p>
          Because Paruah Systems operates in Ghana, the Netherlands, and Canada, different privacy
          regimes may apply depending on your location and the nature of the processing. These can
          include Ghana’s Data Protection Act, 2012 (Act 843), the EU/EEA General Data Protection
          Regulation (GDPR) and related Dutch implementation, and Canadian laws such as the Personal
          Information Protection and Electronic Documents Act (PIPEDA) and any applicable provincial
          legislation.
        </p>
        <p>Where a legal basis is required, we typically rely on one or more of the following:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            steps taken at your request before entering into a contract, or performance of a
            contract;
          </li>
          <li>
            our legitimate interests in operating this website, responding to business inquiries,
            and securing our systems, provided those interests are not overridden by your rights;
          </li>
          <li>consent, where we ask for it or where it is required; and</li>
          <li>compliance with a legal obligation.</li>
        </ul>
        <p>
          We will not rely on a legal basis that does not apply to you. If a local law gives you
          rights or imposes requirements that this policy does not spell out in full, those
          mandatory rules still apply.
        </p>
      </LegalSection>

      <LegalSection title="9. International transfers">
        <p>
          We operate across Ghana, the Netherlands, and Canada, and our service providers may
          process information in other countries. That means personal information submitted through
          this website may be transferred to, stored in, or accessed from a country other than your
          own.
        </p>
        <p>
          Where a transfer is restricted by law, we take steps appropriate to the circumstances and
          to the requirements that apply to us, such as using providers that offer contractual
          protections or other recognized transfer mechanisms. The precise safeguards depend on the
          provider and the applicable regime.
        </p>
      </LegalSection>

      <LegalSection title="10. Retention">
        <p>
          We keep inquiry and correspondence records for as long as needed to respond to you, manage
          a potential or ongoing business relationship, meet legal or accounting requirements, and
          resolve disputes. Technical logs are generally retained only for a limited operational
          period determined by the relevant service provider or by our security needs.
        </p>
        <p>
          When information is no longer required, we delete it or restrict access to it in a
          reasonable manner.
        </p>
      </LegalSection>

      <LegalSection title="11. How we share information">
        <p>
          We share personal information only when it is needed for the purposes above, including
          with:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            service providers who process information on our instructions, such as email delivery
            and hosting providers;
          </li>
          <li>
            professional advisers (for example legal or accounting advisers) where reasonably
            required; and
          </li>
          <li>
            authorities or other parties if we are legally required to do so, or if it is necessary
            to protect rights, safety, or the integrity of our services.
          </li>
        </ul>
        <p>
          If we reorganize our business, information may be transferred as part of that process,
          subject to appropriate confidentiality and legal requirements.
        </p>
      </LegalSection>

      <LegalSection title="12. Your rights">
        <p>
          Depending on where you live, you may have rights to request access to personal information
          we hold about you, to correct it, to delete it, to restrict or object to certain
          processing, to withdraw consent where processing is based on consent, and to data
          portability. You may also have the right to lodge a complaint with a competent data
          protection or privacy authority in your jurisdiction.
        </p>
        <p>
          To make a request, email{' '}
          <a
            href="mailto:info@paruah.com"
            className="text-[#0D3D3D] font-semibold underline underline-offset-2"
          >
            info@paruah.com
          </a>
          . We may need to verify your identity before fulfilling a request. Some rights are not
          absolute, and we may decline or limit a request where the law allows or requires us to do
          so. We will explain that decision where we are required to.
        </p>
      </LegalSection>

      <LegalSection title="13. Children">
        <p>
          This website is intended for business and professional use. We do not knowingly collect
          personal information from children through the contact form. If you believe a child has
          provided us with personal information, please contact us and we will take appropriate
          steps to delete it.
        </p>
      </LegalSection>

      <LegalSection title="14. Security">
        <p>
          We use reasonable technical and organizational measures appropriate to the nature of a
          marketing website and inquiry form. No method of transmission or storage is completely
          secure. You should also take care when sending information over email or messaging apps.
        </p>
      </LegalSection>

      <LegalSection title="15. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. The “Last updated” date at the top of
          this page will change when we do. The current version published on this website is the
          version that applies.
        </p>
      </LegalSection>

      <LegalSection title="16. Contact">
        <p>
          For privacy questions or requests, contact Paruah Systems at{' '}
          <a
            href="mailto:info@paruah.com"
            className="text-[#0D3D3D] font-semibold underline underline-offset-2"
          >
            info@paruah.com
          </a>
          . You may also use the{' '}
          <Link to="/contact" className="text-[#0D3D3D] font-semibold underline underline-offset-2">
            contact page
          </Link>
          .
        </p>
        <p>
          Our{' '}
          <Link to="/terms" className="text-[#0D3D3D] font-semibold underline underline-offset-2">
            Terms of Service
          </Link>{' '}
          describe additional terms that govern use of this website.
        </p>
      </LegalSection>
    </LegalLayout>
  );
};

export default Privacy;
