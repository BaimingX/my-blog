import React from 'react';
import './style.css';

const Projects = () => {
  // 项目数据，实际使用时可以从API获取或移到单独的数据文件中
  const projectsData = [
    {
      id: 1,
      title: '电商平台开发',
      description: '基于React和Node.js的全栈电商平台，实现了商品展示、购物车、支付、订单管理等功能。',
      technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
      image: '/projects/ecommerce.jpg',
      link: 'https://github.com/yourusername/ecommerce-project',
      demo: 'https://ecommerce-demo.yourdomain.com'
    },
    {
      id: 2,
      title: '企业内部管理系统',
      description: '为某企业开发的内部管理系统，包括员工管理、项目跟踪、资源分配等模块。',
      technologies: ['Vue.js', 'Element UI', 'Spring Boot', 'MySQL'],
      image: '/projects/management-system.jpg',
      link: 'https://github.com/yourusername/management-system'
    },
    {
      id: 3,
      title: '社交媒体应用',
      description: '类似Instagram的社交媒体应用，支持图片上传、滤镜、评论、点赞等功能。',
      technologies: ['React Native', 'Firebase', 'Redux', 'Cloud Functions'],
      image: '/projects/social-app.jpg',
      link: 'https://github.com/yourusername/social-app',
      demo: 'https://social-app-demo.yourdomain.com'
    },
    {
      id: 4,
      title: '个人博客系统',
      description: '基于Next.js的个人博客系统，支持Markdown编写、代码高亮、评论系统等功能。',
      technologies: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
      image: '/projects/blog-system.jpg',
      link: 'https://github.com/yourusername/blog-system',
      demo: 'https://your-blog.com'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">项目经验</h2>
        
        <div className="projects-grid">
          {projectsData.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image || '/project-placeholder.jpg'} alt={project.title} />
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
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-code"></i> 查看代码
                    </a>
                  )}
                  
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> 在线演示
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="more-projects">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="btn primary-btn">
            在GitHub上查看更多项目
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 