import { motion, useReducedMotion } from 'framer-motion';

type SharedHeroProps = {
  cat: string;
  header: string;
  italicHeader: string;
  paragraph?: string;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const SharedHero = ({ cat, header, italicHeader, paragraph }: SharedHeroProps) => {
  const reduceMotion = useReducedMotion() === true;

  return (
    <section className="relative overflow-hidden bg-[#0A2828] min-h-[28rem] md:min-h-[60vh] flex items-end pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-40 md:pb-24">
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.span
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease: EASE }}
          className="inline-block mb-4 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] sm:tracking-[0.4em] text-[#C5A059]"
        >
          {cat}
        </motion.span>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            delay: reduceMotion ? 0 : 0.08,
            ease: EASE,
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
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.16,
              ease: EASE,
            }}
            className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed"
          >
            {paragraph}
          </motion.p>
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[180px] h-[180px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-[#0D3D3D] blur-[50px] sm:blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2 opacity-80" />
        <div className="hidden sm:block absolute top-1/3 right-0 w-[320px] h-[320px] md:w-[400px] md:h-[400px] bg-[#C5A059]/10 blur-[100px] md:blur-[120px] rounded-full translate-x-1/3" />
      </div>
    </section>
  );
};

export default SharedHero;
