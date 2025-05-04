import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../locales';
import './style.css';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">{t.about.title}</h2>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              {/* 这里可以放置你的照片 */}
              
            </div>
          </div>
          
          <div className="about-text">
            <p>
              {t.about.intro1}
            </p>
            <p>
              {t.about.intro2}
            </p>
            
            <div className="experience">
              <h3>{t.about.workExperience}</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-date">{t.about.experience1.period}</div>
                  <div className="timeline-content">
                    <h4>{t.about.experience1.title}</h4>
                    <p>{t.about.experience1.company}</p>
                    <p className="location">{t.about.experience1.location}</p>
                    <ul>
                      <li>{t.about.experience1.responsibilities[0]}</li>
                      <li>{t.about.experience1.responsibilities[1]}</li>
                      <li>{t.about.experience1.responsibilities[2]}</li>
                    </ul>
                    <p className="skills">{t.about.experience1.skills}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="education">
              <h3>{t.about.education}</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-date">{t.about.education1.period}</div>
                  <div className="timeline-content">
                    <h4>{t.about.education1.degree}</h4>
                    <p className="skills">{t.about.education1.skills}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 