import { ArrowLeft, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 relative overflow-hidden sm:pt-32">
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="flex justify-center mb-12" aria-hidden="true">
          <div className="relative w-28 h-28 flex items-center justify-center">
            <div className="absolute inset-0 border border-dashed border-[#0D3D3D]/20 rounded-full" />
            <div className="absolute inset-3 border border-dashed border-[#C5A059]/30 rounded-full" />
            <div className="w-16 h-16 bg-[#0D3D3D] rounded-2xl flex items-center justify-center shadow-xl shadow-teal-900/15">
              <Compass className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        <div>
          <p className="inline-block text-[11px] font-bold uppercase tracking-[0.4em] text-[#C5A059] mb-6">
            Error 404
          </p>

          <h1 className="text-[100px] md:text-[140px] font-bold tracking-tighter text-[#0D3D3D] leading-none mb-4 select-none">
            <span>4</span>
            <span className="italic font-light text-slate-300">0</span>
            <span>4</span>
          </h1>

          <p className="text-2xl md:text-3xl font-semibold text-slate-800 tracking-tight mb-6">
            Page not found.
          </p>

          <p className="text-lg text-slate-600 leading-relaxed max-w-md mx-auto mb-14">
            The page you’re looking for doesn’t exist, has been moved, or the URL may be incorrect.
          </p>
        </div>

        <nav
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
          aria-label="404 page actions"
        >
          <Link
            to="/"
            className="group relative px-10 py-5 bg-[#0D3D3D] text-white text-[11px] font-bold uppercase tracking-[0.3em] rounded-full overflow-hidden transition-colors hover:bg-slate-900 shadow-xl shadow-teal-900/15 flex items-center gap-3"
          >
            <ArrowLeft className="relative z-10 w-4 h-4" />
            <span className="relative z-10">Back to Home</span>
          </Link>

          <Link
            to="/solutions"
            className="text-[11px] font-bold uppercase tracking-widest text-slate-600 hover:text-[#0D3D3D] transition-colors border-b border-transparent hover:border-[#0D3D3D] pb-0.5"
          >
            Explore Solutions
          </Link>
        </nav>

        <p className="mt-20 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400 select-none">
          Paruah Systems
        </p>
      </div>
    </main>
  );
};

export default NotFound;
