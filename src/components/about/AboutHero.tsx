import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="bg-[#0A2828] w-full min-h-screen flex flex-col justify-center pt-40 pb-24 relative overflow-hidden">
      <div className=" w-full mx-auto relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
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
            Who We Are
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
            className="text-6xl md:text-8xl lg:text-[108px] font-bold text-white leading-[0.92] tracking-tight mb-12 max-w-5xl"
          >
            Modern Software <br />
            <span className="italic font-light text-white/30">built with </span> <br />
            Purpose.
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
            className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed font-medium"
          >
            Paruah Systems is a software engineering company focused on building reliable management
            platforms, web applications, mobile applications and digital systems that help
            organizations operate more efficiently{' '}
          </motion.p>
        </div>
      </div>

      {/* Ambient glows */}
      <div className="pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0D3D3D] blur-[140px] rounded-full -translate-x-1/2 translate-y-1/2 opacity-80" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#C5A059]/10 blur-[120px] rounded-full translate-x-1/3" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,_rgba(13,61,61,0.4)_0%,_transparent_60%)]" />
      </div>
    </section>
  );
};

export default AboutHero;
