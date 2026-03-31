import { CheckCircle2, LucideIcon } from 'lucide-react';
import { SolutionProject } from '@/data/solutionsProjects.data';

type CategoryBadgeProps = {
  icon: LucideIcon;
  label: string;
  textColor?: string;
};

const CategoryBadge = ({ icon: Icon, label, textColor = 'text-[#0D3D3D]' }: CategoryBadgeProps) => (
  <div className="inline-block px-4 py-1.5 bg-[#F3F6F6] border border-slate-200 rounded-full mb-8">
    <span
      className={`text-[10px] font-bold uppercase tracking-[0.25em] flex items-center gap-2 ${textColor}`}
    >
      <Icon size={14} />
      <span>{label}</span>
    </span>
  </div>
);

const FeatureList = ({ items }: { items: string[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 mb-12">
    {items.map(item => (
      <div key={item} className="flex items-center gap-3">
        <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0" />
        <span className="text-sm font-semibold text-slate-800">{item}</span>
      </div>
    ))}
  </div>
);

const GroupedFeatureList = ({ groups }: { groups: { title: string; items: string[] }[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
    {groups.map(group => (
      <div key={group.title}>
        <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-6">
          {group.title}
        </h4>

        <ul className="space-y-4">
          {group.items.map(item => (
            <li key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
              <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const ProjectMockup = ({ image, outerClassName }: { image: string; outerClassName: string }) => (
  <div
    className={`aspect-square rounded-[60px] relative overflow-hidden group border border-slate-100 ${outerClassName}`}
  >
    <div className="absolute inset-0 flex items-center justify-center p-12">
      <div className="bg-white shadow-2xl border border-slate-100 flex items-center justify-center overflow-hidden w-full aspect-[16/10] rounded-3xl">
        <img src={image} alt="Product Image" className="w-full h-full object-cover" />
      </div>
    </div>
  </div>
);

const SolutionsBlock = ({ project }: { project: SolutionProject }) => {
  const textContent = (
    <div>
      <CategoryBadge
        icon={project.badgeIcon}
        label={project.badgeLabel}
        textColor={project.badgeTextColor}
      />

      <h2 className="text-4xl md:text-5xl font-bold text-[#0D3D3D] mb-8 leading-tight">
        {project.title.main} <br />
        <span className="italic font-light text-slate-300">{project.title.accent}</span>
      </h2>

      <p className="text-xl text-slate-600 leading-relaxed mb-12">{project.description}</p>

      {project.features && <FeatureList items={project.features} />}
      {project.groupedFeatures && <GroupedFeatureList groups={project.groupedFeatures} />}

      {/* <button className="px-10 py-4 bg-[#0D3D3D] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-xl shadow-teal-900/10 hover:scale-105 transition-all">
        Request Platform Demo
      </button> */}
    </div>
  );

  const visualContent = (
    <ProjectMockup image={project.image} outerClassName={project.mockupOuterClassName} />
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40 last:mb-0">
      {project.reverse ? (
        <>
          <div className="order-2 lg:order-1">{textContent}</div>
          <div className="order-1 lg:order-2">{visualContent}</div>
        </>
      ) : (
        <>
          <div>{visualContent}</div>
          <div>{textContent}</div>
        </>
      )}
    </div>
  );
};

export default SolutionsBlock;
