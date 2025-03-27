import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-contact">
            <h3>联系我</h3>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:your.email@example.com">your.email@example.com</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+86 123 4567 8910</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>北京市, 中国</span>
              </div>
            </div>
          </div>
          
          <div className="footer-social">
            <h3>社交媒体</h3>
            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://weibo.com/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-weibo"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} 白明的个人博客. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 