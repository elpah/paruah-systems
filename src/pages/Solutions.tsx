
// export default Solutions;
import CTA from '@/components/sharedUi/CTA';
import SharedHero from '@/components/sharedUi/SharedHero';
import SolutionsBlock from '@/components/SolutionsBlock';
import { SOLUTION_PROJECTS } from '@/data/solutionsProjects.data';

const Solutions = () => {
  return (
    <div className="pb-10 bg-white">
      <SharedHero
        cat="Platforms"
        header="Intelligent."
        italicHeader="Industry Solutions."
        paragraph="Purpose-built management ecosystems designed to solve the specific complexities of modern institutions"
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-30">
        {SOLUTION_PROJECTS.map((project) => (
          <SolutionsBlock key={project.id} project={project} />
        ))}
      </div>

      <CTA />
    </div>
  );
};

export default Solutions;