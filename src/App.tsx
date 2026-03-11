import { lazy, Suspense, useEffect } from 'react';
import { Theme } from './settings/types';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Solutions = lazy(() => import('./pages/Solutions'));
const CustomDev = lazy(() => import('./pages/CustomDev'));
const Projects = lazy(() => import('./pages/Projects'));

const theme: Theme = 'light';

function App() {
  const { pathname } = useLocation();

  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);
  setTheme(theme);
  setTheme(theme);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="grow">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/custom" element={<CustomDev />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
