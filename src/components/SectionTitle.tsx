import { motion } from 'framer-motion';

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
}) => (
  <div className={`max-w-3xl mb-16 ${center ? 'mx-auto text-center' : ''}`}>
    {subtitle && (
      <motion.span
        initial={{
          opacity: 0,
          y: 10,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className={`inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 ${light ? 'text-white/60' : 'text-[#C5A059]'}`}
      >
        {subtitle}
      </motion.span>
    )}
    <motion.h2
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: 0.1,
      }}
      className={`text-4xl md:text-5xl font-semibold tracking-tight mb-6 ${light ? 'text-white' : 'text-slate-900'}`}
    >
      {title}
    </motion.h2>
    {description && (
      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.2,
        }}
        className={`text-lg leading-relaxed ${light ? 'text-white/70' : 'text-slate-600'}`}
      >
        {description}
      </motion.p>
    )}
  </div>
);

export default SectionTitle;
