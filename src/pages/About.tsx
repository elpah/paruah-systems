import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import AboutTeamSection from '@/components/about/AboutTeamSection';
import AboutValues from '@/components/about/AboutValues';
import MissionVision from '@/components/about/MissionVision';

const About = () => {
  return (
    <div className=" bg-white">
      <AboutHero />
      <AboutStory />
      <MissionVision />
      <AboutTeamSection />
      <AboutValues />
    </div>
  );
};

export default About;
