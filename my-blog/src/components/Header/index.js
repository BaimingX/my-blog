import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { translations } from '../../locales';
import { FaSun, FaMoon } from 'react-icons/fa';
import './style.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/">{language === 'en' ? "Baiming's Blog" : "Baiming的个人博客"}</Link>
        </div>
        
        <nav className="main-nav">
          <ul>
            <li><Link to="/">{t.header.home}</Link></li>
            <li><Link to="/me-and-ai">{t.header.meAndAi}</Link></li>
          </ul>
        </nav>
        
        <div className="header-controls">
          <div className="theme-switch" onClick={toggleTheme}>
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </div>
          <div className="language-switch" onClick={toggleLanguage}>
            {language === 'en' ? 'EN | 中' : '中 | EN'}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 