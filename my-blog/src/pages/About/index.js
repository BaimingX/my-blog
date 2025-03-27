import React from 'react';
import './style.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">关于我</h2>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              {/* 这里可以放置你的照片 */}
              <img src="/profile-placeholder.jpg" alt="白明" />
            </div>
          </div>
          
          <div className="about-text">
            <p>
              你好！我是白明，一名热情的全栈开发工程师，拥有X年的Web开发经验。
              我热爱解决复杂问题并创建优雅高效的应用程序。
            </p>
            <p>
              我的技术旅程始于X年，当时我开始学习编程并参与了第一个项目。多年来，
              我积累了丰富的经验，涵盖了从前端到后端的各种技术栈。
            </p>
            
            <div className="experience">
              <h3>工作经历</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-date">2021 - 至今</div>
                  <div className="timeline-content">
                    <h4>高级全栈开发工程师</h4>
                    <p>XX科技有限公司</p>
                    <ul>
                      <li>负责公司核心产品的架构设计和开发</li>
                      <li>带领前端团队，推动技术栈升级和最佳实践</li>
                      <li>优化应用性能，提高用户体验</li>
                    </ul>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-date">2018 - 2021</div>
                  <div className="timeline-content">
                    <h4>Web开发工程师</h4>
                    <p>XX信息技术有限公司</p>
                    <ul>
                      <li>开发和维护企业级Web应用</li>
                      <li>实现响应式设计和跨浏览器兼容性</li>
                      <li>优化数据库查询和API性能</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="education">
              <h3>教育背景</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-date">2014 - 2018</div>
                  <div className="timeline-content">
                    <h4>计算机科学与技术</h4>
                    <p>XX大学</p>
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