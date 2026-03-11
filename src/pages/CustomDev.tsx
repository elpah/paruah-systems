import CloudSection from '@/components/CloudSection';
import SharedHero from '@/components/SharedHero';
import { CUSTOM_PROJECTS } from '@/data/customProjects';
import { CUSTOM_SERVICES } from '@/data/customServices.data';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CustomDev = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-white">
      <SharedHero cat="Services" header="   Bespoke Digital" italicHeader="Engineering" />

      <div className="max-w-[1400px] pt-40 mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {CUSTOM_SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-[#F9FAFB] p-6  md:pt-12 md:pb-12  rounded-[20px] hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all border border-slate-100 group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-10 group-hover:scale-110 transition-transform"
                  style={{
                    backgroundColor: service.color,
                  }}
                >
                  <Icon size={20} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8">{service.title}</h3>
                <ul className="space-y-5 mb-12">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm font-semibold text-slate-500"
                    >
                      <CheckCircle2 size={16} className="text-[#C5A059]" /> {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate('/contact')}
                  className="cursor-pointer w-full py-4 border border-slate-200 text-[11px] font-bold uppercase tracking-widest text-slate-900 rounded-xl hover:bg-slate-900 hover:text-white transition-all"
                >
                  Inquire Project
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <section className="py-32 bg-[#F9FAFB]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-">
          <div className=" mb-5">
            <div>
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
                className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 text-[#C5A059]"
              >
                Case Studies
              </motion.span>
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
                className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
              >
                Custom Engineering Cases.
              </motion.h2>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <button
              onClick={() => navigate('/projects')}
              className="cursor-pointer text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-[#0D3D3D] transition-colors flex items-center gap-2 group  mb-10"
            >
              Explore All{' '}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-15 md:gap-8">
            {CUSTOM_PROJECTS.map((work, i) => (
              <motion.div
                key={work.title}
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
                }}
                className="group cursor-pointer"
                onClick={() => navigate('/projects')}
              >
                <div className="aspect-[16/10] overflow-hidden rounded-[32px] bg-slate-100 mb-6 relative">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D3D3D]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-12 h-12 bg-white text-[#0D3D3D] rounded-full flex items-center justify-center shadow-2xl">
                      <ExternalLink size={18} />
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] mb-2 block">
                  {work.category}
                </span>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{work.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                  {work.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CloudSection />
    </div>
  );
};
export default CustomDev;
