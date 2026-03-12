import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="bg-[#0A2828] w-full min-h-[100svh] flex items-center pt-32 pb-20 relative overflow-hidden">
      <div className="w-full mx-auto relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-block text-[11px] font-bold uppercase tracking-[0.35em] text-[#C5A059] mb-6"
          >
            Who We Are
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[clamp(2.8rem,7vw,6.5rem)] font-bold text-white leading-[0.92] tracking-tight mb-10 max-w-5xl"
          >
            Modern Software
            <span className="block italic font-light text-white/30">built with</span>
            <span className="block">Purpose.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-xl text-white/50 max-w-2xl leading-relaxed font-medium"
          >
            Paruah Systems is a software engineering company focused on building reliable management
            platforms, web applications, mobile applications and digital systems that help
            organizations operate more efficiently.
          </motion.p>
        </div>
      </div>

      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-[#0D3D3D] blur-[100px] md:blur-[140px] rounded-full -translate-x-1/2 translate-y-1/2 opacity-80" />
        <div className="absolute top-1/3 right-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-[#C5A059]/10 blur-[80px] md:blur-[120px] rounded-full translate-x-1/3" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,_rgba(13,61,61,0.4)_0%,_transparent_60%)]" />
      </div>
    </section>
  );
};

export default AboutHero;
