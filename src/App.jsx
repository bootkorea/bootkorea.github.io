import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Game from './pages/Game';
import './index.css';

// Wrapper to handle AnimatePresence with Router
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <AnimatePresence mode="wait">
            {loading ? (
              <Preloader key="preloader" setLoading={setLoading} />
            ) : (
              <>
                <Navbar />
                <main>
                  <AnimatedRoutes />
                </main>
                <Footer />
              </>
            )}
          </AnimatePresence>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
