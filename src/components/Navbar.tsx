import { NAV_LINKS } from '@/data/navlinks.data';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const drawer = {
  hidden: { x: '-100%' },
  show: { x: 0 },
  exit: { x: '-100%' },
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${
          scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-100' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-[72px] md:h-[88px] flex justify-between items-center">
          <NavLink
            to="/"
            className="flex items-center gap-3 group transition-opacity hover:opacity-90"
          >
            <div className="relative w-10 h-10 flex items-center justify-center bg-[#0D3D3D] rounded-xl">
              <span className="text-white font-bold text-lg">P</span>
            </div>

            <div className="flex flex-col -space-y-1">
              <span className="text-lg font-bold tracking-tight text-[#0D3D3D]">PARUAH</span>
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#C5A059] uppercase">
                SYSTEMS
              </span>
            </div>
          </NavLink>

          <ul className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(link => (
              <li key={link.id} className="relative">
                <NavLink
                  to={link.id}
                  className={({ isActive }) =>
                    `text-xs font-bold uppercase tracking-widest transition-all duration-300 relative py-2 ${
                      isActive ? 'text-[#C5A059]' : 'text-slate-500 hover:text-slate-900'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="navUnderline"
                          className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A059]"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}

            <li>
              <NavLink
                to="/contact"
                className="px-6 py-2.5 bg-[#0D3D3D] text-white text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-slate-900 transition-all active:scale-95 shadow-lg shadow-teal-900/10"
              >
                Start Project
              </NavLink>
            </li>
          </ul>

          <button
            type="button"
            className="md:hidden text-slate-900 p-2 relative z-[120]"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-drawer"
            variants={drawer}
            initial="hidden"
            animate="show"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed top-[72px] left-0 right-0 bottom-0 bg-white z-[99] md:hidden"
          >
            <ul className="flex flex-col p-8 gap-8 items-center justify-center h-full">
              {NAV_LINKS.map(link => (
                <li key={link.id}>
                  <NavLink
                    to={link.id}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-2xl font-bold transition-colors duration-300 ${
                        isActive ? 'text-[#C5A059]' : 'text-slate-900'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}

              <li className="w-full max-w-xs">
                <NavLink
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block mt-4 px-10 py-4 bg-[#0D3D3D] text-white font-bold rounded-full w-full text-center"
                >
                  Start a Project
                </NavLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
