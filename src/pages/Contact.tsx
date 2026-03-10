import { motion } from 'framer-motion';
import { Mail, Phone, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="pt-40 pb-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 ">
          <div className="lg:col-span-5 mb-20">
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#C5A059] mb-4 block">
              Connect
            </span>
            <h1 className="text-6xl font-bold text-[#0D3D3D] tracking-tight leading-[1.1] mb-4 md:mb-12">
              Let's build <br />{' '}
              <span className="text-slate-300 italic font-light">what's next.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-16 max-w-md">
              Tell us about your idea or project, and we’ll help you turn it into a reliable digital
              system.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#C5A059] shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 mb-1">
                    Direct Email
                  </h4>
                  <p className="text-lg font-semibold text-slate-600">info@paruah.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#C5A059] shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 mb-1">
                    Office Line
                  </h4>
                  <p className="text-lg font-semibold text-slate-600">+1 (555) 000-0000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#F9FAFB] px-4 py-12 md:p-16 rounded-[20px] border border-slate-100 shadow-xl shadow-slate-100/50 relative overflow-hidden">
              {submitted ? (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
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
                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">
                        Identity
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        className="w-full bg-white  py-3  mt-1 px-3 lg:px-6 lg:py-4 rounded-lg border border-slate-200 focus:border-[#0D3D3D] focus:ring-1 focus:ring-[#0D3D3D] outline-none transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">
                        Direct Mail
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        className="w-full bg-white  mt-1 px-3 lg:px-6 py-3  lg:py-4  rounded-lg  border border-slate-200 focus:border-[#0D3D3D] focus:ring-1 focus:ring-[#0D3D3D] outline-none transition-all font-medium"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">
                        Entity
                      </label>
                      <input
                        type="text"
                        placeholder="Company Name"
                        className="w-full bg-white  mt-1 px-3 lg:px-6 py-3  lg:py-4 rounded-lg  border border-slate-200 focus:border-[#0D3D3D] focus:ring-1 focus:ring-[#0D3D3D] outline-none transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">
                        Type
                      </label>
                      <select className="w-full  mt-1 bg-white px-3 lg:px-6 py-3  lg:py-4 rounded-lg  border border-slate-200 focus:border-[#0D3D3D] focus:ring-1 focus:ring-[#0D3D3D] outline-none transition-all font-medium appearance-none">
                        <option>Management System</option>
                        <option>SaaS Platform</option>
                        <option>Mobile Engineering</option>
                        <option>Other Transformation</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">
                      Detail
                    </label>
                    <textarea
                      rows={6}
                      required
                      placeholder="Briefly describe your objectives"
                      className="w-full bg-white  mt-1 px-3 lg:px-6 py-3  lg:py-4 rounded-lg border border-slate-200 focus:border-[#0D3D3D] focus:ring-1 focus:ring-[#0D3D3D] outline-none transition-all font-medium resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-5 bg-[#0D3D3D] text-white text-xs font-bold uppercase tracking-[0.3em] rounded-2xl hover:bg-slate-900 transition-all shadow-xl shadow-teal-900/10 active:scale-95"
                  >
                    Transmit Message
                  </button>
                </form>
              )}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/5 blur-[60px] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
