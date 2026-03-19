import { NAV_LINKS } from '@/data/navlinks.data';
import { Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { SiX, SiWhatsapp } from 'react-icons/si';
import { Link } from 'react-router-dom';

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/paruah', Icon: Linkedin },
  { label: 'X', href: 'https://x.com/paruah', Icon: SiX },
  { label: 'Instagram', href: 'https://instagram.com/paruah_systems', Icon: Instagram },
  { label: 'Facebook', href: 'https://facebook.com', Icon: Facebook },
];

const SOLUTIONS_LINKS = [
  { label: 'Patient Management', to: '/solutions' },
  { label: 'School Management', to: '/solutions' },
  { label: 'Salon Management', to: '/solutions' },
  { label: 'SaaS Development', to: '/custom' },
  { label: 'E-Commerce', to: '/custom' },
];

const Footer = () => {
  return (
    <footer
      className="bg-[#051515] text-white pt-24 pb-12 overflow-hidden relative"
      aria-label="Site footer"
    >
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-[#0D3D3D]/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-8 mb-20">
          <section className="lg:col-span-5" aria-label="Company information">
            <Link
              to="/"
              className="inline-flex items-center gap-3 mb-6 hover:opacity-90 transition-opacity"
            >
              <img src="/logo.png" alt="Logo" className="h-15  w-auto" />
            </Link>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm md:max-w-xl lg:max-w-sm mb-6">
              Building intelligent systems, applications, and websites for organizations that demand
              speed and excellence.
            </p>

            <nav aria-label="Social links">
              <ul className="flex gap-3">
                {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      title={label}
                      className="w-10 h-10 rounded-full border border-white/10 inline-flex items-center justify-center text-white/40 hover:text-white hover:border-[#C5A059] transition-all"
                    >
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8 lg:mt-1">
            <nav aria-label="Company">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-6">
                Company
              </h2>

              <ul className="space-y-3">
                {NAV_LINKS.map(link => (
                  <li key={link.id}>
                    <Link
                      to={link.id}
                      className="text-sm  text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Solutions">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-6">
                Solutions
              </h2>

              <ul className="space-y-3 text-sm  text-slate-400">
                {SOLUTIONS_LINKS.map(item => (
                  <li key={item.label}>
                    <Link to={item.to} className="hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <section aria-label="Contact">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-6">
                Contact
              </h2>

              <address className="not-italic">
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#C5A059]" />
                    <div>
                      <p className="text-[10px] font-bold uppercase text-white/30 mb-1">
                        Inquiries
                      </p>
                      <a
                        href="mailto:info@paruah.com"
                        className="text-sm  text-slate-300 hover:text-[#C5A059] transition-colors"
                      >
                        info@paruah.com
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <SiWhatsapp className="w-5 h-5 text-[#C5A059]" />
                    <div>
                      <p className="text-[10px] font-bold uppercase text-white/30 mb-1">Support</p>
                      <a
                        href="https://wa.me/31627499165"
                        className="text-sm   text-slate-300 hover:text-[#C5A059] transition-colors"
                      >
                        +31 62 749 9165
                      </a>
                    </div>
                  </li>
                </ul>
              </address>
            </section>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <small className="text-[11px]  tracking-[0.1em] text-white/30 uppercase">
            © 2026 Paruah Systems. All Rights Reserved.
          </small>

          <nav aria-label="Legal">
            <ul className="flex gap-8">
              <li>
                <Link
                  to="/privacy"
                  className="text-[11px]  tracking-[0.1em] text-white/30 uppercase hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-[11px] tracking-[0.1em] text-white/30 uppercase hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
