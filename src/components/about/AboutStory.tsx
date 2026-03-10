const AboutStory = () => {
  return (
    <section className="py-40 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#C5A059] mb-5 block">
              The Story
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-[#0D3D3D] leading-tight tracking-tight mb-0">
              Began with a simple <br />
              <span className="italic font-light text-slate-300">observation.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-10 pt-2">
            <p className="text-2xl text-slate-700 leading-relaxed font-medium">
              Why are so many organizations in Africa still managing essential operations manually?
            </p>
            <p className="text-xl text-slate-500 leading-relaxed">
              In many hospitals, patients wait hours in long queues because there is no proper
              appointment system. Records are kept in notebooks or scattered spreadsheets, making
              information difficult to track. Schools still manage student records manually, and
              salons lose revenue because bookings and inventory are disorganized.
            </p>
            <p className="text-xl text-slate-500 leading-relaxed">
              Paruah Systems was born from that frustration, shaped by firsthand experience with the
              medical system in Ghana.
            </p>
            <p className="text-xl text-slate-500 leading-relaxed">
              We believe that every organization, regardless of industry, deserves a single reliable
              digital system where their operations could be managed clearly and efficiently,
              instead of scattered across notebooks, spreadsheets, and manual processes.
            </p>
            <p className="text-xl text-slate-500 leading-relaxed">
              So... we are building it. Not by relying on off-the-shelf tools, but by engineering
              purpose-built systems from ground up, with AI at the core, performance as the
              baseline, and beauty as the standard.
            </p>
            <div className="pt-8 border-t border-slate-100">
              <blockquote className="text-2xl font-semibold text-[#0D3D3D] leading-snug italic">
                "Software should be both reliable and well designed. That should be the standard."
              </blockquote>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                — El Pachris OBENG!, Founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
