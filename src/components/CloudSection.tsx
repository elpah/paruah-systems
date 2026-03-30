import { CLOUD_PILLARS } from '@/data/cloudPillars.data';
import { motion } from 'framer-motion';

const CloudSection = () => {
  return (
    <section className="w-full bg-[#0D3D3D] py-24 lg:py-32 text-white overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-16 right-0 w-[420px] h-[420px] bg-gradient-to-bl from-[#C5A059]/25 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[520px] h-[520px] bg-gradient-to-tr from-[#0A2828]/80 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
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
          >
            <div className="inline-block mb-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A059]">
                INFRASTRUCTURE
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white mb-8">
              <span className="font-bold bg-gradient-to-r from-[#C5A059] to-[#e8c47a] bg-clip-text text-transparent">
                Cloud Native
              </span>{' '}
              <br />
              <span className="italic">& Future Proof.</span>
            </h3>
            <p className="text-lg text-white/50 leading-relaxed">
              We use modern architectural patterns like microservices, serverless computing, and
              edge delivery to ensure your platform performs at its peak, regardless of the load.
            </p>
          </motion.div>
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
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CLOUD_PILLARS.map((item, i) => (
                <div
                  key={item}
                  className="p-8 border border-white/10 rounded-3xl bg-white/5 font-bold text-center hover:border-[#C5A059]/40 hover:bg-white/8 transition-all duration-300"
                >
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CloudSection;
