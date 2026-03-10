import { ABOUT_VALUES } from '@/data/aboutvalues.data';
import { motion } from 'framer-motion';

const AboutValues = () => {
  return (
    <section className="py-32 bg-[#0A2828] relative overflow-hidden">
      <div className="pointer-events-none"></div>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20">
          <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#C5A059] mb-6 block">
            Principles
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            The code we live by.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {ABOUT_VALUES.map((value, i) => (
            <motion.div
              key={value.id}
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: i * 0.07,
                duration: 0.6,
              }}
              className="bg-[#0A2828] p-12 hover:bg-[#0D3D3D]/60 transition-colors duration-500 group"
            >
              <span className="text-[11px] font-bold tracking-[0.3em] text-[#C5A059] mb-6 block">
                {value.id}
              </span>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#C5A059] transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-base text-white/40 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
