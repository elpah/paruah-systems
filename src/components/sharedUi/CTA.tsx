import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CTA = ({ animate = false }: { animate?: boolean }) => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = shouldReduceMotion === true;

  const card = (
    <div className="bg-[#F8FAFA] p-10 md:p-24 rounded-3xl border border-slate-100 relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-4xl md:text-7xl font-bold text-[#0D3D3D] tracking-tight mb-12">
          Ready to start <br />
          <span className="italic font-light text-slate-400">a project?</span>
        </h2>

        <button
          onClick={() => navigate('/contact')}
          className="cursor-pointer p-6 md:px-12 md:py-6 bg-[#0D3D3D] text-white text-[11px] min-[450px]:text-sm font-bold uppercase tracking-[0.3em] rounded-full transition-transform duration-300 hover:scale-105 shadow-2xl shadow-teal-900/20"
        >
          Start a Conversation
        </button>
      </div>

      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#C5A059]/10 blur-[50px] rounded-full translate-x-1/2 translate-y-1/2" />
    </div>
  );

  return (
    <section className="py-40 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        {animate && !reduceMotion ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          >
            {card}
          </motion.div>
        ) : (
          card
        )}
      </div>
    </section>
  );
};

export default CTA;
