import CloudSection from '@/components/CloudSection';
import SharedHero from '@/components/SharedHero';
import { CUSTOM_SERVICES } from '@/data/customServices.data';
import { CheckCircle2 } from 'lucide-react';
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
                className="bg-[#F9FAFB] p-12 rounded-[48px] hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all border border-slate-100 group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-10 group-hover:scale-110 transition-transform"
                  style={{
                    backgroundColor: service.color,
                  }}
                >
                  <Icon size={28} />
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
                  className="cursor-pointer w-full py-4 border border-slate-200 text-[11px] font-bold uppercase tracking-widest text-slate-900 rounded-full hover:bg-slate-900 hover:text-white transition-all"
                >
                  Inquire Project
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <CloudSection />
    </div>
  );
};
export default CustomDev;
