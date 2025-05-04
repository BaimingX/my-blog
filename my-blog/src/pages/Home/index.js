import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../locales';
import './style.css';

// 从第三方库导入图标
import { FaNode, FaReact, FaJava, FaDocker, FaMicrosoft } from 'react-icons/fa';
import { 
  SiSpringboot,
  SiNextdotjs, 
  SiVuedotjs, 
  SiTailwindcss, 
  SiTypescript, 
  SiMysql,
  SiRedis,
  SiGithubactions,
  SiPrisma,
  SiNginx,
  SiMicrosoftazure
} from 'react-icons/si';

const Home = () => {
  const skillsRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language];
  
  useEffect(() => {
    // 设置技能项的动画延迟
    if (skillsRef.current) {
      const skillItems = skillsRef.current.querySelectorAll('.skill-item');
      skillItems.forEach((item, index) => {
        item.style.setProperty('--i', index);
      });
    }
    
    // 添加鼠标移动视差效果
    const handleMouseMove = (e) => {
      const shapes = document.querySelectorAll('.shape');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      shapes.forEach(shape => {
        const speed = shape.getAttribute('data-speed');
        const moveX = (x - 0.5) * speed;
        const moveY = (y - 0.5) * speed;
        shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="home-section">
      {/* 背景元素 */}
      <div className="grid-background"></div>
      <div className="shape shape-1" data-speed="30"></div>
      <div className="shape shape-2" data-speed="20"></div>
      
      <div className="container">
        <div className="hero-content">
          <h1>{t.home.greeting}<span className="highlight">{t.home.name}</span></h1>
          <h2>{t.home.title}</h2>
          <p className="intro-text">
            {t.home.intro}
          </p>
          <div className="cta-buttons">
            <button onClick={scrollToProjects} className="btn primary-btn">{t.home.buttons.viewProjects}</button>
            <button onClick={scrollToContact} className="btn secondary-btn">{t.home.buttons.contact}</button>
          </div>
        </div>
        
        <div className="skills-container" ref={skillsRef}>
          <h3>{t.home.skills}</h3>
          <div className="skills-grid">
            <div className="skill-item">
              <FaReact size={40} />
              <span>React</span>
            </div>
            <div className="skill-item">
              <SiNextdotjs size={40} />
              <span>Next.js</span>
            </div>
            <div className="skill-item">
              <SiVuedotjs size={40} />
              <span>Vue</span>
            </div>
            <div className="skill-item">
              <SiTailwindcss size={40} />
              <span>Tailwind CSS</span>
            </div>
            <div className="skill-item">
              <SiTypescript size={40} />
              <span>TypeScript</span>
            </div>
            <div className="skill-item">
              <FaNode size={40} />
              <span>Node.js</span>
            </div>
            <div className="skill-item">
              <FaJava size={40} />
              <span>Java</span>
            </div>
            <div className="skill-item">
              <SiSpringboot size={40} />
              <span>Spring Boot</span>
            </div>
            <div className="skill-item">
              <SiMysql size={40} />
              <span>MySQL</span>
            </div>
            <div className="skill-item">
              <SiRedis size={40} />
              <span>Redis</span>
            </div>
            <div className="skill-item">
              <SiGithubactions size={40} />
              <span>GitHub</span>
            </div>
            <div className="skill-item">
              <SiPrisma size={40} />
              <span>Prisma</span>
            </div>
            <div className="skill-item">
              <SiNginx size={40} />
              <span>Nginx</span>
            </div>
            <div className="skill-item">
              <FaDocker size={40} />
              <span>Docker</span>
            </div>
            <div className="skill-item">
              <SiMicrosoftazure size={40} />
              <span>Azure</span>
            </div>
            <div className="skill-item">
              <FaMicrosoft size={40} />
              <span>Microsoft Graph API</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 