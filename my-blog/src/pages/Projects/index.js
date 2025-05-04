import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../locales';
import ecommerceImg from '../../assets/img/ecommerce.png';
import originappImg from '../../assets/img/originapp.png';
import whisperingCardsImg from '../../assets/img/whispering-cards.png';
import { FaGithub, FaExternalLinkAlt, FaInfo, FaLock } from 'react-icons/fa';
import './style.css';

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const projectsContainerRef = useRef(null);
  
  // 鼠标位置状态
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // 3D效果处理
  useEffect(() => {
    const handleMouseMove = (e) => {
      // 更新鼠标位置状态
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // 获取所有卡片并应用3D效果
      const cards = document.querySelectorAll('.project-card');

        cards.forEach(card => {
          const inner = card.querySelector('.project-card-inner');
          const rect = card.getBoundingClientRect();
          const cardCenterX = rect.left + rect.width / 2;
          const cardCenterY = rect.top + rect.height / 2;

          const xOffset = (e.clientX - cardCenterX) / 25;
          const yOffset = (e.clientY - cardCenterY) / 25;

          const distance = Math.hypot(e.clientX - cardCenterX, e.clientY - cardCenterY);
          if (distance < 400) {
            inner.style.transform = `rotateY(${-xOffset}deg) rotateX(${yOffset}deg) scale(1.02)`;
          } else {
            inner.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
          }
        });

    };
    
    // 添加鼠标移动事件监听器
    const container = projectsContainerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      
      // 清理函数
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);
  
  // 项目数据，实际使用时可以从API获取或移到单独的数据文件中
  const projectsData = [
    {
      id: 1,
      title: language === 'en' ? t.projects.ecommerce.title : 'AusCoolStuff 电商网站',
      description: t.projects.ecommerce.description,
      technologies: ['Next.js', 'React', 'TypeScript', 'Spring Boot', 'MySQL', 'Redis', 'Docker', 'Nginx'],
      image: ecommerceImg,
      link: 'https://github.com/BaimingX/E-commerce',
      demo: 'https://auscoolstuff.com.au',
      detail: '/project/ecommerce'
    },
    {
      id: 2,
      title: language === 'en' ? 'Microsoft Teams App' : 'Microsoft Teams 培训管理应用',
      description: language === 'en' ? 
        'A multi-functional application for training management, attendance tracking, venue inspection, and trainer availability management based on Microsoft Teams platform.' : 
        '基于Microsoft Teams平台的多功能培训管理应用，实现了培训管理、考勤表管理、场地检查、教练可用性管理等功能。',
      technologies: ['React', 'Material UI', 'Fluent UI', 'Azure Functions', 'Microsoft Graph API', 'Azure Blob Storage', 'WebSocket', 'PDF Processing'],
      image: originappImg,
      isCompanyProject: true, // 标记为公司项目
      detail: '/project/teams-app'
    },
    {
      id: 3,
      title: language === 'en' ? 'Teams App Backend System' : 'Teams应用后端系统',
      description: language === 'en' ? 
        'The backend system for Microsoft Teams training management application, based on Java Spring Boot, providing API support and data processing services.' : 
        '基于Java Spring Boot架构的Teams培训管理应用后端系统，为前端应用提供API支持和数据处理服务。',
      technologies: ['Java 17', 'Spring Boot', 'Spring Security', 'WebSocket', 'MyBatis-Plus', 'Azure Blob Storage', 'JWT', 'iText'],
      image: originappImg,
      isCompanyProject: true, // 标记为公司项目
      detail: '/project/teams-backend'
    },
    {
      id: 4,
      title: language === 'en' ? t.projects.whisperingCards.title : '呓语之牌',
      description: t.projects.whisperingCards.description,
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Zustand', 'Supabase', 'Prisma', 'Vercel'],
      image: whisperingCardsImg,
      link: 'https://github.com/BaimingX/whispering-cards',
      demo: 'https://whispering-cards.vercel.app',
      detail: '/project/whispering-cards'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container" ref={projectsContainerRef}>
        <h2 className="section-title">{t.projects.title}</h2>
        
        <div className="projects-grid">
          {projectsData.map(project => (
            <div className="project-card card-3d" key={project.id}>
              <div className="project-card-inner card-3d-content">
                <div className="project-image">
                  <img src={project.image || '/project-placeholder.jpg'} alt={project.title} />
                  <div className="project-overlay">
                    <div className="tech-icons">
                      {project.technologies.slice(0, 4).map((tech, index) => (
                        <span key={index} className="tech-icon-badge">{tech}</span>
                      ))}
                      {project.technologies.length > 4 && 
                        <span className="tech-icon-more">+{project.technologies.length - 4}</span>
                      }
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span className="tech-tag" key={index}>{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    {project.isCompanyProject ? (
                      <div className="project-link disabled">
                        <FaLock /> <span>{t.projects.buttons.viewCode}</span>
                      </div>
                    ) : project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link btn-interactive"
                        aria-label={language === 'en' ? 'View source code' : '查看源代码'}
                      >
                        <FaGithub /> <span>{t.projects.buttons.viewCode}</span>
                      </a>
                    )}
                    
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link btn-interactive"
                        aria-label={language === 'en' ? 'Visit live demo' : '访问在线演示'}
                      >
                        <FaExternalLinkAlt /> <span>{t.projects.buttons.liveDemo}</span>
                      </a>
                    )}
                    
                    {project.detail && (
                      <Link 
                        to={project.detail} 
                        className="project-link details-link btn-interactive"
                        aria-label={language === 'en' ? 'View project details' : '查看项目详情'}
                      >
                        <FaInfo /> <span>{language === 'en' ? 'Details' : '详情'}</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 