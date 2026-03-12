import { motion } from 'framer-motion';

type SharedHeroProps = {
  cat: string;
  header: string;
  italicHeader: string;
  paragraph?: string;
};

const SharedHero = ({ cat, header, italicHeader, paragraph }: SharedHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-[#0A2828] min-h-[60svh] flex items-end pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-40 md:pb-24">
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-block mb-4 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] sm:tracking-[0.4em] text-[#C5A059]"
        >
          {cat}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl mb-8 md:mb-12 text-[clamp(2.5rem,8vw,6rem)] font-bold text-white leading-[0.95] tracking-tight"
        >
          {header}
          <span className="hidden sm:inline">
            <br />
          </span>{' '}
          <span className="block italic font-light text-white/30">{italicHeader}</span>
        </motion.h1>

        {paragraph && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed"
          >
            {paragraph}
          </motion.p>
        )}
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-[#0D3D3D] blur-[80px] sm:blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2 opacity-80" />
        <div className="absolute top-1/3 right-0 w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] bg-[#C5A059]/10 blur-[70px] sm:blur-[100px] md:blur-[120px] rounded-full translate-x-1/3" />
      </div>
    </section>
  );
};

export default SharedHero;