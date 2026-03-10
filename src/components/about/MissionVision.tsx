import { motion } from 'framer-motion';

const MissionVision = () => {
  return (
    <section className="w-full bg-[#0D3D3D] py-24 lg:py-32 text-white overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-16 right-0 w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] bg-gradient-to-bl from-[#C5A059]/25 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[520px] lg:h-[520px] bg-gradient-to-tr from-[#0A2828]/80 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="space-y-8 relative"
          >
            <div className="relative">
              <div className="inline-block">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A059]">
                  The Outlook
                </span>
              </div>
              <h2 className="mt-5 text-3xl italic sm:text-4xl lg:text-5xl font-light leading-tight text-white">
                <span className="font-bold bg-gradient-to-r from-[#C5A059] to-[#e8c47a] bg-clip-text text-transparent">
                  Engineering reliable{' '}
                </span>
                digital systems
              </h2>
              <p className="mt-4 text-lg text-white/50 leading-relaxed">
                that help organizations operate more efficiently through AI-driven engineering and
                strong technical standards.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="space-y-8 lg:pt-12 relative"
          >
            <div className="relative">
              <div className="inline-block">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
                  The Vision
                </span>
              </div>
              <p className="mt-5 text-xl sm:text-2xl lg:text-3xl text-white/70 leading-relaxed font-light">
                To set the global standard for intelligent digital platforms that power modern
                organizations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
