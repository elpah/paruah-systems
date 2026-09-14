import { NAV_LINKS } from '@/data/navlinks.data';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const CURTAIN = {
  type: 'tween' as const,
  duration: 0.28,
  ease: [0.32, 0.72, 0, 1] as [number, number, number, number],
};

const pathOf = (id: string) => `/${id}`;

const lockScroll = () => {
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
};

const unlockScroll = () => {
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [curtainUp, setCurtainUp] = useState(false);
  const location = useLocation();
  const reduceMotion = useReducedMotion() === true;
  const duration = reduceMotion ? 0 : CURTAIN.duration;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20 || document.body.scrollTop > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.body.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setScrolled(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    return () => unlockScroll();
  }, []);

  const openMenu = () => {
    setCurtainUp(true);
    setMobileMenuOpen(true);
    lockScroll();
  };

  const closeMenu = () => setMobileMenuOpen(false);

  const handleExitComplete = () => {
    setCurtainUp(false);
    unlockScroll();
  };

  const handleMobileNavClick = (to: string) => {
    if (location.pathname === to) closeMenu();
  };

  const iconOnDarkHero = location.pathname !== '/' && !scrolled && !curtainUp;
  const navSolid = scrolled && !curtainUp;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] ${
          navSolid ? 'bg-white border-b border-slate-100' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 h-[72px] md:h-[88px] flex justify-between items-center">
          <NavLink onClick={() => handleMobileNavClick('/')} to="/" className="">
            <img src="/logo.png" alt="Logo" className="h-15  w-auto" />
          </NavLink>

          <ul className="hidden md:flex items-center gap-4 lg:gap-10">
            {NAV_LINKS.map(link => (
              <li key={link.id} className="relative">
                <NavLink
                  to={pathOf(link.id)}
                  className={({ isActive }) =>
                    `text-[11px] lg:text-xs  font-semibold lg:font-bold uppercase tracking-widest transition-all duration-300 relative py-2 ${
                      isActive ? 'text-[#C5A059]' : 'text-slate-500 hover:text-slate-900'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A059]" />
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
            onClick={() => (mobileMenuOpen ? closeMenu() : openMenu())}
            aria-label={curtainUp ? 'Close menu' : 'Open menu'}
            aria-expanded={curtainUp}
          >
            {curtainUp ? (
              <X
                aria-hidden="true"
                size={24}
                className={iconOnDarkHero ? 'text-slate-300' : 'text-slate-900'}
              />
            ) : (
              <Menu
                aria-hidden="true"
                size={24}
                className={iconOnDarkHero ? 'text-slate-300' : 'text-slate-900'}
              />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence onExitComplete={handleExitComplete}>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-curtain"
            initial={reduceMotion ? false : { x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ ...CURTAIN, duration }}
            className="fixed inset-0 w-full bg-white z-[99] md:hidden overflow-hidden pt-[72px]"
            style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
          >
            <ul className="flex flex-col p-8 gap-8 items-center justify-center h-full">
              {NAV_LINKS.map(link => (
                <li key={link.id}>
                  <NavLink
                    to={pathOf(link.id)}
                    onClick={() => handleMobileNavClick(pathOf(link.id))}
                    className={({ isActive }) =>
                      `text-2xl font-bold ${isActive ? 'text-[#C5A059]' : 'text-slate-900'}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}

              <li className="w-full max-w-xs">
                <NavLink
                  to="/contact"
                  onClick={() => handleMobileNavClick('/contact')}
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
