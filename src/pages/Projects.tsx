import SharedHero from '@/components/sharedUi/SharedHero';
import { ALL_PROJECTS } from '@/data/allProjects.data';
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'solutions' | 'custom'>('all');
  const filteredProjects = ALL_PROJECTS.filter(p => filter === 'all' || p.type === filter);
  return (
    <main className="w-full">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-20">
          {filteredProjects.map(p => (
            <div key={p.title} className="group">
              <div className="bg-slate-50 rounded-2xl overflow-hidden mb-5 relative aspect-[16/10] shadow-sm transition-shadow duration-500 group-hover:shadow-md">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D3D3D]/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {p.link && (
                  <div className="absolute bottom-6 right-6 translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-11 h-11 bg-white text-[#0D3D3D] rounded-full flex items-center justify-center shadow-md"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                )}
              </div>
              <div className="px-0.5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C5A059] mb-2">
                  {p.category}
                </p>
                <h3 className="text-xl md:text-2xl font-semibold text-[#0D3D3D] tracking-tight mb-1.5">
                  {p.title}
                </h3>
                <p className="text-sm md:text-[15px] text-slate-500 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
