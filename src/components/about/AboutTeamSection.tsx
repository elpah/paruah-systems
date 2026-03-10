import { ABOUT_TEAM } from '@/data/aboutTeam.data';
import { motion } from 'framer-motion';

const AboutTeamSection = () => {
  return (
    <section className="py-32 bg-[#F9FAFB]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between  gap-4 mb-8">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#C5A059] mb-4 block">
              The People
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-[#0D3D3D] tracking-tight leading-tight">
              Built by engineers <br />
              <span className="italic font-light text-slate-300">who value precision.</span>
            </h2>
          </div>
        </div>
        <div className="flex justify-end mb-20">
          <p className="text-lg  text-slate-500 max-w-sm leading-relaxed">
            Our team combines software engineering, design, and product strategy to create digital
            systems that are reliable, scalable, and built to last.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ABOUT_TEAM.map((member, i) => (
            <motion.div
              key={member.name}
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
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-[40px] bg-slate-200 mb-8 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2828]/60 via-transparent to-transparent" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection;
