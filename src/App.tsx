import { lazy, Suspense } from 'react';
import { Theme } from './settings/types';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
// const Solutions = lazy(() => import('./pages/Solutions'));
// const CustomDev = lazy(() => import('./pages/CustomDev'));

const theme: Theme = 'light';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

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

            <Route path="*" element={<NotFound />} />
            {/* 
          
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/custom" element={<CustomDev />} />
          */}
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
