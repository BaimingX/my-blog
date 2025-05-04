import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../locales';
import './style.css';

const MeAndAi = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="me-and-ai" className="me-and-ai-section">
      <div className="container">
        <h2 className="section-title">{t.meAndAi.title}</h2>
        
        <div className="me-and-ai-content">
          <div className="section-block">
            <h3 className="section-subtitle">{t.meAndAi.section1.title}</h3>
            <p>{t.meAndAi.section1.content}</p>
          </div>
          
          <div className="section-block">
            <h3 className="section-subtitle">{t.meAndAi.section2.title}</h3>
            <p>{t.meAndAi.section2.content}</p>
          </div>
          
          <div className="section-block">
            <h3 className="section-subtitle">{t.meAndAi.section3.title}</h3>
            <p>{t.meAndAi.section3.content}</p>
          </div>
          
          <div className="section-block">
            <h3 className="section-subtitle">{t.meAndAi.section4.title}</h3>
            <p>{t.meAndAi.section4.content}</p>
          </div>
        </div>
        
        {/* 可选：添加技术栈或工具图标展示 */}
        <div className="ai-tools">
          <div className="ai-tool">
            <div className="tool-icon">🤖</div>
            <span>ChatGPT</span>
          </div>
          <div className="ai-tool">
            <div className="tool-icon">🦙</div>
            <span>LlamaIndex</span>
          </div>
          <div className="ai-tool">
            <div className="tool-icon">⛓️</div>
            <span>LangChain</span>
          </div>
          <div className="ai-tool">
            <div className="tool-icon">🧠</div>
            <span>Claude</span>
          </div>
          <div className="ai-tool">
            <div className="tool-icon">🐪</div>
            <span>Ollama</span>
          </div>
          <div className="ai-tool">
            <div className="tool-icon">🐳</div>
            <span>Docker</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeAndAi; 