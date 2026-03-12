import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-40 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="bg-[#F8FAFA] p-10 md:p-24 rounded-[80px] border border-slate-100 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-bold text-[#0D3D3D] tracking-tight mb-12">
              Ready to start <br />
              <span className="italic font-light text-slate-400">a project?</span>
            </h2>

            <button
              onClick={() => navigate('/contact')}
              aria-label="Contact"
              className="cursor-pointer p-6 md:px-12 md:py-6 bg-[#0D3D3D] text-white text-[11px] min-[450px]:text-sm font-bold uppercase tracking-[0.3em] rounded-full transition-transform duration-300 hover:scale-105 shadow-2xl shadow-teal-900/20"
            >
              Start a Conversation
            </button>
          </div>

          <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#C5A059]/10 blur-[50px] rounded-full translate-x-1/2 translate-y-1/2" />
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
