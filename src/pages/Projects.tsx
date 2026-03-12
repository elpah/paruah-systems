import SharedHero from '@/components/sharedUi/SharedHero';
import { ALL_PROJECTS } from '@/data/allProjects.data';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { c } from 'node_modules/framer-motion/dist/types.d-6pKw1mTI';
import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'solutions' | 'custom'>('all');
  const filteredProjects = ALL_PROJECTS.filter(p => filter === 'all' || p.type === filter);
  return (
    <div className="w-full">
      <SharedHero
        cat="Portfolio"
        header="Selected"
        italicHeader="Works"
        paragraph="A collection of the platforms, systems, and websites we’ve built for organizations across different industries."
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
        <div className="flex gap-4 mb-20 overflow-x-auto pb-4">
          {(['all', 'solutions', 'custom'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all border whitespace-nowrap ${filter === f ? 'bg-[#0D3D3D] text-white border-[#0D3D3D] shadow-lg shadow-teal-900/10' : 'bg-white text-slate-400 border-slate-100 hover:border-slate-300'}`}
            >
              {f === 'all'
                ? 'All Projects'
                : f === 'solutions'
                  ? 'Core Solutions'
                  : 'Custom Projects'}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {filteredProjects.map(p => (
            <motion.div
              layout
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              key={p.title}
              className="group"
            >
              <div className="bg-slate-50 rounded-[48px] overflow-hidden mb-8 relative aspect-[16/10]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D3D3D]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-10 right-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <a
                    href="#"
                    onClick={e => e.preventDefault()}
                    className="w-16 h-16 bg-white text-[#0D3D3D] rounded-full flex items-center justify-center shadow-2xl"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              <div className="px-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-3 block">
                  {p.category}
                </span>
                <h3 className="text-3xl font-bold text-slate-900 mb-3">{p.title}</h3>
                <p className="text-slate-500 text-lg font-medium">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
