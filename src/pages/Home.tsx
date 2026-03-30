import SectionTitle from '@/components/SectionTitle';
import CTA from '@/components/sharedUi/CTA';
import { JOURNEY } from '@/data/journey.data';
import { RECENT_WORKS } from '@/data/recentWorks.data';
import { useScroll, useTransform, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Layers,
  Layout,
  ArrowUpRight,
  ExternalLink,
  Cpu,
  Zap,
  Database,
  Globe,
} from 'lucide-react';
import { useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const APPROACH_ITEMS = [
  {
    icon: Cpu,
    title: 'Intelligent Architecture',
  },
  {
    icon: Zap,
    title: 'Faster Development',
  },
  {
    icon: Database,
    title: 'Data Infrastructure',
  },
  {
    icon: Globe,
    title: 'Scalable Systems',
  },
];

const Home = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, shouldReduceMotion ? 0 : 100]);

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, shouldReduceMotion ? 1 : 0]);

  const heroIntroMotion = useMemo(
    () =>
      shouldReduceMotion
        ? {}
        : {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: {
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            },
          },
    [shouldReduceMotion]
  );

  return (
    <main ref={containerRef} className="w-full">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        <motion.div
          style={
            shouldReduceMotion
              ? undefined
              : {
                  y: heroY,
                  opacity: heroOpacity,
                }
          }
          className="relative z-10 text-center px-6"
        >
          <motion.div {...heroIntroMotion}>
            <span className="inline-block text-[11px] min-[500px]:text-xs font-bold uppercase tracking-[0.4em] text-[#C5A059] mb-4">
              Intelligent Software
            </span>

            <h1 className="text-4xl min-[500px]:text-6xl md:text-[100px] lg:text-[120px] font-bold tracking-tight text-[#0D3D3D] leading-[0.9] mb-4 md:mb-12">
              AI-Driven <br />
              <span className="italic font-light text-slate-400">Digital Systems.</span>
            </h1>

            <p className="text-md min-[500px]:text-lg md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
              We design and build intelligent management platforms and custom digital products for
              individuals and organizations
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => navigate('/solutions')}
                className="cursor-pointer group relative px-10 py-5 bg-[#0D3D3D] text-white text-xs md:text-md font-bold uppercase tracking-widest rounded-full overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="relative z-10 flex items-center gap-2">
                  Explore Solutions
                  <ArrowRight
                    aria-hidden="true"
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
                <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <button
                onClick={() => navigate('/contact')}
                className="cursor-pointer text-sm font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-all duration-300"
              >
                Start a Project
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 md:py-32 bg-[#F9FAFB]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionTitle
            subtitle="Expertise"
            title="Modern software systems."
            description="We design and build custom softwares, including websites, web apps, mobile apps, and management systems, to support your business or organization"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4">
            <div className="bg-white p-6 pt-10 pb-10 md:p-16 rounded-[40px] shadow-sm border border-slate-100 flex flex-col justify-between group transition-transform duration-300 hover:-translate-y-2">
              <div>
                <div className="w-16 h-16 bg-[#0D3D3D] rounded-2xl flex items-center justify-center text-white mb-10 transition-transform duration-500 group-hover:scale-110">
                  <Layers size={30} />
                </div>
                <h3 className="text-3xl font-semibold text-slate-900 mb-6">
                  Intelligent Management Systems
                </h3>
                <p className="text-md md:text-lg text-slate-600 leading-relaxed mb-8">
                  Management platforms for schools, hospitals, and salons that simplify operations,
                  records, appointments and day-to-day management.
                </p>
              </div>

              <button
                onClick={() => navigate('/solutions')}
                className="cursor-pointer flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#C5A059] transition-all duration-300 group-hover:gap-5"
              >
                Learn More <ArrowRight aria-hidden="true" size={18} />
              </button>
            </div>

            <div className="bg-[#0D3D3D] p-6 pt-10 pb-10 md:p-16 rounded-[40px] shadow-xl shadow-teal-900/10 flex flex-col justify-between group transition-transform duration-300 hover:-translate-y-2">
              <div>
                <div className="w-16 h-16 bg-[#C5A059] rounded-2xl flex items-center justify-center text-white mb-10 transition-transform duration-500 group-hover:scale-110">
                  <Layout size={30} />
                </div>
                <h3 className="text-3xl font-semibold text-white mb-6">
                  Custom Software Solutions
                </h3>
                <p className="text-lg text-white/70 leading-relaxed mb-8">
                  From simple websites to complex web and mobile applications, UI/UX design, and
                  custom management systems, we design and develop software to fit your business
                  needs.{' '}
                </p>
              </div>

              <button
                onClick={() => navigate('/custom')}
                className="cursor-pointer flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#C5A059] transition-all duration-300 group-hover:gap-5"
              >
                Explore Services <ArrowRight aria-hidden="true" size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionTitle
            subtitle="Portfolio"
            title="Selected Works."
            description="A glimpse into the intelligent systems we've architected for industry leaders."
          />

          <div className="flex justify-end -mt-10 mb-10 md:mt-0">
            <button
              onClick={() => navigate('/projects')}
              className="cursor-pointer flex items-center gap-2 text-sm font-bold uppercase text-slate-400 hover:text-[#0D3D3D] transition-colors group"
            >
              View All Projects
              <ArrowUpRight
                aria-hidden="true"
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-8">
            {RECENT_WORKS.map((work, i) => (
              <motion.div
                key={work.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: shouldReduceMotion ? 0 : i * 0.1, duration: 0.8 }}
                className="group"
              >
                <div className="relative aspect-[4/5.5] overflow-hidden rounded-[40px] bg-slate-100 mb-8 shadow-md">
                  <img
                    src={work.image}
                    alt={work.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D3D3D]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <button
                      aria-label="Open project in new tab"
                      className="cursor-pointer w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0D3D3D] shadow-xl"
                    >
                      <ExternalLink aria-hidden="true" size={20} />
                    </button>
                  </div>
                </div>

                <div className="px-4">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-3 block">
                    {work.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{work.title}</h3>
                  <p className="text-slate-500 leading-relaxed line-clamp-2">{work.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#C5A059] mb-8 block">
                Our Approach
              </span>

              <h2 className="text-4xl md:text-5xl font-semibold text-[#0D3D3D] leading-tight mb-5">
                AI Driven <br />
                <span className="text-slate-300">Software Engineering.</span>
              </h2>

              <p className="text-md md:text-lg text-slate-600 leading-relaxed mb-5 md:mb-10">
                AI isn't just a feature we add; it's the foundation of how we build software. We
                combine intelligent tools with modern engineering practices to create systems that
                are faster to develop, easier to maintain, and designed to scale.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-8">
                {APPROACH_ITEMS.map(item => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#0D3D3D]">
                        <Icon />
                      </div>
                      <span className="font-bold text-slate-800">{item.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-square  flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0  opacity-20 pointer-events-none">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#C5A059_0%,_transparent_50%)]" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
                      alt="AI Image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#0D3D3D] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionTitle
            subtitle="The Journey"
            title="A standard for precision."
            description="A step-by-step process from planning to deployment."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {JOURNEY.map((step, i) => (
              <motion.div
                key={step.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: shouldReduceMotion ? 0 : i * 0.1 }}
                className="group cursor-default"
              >
                <div className="text-[11px] font-bold tracking-[0.2em] text-[#C5A059] mb-4">
                  {step.id}
                </div>
                <div className="h-[1px] w-full bg-white/10 mb-6 group-hover:bg-[#C5A059] transition-all duration-500" />
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-white/40">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
};

export default Home;
