import LegalLayout, { LegalSection } from '@/components/sharedUi/LegalLayout';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <LegalLayout
      cat="Legal"
      header="Terms of"
      italicHeader="Service"
      paragraph="The terms that govern your use of this website and inquiries you send to Paruah Systems."
      lastUpdated="28 August 2026"
    >
      <LegalSection title="1. Agreement">
        <p>
          These Terms of Service (“Terms”) govern your access to and use of the Paruah Systems
          website and the inquiries you submit through it. By using the website, you agree to these
          Terms. If you do not agree, please do not use the site.
        </p>
        <p>
          These Terms apply to the public website and to communications you send using the contact
          details or forms published here. They do not, by themselves, constitute a contract for
          software development or other professional services. Any project, product license, or paid
          engagement is governed by a separate written agreement if and when one is entered into.
        </p>
      </LegalSection>

      <LegalSection title="2. About Paruah Systems">
        <p>
          Paruah Systems is a software and digital services company registered in Ghana, the
          Netherlands, and Canada. References to “Paruah Systems”, “we”, “us”, or “our” mean the
          relevant Paruah Systems entity that operates this website or that corresponds with you,
          depending on the context.
        </p>
        <p>
          Nothing on this website is intended to create a partnership, joint venture, employment, or
          agency relationship between you and Paruah Systems.
        </p>
      </LegalSection>

      <LegalSection title="3. Use of the website">
        <p>
          You may use this website for lawful, professional purposes, including learning about our
          work and contacting us about potential projects.
        </p>
        <p>You agree not to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            use the site in a way that is unlawful, misleading, or infringes another person’s
            rights;
          </li>
          <li>attempt to gain unauthorized access to the site, related systems, or data;</li>
          <li>interfere with or disrupt the site’s operation, security, or other users;</li>
          <li>
            probe, scan, or test the vulnerability of the site except with our prior written
            permission;
          </li>
          <li>submit content that is defamatory, abusive, or contains malware; or</li>
          <li>
            use automated means to scrape or harvest content from the site in a manner that imposes
            an unreasonable load or that we have not authorized.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Inquiries and services">
        <p>
          Submitting the contact form, sending email, or messaging us on WhatsApp is an inquiry, not
          an order and not an acceptance of work. We may or may not respond, and any timelines
          mentioned on the site (including typical response times) are indicative only.
        </p>
        <p>
          Descriptions of platforms, capabilities, case studies, and “in development” products are
          for general information. They are not a warranty that a particular feature, product, or
          outcome is available, or that it will be delivered to you.
        </p>
        <p>
          If we agree to provide services, the scope, fees, intellectual-property terms, service
          levels, and other commercial terms will be set out in a separate contract. If there is a
          conflict between these Terms and that contract, the contract controls for the engagement
          it covers.
        </p>
      </LegalSection>

      <LegalSection title="5. Intellectual property">
        <p>
          The website and its original content — including text, graphics, layout, logos, icons, and
          the selection and arrangement of materials — are owned by Paruah Systems or its licensors
          and are protected by applicable intellectual-property laws.
        </p>
        <p>
          You may view and use the site for personal or internal business information. You may not
          copy, modify, distribute, sell, or create derivative works from the site’s content,
          branding, or design without our prior written permission, except for brief quotations with
          attribution or as otherwise allowed by mandatory law.
        </p>
        <p>
          Project names, screenshots, and client work shown on the site remain the property of their
          respective owners. Their appearance does not grant you any license to those materials, and
          it does not mean that a named organization endorses Paruah Systems unless that is clearly
          stated.
        </p>
        <p>
          Software, designs, and deliverables we create for clients are governed by the applicable
          client agreement, not by these website Terms.
        </p>
      </LegalSection>

      <LegalSection title="6. Your content and responsibilities">
        <p>
          If you send us information through the contact form or other channels, you are responsible
          for its accuracy and for having the right to share it. You should not submit confidential
          information, personal data about other people, or regulated data (such as health records
          or payment card numbers) unless we have expressly asked for it under an appropriate
          arrangement.
        </p>
        <p>
          You grant us a limited right to use the information you submit so that we can review the
          inquiry, respond, and keep a record of the correspondence. That right is not a transfer of
          ownership of your underlying business ideas or materials, except as later agreed in a
          services contract.
        </p>
      </LegalSection>

      <LegalSection title="7. Third-party services and links">
        <p>
          The website may link to third-party sites or use third-party services (for example email
          delivery, image hosting, fonts, or messaging). Those services are not under our control,
          and we are not responsible for their content, availability, or practices. Your use of them
          is subject to their own terms and privacy policies.
        </p>
      </LegalSection>

      <LegalSection title="8. No professional advice">
        <p>
          Content on this website is provided for general information. It is not legal, financial,
          medical, or other professional advice, and it should not be relied on as the sole basis
          for making decisions.
        </p>
      </LegalSection>

      <LegalSection title="9. Disclaimer of warranties">
        <p>
          The website is provided on an “as is” and “as available” basis. To the fullest extent
          permitted by law, we disclaim all warranties, whether express, implied, or statutory,
          including implied warranties of merchantability, fitness for a particular purpose, title,
          and non-infringement.
        </p>
        <p>
          We do not warrant that the site will be uninterrupted, error-free, secure, or free of
          harmful components, or that the content is complete, accurate, or up to date.
        </p>
      </LegalSection>

      <LegalSection title="10. Limitation of liability">
        <p>
          To the fullest extent permitted by applicable law, Paruah Systems and its officers,
          employees, and agents will not be liable for any indirect, incidental, special,
          consequential, or punitive damages, or for any loss of profits, revenue, data, goodwill,
          or business opportunity, arising out of or in connection with your use of the website or
          these Terms, whether based on contract, tort (including negligence), strict liability, or
          any other theory, even if we have been advised of the possibility of such damages.
        </p>
        <p>
          To the extent liability cannot be excluded, our aggregate liability arising out of or
          relating to your use of this website is limited to the greater of (a) the amount you paid
          us, if any, specifically for access to this website in the twelve months before the claim,
          or (b) a nominal amount required as a minimum by mandatory law.
        </p>
        <p>
          Nothing in these Terms excludes or limits liability that cannot be excluded or limited
          under applicable law, including liability for fraud or for death or personal injury caused
          by negligence where such a limitation is prohibited.
        </p>
      </LegalSection>

      <LegalSection title="11. Indemnity">
        <p>
          You agree to indemnify and hold harmless Paruah Systems from claims, losses, and
          reasonable expenses (including legal fees) arising out of your misuse of the website, your
          violation of these Terms, or your infringement of another person’s rights, except to the
          extent caused by our own willful misconduct or as otherwise prohibited by law.
        </p>
      </LegalSection>

      <LegalSection title="12. Governing law and disputes">
        <p>
          Paruah Systems is established in Ghana, the Netherlands, and Canada. Because users and
          engagements may connect to more than one of those places, these Terms do not name a single
          exclusive governing law in the abstract.
        </p>
        <p>
          Subject to the next paragraph, these Terms and any dispute arising out of the website will
          be governed by the laws of the jurisdiction in which the Paruah Systems entity that
          operates this website, or that corresponds with you in relation to the dispute, is
          established, excluding conflict-of-law rules that would refer the matter to another law.
        </p>
        <p>
          If you are a consumer, or if mandatory law of your country of residence requires that
          certain rules or courts apply, those mandatory protections remain available to you. You
          may have the right to bring proceedings in your country of residence, and we will not
          interpret these Terms in a way that takes away rights that cannot legally be waived.
        </p>
        <p>
          The parties will first try to resolve a dispute informally by contacting{' '}
          <a
            href="mailto:info@paruah.com"
            className="text-[#0D3D3D] font-semibold underline underline-offset-2"
          >
            info@paruah.com
          </a>
          . If a dispute proceeds, it may be brought in a competent court in a jurisdiction where
          the relevant Paruah Systems entity is established, unless mandatory law requires
          otherwise.
        </p>
      </LegalSection>

      <LegalSection title="13. Changes">
        <p>
          We may update these Terms from time to time by publishing a revised version on this page.
          The “Last updated” date will change when we do. Continued use of the website after an
          update constitutes acceptance of the revised Terms, except where mandatory law requires a
          different method of notice or consent.
        </p>
      </LegalSection>

      <LegalSection title="14. General">
        <p>
          If a provision of these Terms is held to be unenforceable, the remaining provisions
          continue in effect. Our failure to enforce a provision is not a waiver. You may not assign
          these Terms without our consent. We may assign them in connection with a reorganization or
          transfer of the website or related business operations.
        </p>
        <p>
          These Terms, together with the{' '}
          <Link to="/privacy" className="text-[#0D3D3D] font-semibold underline underline-offset-2">
            Privacy Policy
          </Link>
          , are the entire agreement between you and us regarding use of this website, and they
          supersede prior understandings on that subject.
        </p>
      </LegalSection>

      <LegalSection title="15. Contact">
        <p>
          Questions about these Terms can be sent to{' '}
          <a
            href="mailto:info@paruah.com"
            className="text-[#0D3D3D] font-semibold underline underline-offset-2"
          >
            info@paruah.com
          </a>{' '}
          or through the{' '}
          <Link to="/contact" className="text-[#0D3D3D] font-semibold underline underline-offset-2">
            contact page
          </Link>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
};

export default Terms;
