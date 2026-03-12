import { motion } from 'framer-motion';
import { Mail, Phone, CheckCircle2, LucideIcon } from 'lucide-react';
import { useState } from 'react';
import SharedHero from '@/components/sharedUi/SharedHero';

type ContactInfoCardProps = {
  href: string;
  label: string;
  value: string;
  icon: LucideIcon;
};

const ContactInfoCard = ({ href, label, value, icon: Icon }: ContactInfoCardProps) => (
  <a
    href={href}
    className="cursor-pointer max-w-md flex items-start gap-6 p-6 rounded-2xl bg-[#F7F9F9] hover:bg-[#EEF3F3] transition-all duration-300 group"
  >
    <div className="w-12 h-12 rounded-md bg-white flex items-center justify-center text-[#C5A059] shrink-0 group-hover:scale-105 transition-transform">
      <Icon size={24} />
    </div>

    <div>
      <h4 className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 mb-1">
        {label}
      </h4>
      <p className="text-lg font-semibold text-slate-700 group-hover:text-[#0D3D3D] transition-colors">
        {value}
      </p>
    </div>
  </a>
);

type FormFieldProps = {
  label: string;
  children: React.ReactNode;
};

const FormField = ({ label, children }: FormFieldProps) => (
  <div className="space-y-2">
    <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">
      {label}
    </label>
    {children}
  </div>
);

const inputClassName =
  'w-full bg-white mt-1 px-3 lg:px-6 py-3 lg:py-4 rounded-lg border border-slate-200 focus:border-[#0D3D3D] focus:ring-1 focus:ring-[#0D3D3D] outline-none transition-all font-medium';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pb-24 bg-white">
      <SharedHero
        cat="CONNECT"
        header="Let's Engineer"
        italicHeader="what's next"
        paragraph="Tell us about your idea or project, and we’ll help you turn it into a reliable digital system."
      />

      <div className="max-w-[1400px] mx-auto pt-24 px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 md:gap-4">
          <div className="lg:col-span-5 mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-3 text-md text-slate-600 max-w-lg leading-relaxed"
            >
              Our team responds to every inquiry within 24 hours. No bots, no auto-replies.
            </motion.p>

            <div className="space-y-6">
              <ContactInfoCard
                href="mailto:info@paruah.com"
                label="Direct Email"
                value="info@paruah.com"
                icon={Mail}
              />

              <ContactInfoCard
                href="tel:+15550000000"
                label="Office Line"
                value="+1 (555) 000-0000"
                icon={Phone}
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#F9FAFB] px-4 py-12 md:p-16 rounded-[20px] border border-slate-100 shadow-xl shadow-slate-100/50 relative overflow-hidden">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Inquiry Received</h3>
                  <p className="text-slate-600">
                    One of our engineers will be in touch within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 relative z-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField label="Identity">
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        className={inputClassName}
                      />
                    </FormField>

                    <FormField label="Direct Mail">
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        className={inputClassName}
                      />
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField label="Entity">
                      <input type="text" placeholder="Company Name" className={inputClassName} />
                    </FormField>

                    <FormField label="Type">
                      <select
                        className={`${inputClassName} appearance-none`}
                        defaultValue="Management System"
                      >
                        <option>Management System</option>
                        <option>SaaS Platform</option>
                        <option>Mobile Engineering</option>
                        <option>Other Transformation</option>
                      </select>
                    </FormField>
                  </div>

                  <FormField label="Detail">
                    <textarea
                      rows={6}
                      required
                      placeholder="Briefly describe your objectives"
                      className={`${inputClassName} resize-none`}
                    />
                  </FormField>

                  <button
                    type="submit"
                    className="cursor-pointer w-full py-5 bg-[#0D3D3D] text-white text-xs font-bold uppercase tracking-[0.3em] rounded-2xl hover:bg-slate-900 transition-all shadow-xl shadow-teal-900/10 active:scale-95"
                  >
                    Send Message
                  </button>
                </form>
              )}

              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/5 blur-[60px] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
