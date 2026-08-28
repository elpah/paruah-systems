import SharedHero from '@/components/sharedUi/SharedHero';
import { ReactNode } from 'react';

type LegalLayoutProps = {
  cat: string;
  header: string;
  italicHeader: string;
  paragraph: string;
  lastUpdated: string;
  children: ReactNode;
};

export const LegalSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="space-y-4">
    <h2 className="text-2xl md:text-[1.65rem] font-bold text-[#0D3D3D] tracking-tight">{title}</h2>
    <div className="space-y-4 text-[15px] md:text-base text-slate-600 leading-relaxed">
      {children}
    </div>
  </section>
);

const LegalLayout = ({
  cat,
  header,
  italicHeader,
  paragraph,
  lastUpdated,
  children,
}: LegalLayoutProps) => {
  return (
    <main className="bg-white pb-24">
      <SharedHero cat={cat} header={header} italicHeader={italicHeader} paragraph={paragraph} />

      <article className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-24">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-12">
          Last updated {lastUpdated}
        </p>
        <div className="max-w-3xl space-y-12">{children}</div>
      </article>
    </main>
  );
};

export default LegalLayout;
