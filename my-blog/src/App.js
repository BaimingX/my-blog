import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SideNav from './components/SideNav/SideNav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Footer from './components/Footer';
import Particles from './components/Particles';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './context/LanguageContext';
import { useTheme } from './context/ThemeContext';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const { language } = useLanguage();
  const { theme } = useTheme();

  // 页面加载特效
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
        <h2 className="loader-text">
          {language === 'en' ? "Bai Ming's Personal Blog" : "白明的个人博客"}
        </h2>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div 
        className={`App ${theme}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Particles />
        <div className="noise-overlay"></div>
        <Header scrollY={scrollY} />
        <SideNav />
        
        <main className="main-content">
          <Routes>
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/" element={
              <>
                <Home />
                <About />
                <Projects />
              </>
            } />
          </Routes>
        </main>
        
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
