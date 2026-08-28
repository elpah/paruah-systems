import { motion, useReducedMotion } from 'framer-motion';

const viewport = { once: true as const, amount: 0.35 };
const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const SectionTitle = ({
  subtitle,
  title,
  description,
  center = false,
  light = false,
}: {
  subtitle?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}) => {
  const reduceMotion = useReducedMotion() === true;

  return (
    <div className={`max-w-3xl mb-16 ${center ? 'mx-auto text-center' : ''}`}>
      {subtitle && (
        <motion.span
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: reduceMotion ? 0 : 0.9, ease }}
          className={`inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 ${light ? 'text-white/60' : 'text-[#C5A059]'}`}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{
          duration: reduceMotion ? 0 : 1.05,
          delay: reduceMotion ? 0 : 0.12,
          ease,
        }}
        className={`text-4xl md:text-5xl font-semibold tracking-tight mb-6 ${light ? 'text-white' : 'text-slate-900'}`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{
            duration: reduceMotion ? 0 : 1,
            delay: reduceMotion ? 0 : 0.22,
            ease,
          }}
          className={`text-lg leading-relaxed ${light ? 'text-white/70' : 'text-slate-600'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
