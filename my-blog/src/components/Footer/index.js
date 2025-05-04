import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../locales';
import './style.css';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-contact">
            <h3>{t.footer.contactMe}</h3>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:baiming604108635@gmail.com">baiming604108635@gmail.com</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+61 452 510 625</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Melbourne, Australia</span>
              </div>
            </div>
          </div>
          
          <div className="footer-social">
            <h3>{t.footer.socialMedia}</h3>
            <div className="social-links">
              <a href="https://github.com/BaimingX" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/xu-baiming-b35143260/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 