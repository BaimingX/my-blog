import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../locales';
import ecommerceImg from '../../assets/img/ecommerce.png';
import whisperingCardsImg from '../../assets/img/whispering-cards.png';
import { FaGithub, FaExternalLinkAlt, FaInfo } from 'react-icons/fa';
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
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;
        
        // 计算鼠标位置与卡片中心的相对位置
        const xOffset = (e.clientX - cardCenterX) / 25;
        const yOffset = (e.clientY - cardCenterY) / 25;
        
        // 判断鼠标是否在卡片附近
        const distance = Math.sqrt(
          Math.pow(e.clientX - cardCenterX, 2) + 
          Math.pow(e.clientY - cardCenterY, 2)
        );
        
        if (distance < 400) {
          // 鼠标在卡片附近，应用3D效果
          card.style.transform = `perspective(1000px) rotateY(${-xOffset}deg) rotateX(${yOffset}deg) scale(1.02)`;
        } else {
          // 鼠标远离卡片，恢复正常状态
          card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
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
      title: language === 'en' ? t.projects.ecommerce.title : '电商平台开发',
      description: t.projects.ecommerce.description,
      technologies: ['Next.js', 'React', 'TypeScript', 'Spring Boot', 'MySQL', 'Redis', 'Docker', 'Nginx'],
      image: ecommerceImg,
      link: 'https://github.com/yourusername/ecommerce-project',
      demo: 'https://ecommerce-demo.yourdomain.com',
      detail: '/project/ecommerce'
    },
    {
      id: 2,
      title: language === 'en' ? t.projects.management.title : '企业内部管理系统',
      description: t.projects.management.description,
      technologies: ['Vue.js', 'Element UI', 'Spring Boot', 'MySQL'],
      image: 'projects/management-system.jpg',
      link: 'https://github.com/yourusername/management-system',
      detail: '/project/management-system'
    },
    {
      id: 3,
      title: language === 'en' ? t.projects.whisperingCards.title : '呓语之牌',
      description: t.projects.whisperingCards.description,
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Zustand', 'Supabase', 'Prisma', 'Vercel'],
      image: whisperingCardsImg,
      link: 'https://github.com/yourusername/whispering-cards',
      demo: 'https://whispering-cards.vercel.app',
      detail: '/project/whispering-cards'
    },
    {
      id: 4,
      title: language === 'en' ? t.projects.blog.title : '个人博客系统',
      description: t.projects.blog.description,
      technologies: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
      image: 'projects/blog-system.jpg',
      link: 'https://github.com/yourusername/blog-system',
      demo: 'https://your-blog.com',
      detail: '/project/blog-system'
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
                    {project.link && (
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