import { motion } from 'framer-motion';

type SharedHeroProps = {
  cat: string;
  header: string;
  italicHeader: string;
  paragraph: string;
};
const SharedHero = ({ cat, header, italicHeader, paragraph }: SharedHeroProps) => {
  return (
    <section className="bg-[#0A2828] min-h-[60vh] flex flex-col justify-end pb-24 pt-48  relative overflow-hidden">
      <div className="">
        <div className="max-w-[1400px] mx-auto  px-6 md:px-12 relative z-10">
          <motion.span
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="inline-block text-[11px] font-bold uppercase tracking-[0.4em] text-[#C5A059] mb-5"
          >
            {cat}
          </motion.span>
          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-6xl md:text-8xl font-bold text-white leading-[0.92] tracking-tight mb-12 max-w-4xl"
          >
            {header} <br />
            <span className="italic font-light text-white/30">{italicHeader}</span>
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="text-xl text-slate-400 max-w-2xl leading-relaxed"
          >
            {paragraph}
          </motion.p>
        </div>
      </div>
      <div className="pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0D3D3D] blur-[140px] rounded-full -translate-x-1/2 translate-y-1/2 opacity-80" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#C5A059]/10 blur-[120px] rounded-full translate-x-1/3" />
      </div>
    </section>
  );
};

export default SharedHero;
