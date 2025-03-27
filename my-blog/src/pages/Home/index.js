import React from 'react';
import './style.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="hero-content">
          <h1>你好，我是<span className="highlight">白明</span></h1>
          <h2>全栈开发工程师</h2>
          <p className="intro-text">
            专注于Web应用开发，热爱技术创新与问题解决。
            拥有丰富的前后端开发经验，致力于创建高质量、用户友好的应用程序。
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="btn primary-btn">查看我的项目</a>
            <a href="#contact" className="btn secondary-btn">联系我</a>
          </div>
        </div>
        
        <div className="skills-container">
          <h3>技术栈</h3>
          <div className="skills-grid">
            <div className="skill-item">
              <i className="devicon-javascript-plain"></i>
              <span>JavaScript</span>
            </div>
            <div className="skill-item">
              <i className="devicon-react-original"></i>
              <span>React</span>
            </div>
            <div className="skill-item">
              <i className="devicon-nodejs-plain"></i>
              <span>Node.js</span>
            </div>
            <div className="skill-item">
              <i className="devicon-python-plain"></i>
              <span>Python</span>
            </div>
            {/* 你可以根据自己的技能添加更多 */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 