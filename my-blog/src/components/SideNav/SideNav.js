import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../locales';
import './SideNav.css';

export default function SideNav() {
  const [activeSection, setActiveSection] = useState('home');
  const { language } = useLanguage();
  const t = translations[language];
  const location = useLocation();
  const navigate = useNavigate();

  // 定义多语言侧边栏菜单项
  const sections = [
    { id: 'home', label: t.sidenav.home },
    { id: 'about', label: t.sidenav.about },
    { id: 'projects', label: t.sidenav.projects },
    { id: 'contact', label: t.sidenav.contact },
  ];

  // 路由变化时重新初始化观察器
  useEffect(() => {
    if (location.pathname !== '/') {
      return; // 如果不是主页，不初始化观察器
    }

    // 延迟初始化观察器，确保DOM元素已加载
    const timer = setTimeout(() => {
      initObserver();
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname, language]);

  // 初始化观察器函数
  const initObserver = () => {
    // 使用 IntersectionObserver 监测每个 section
    const observerOptions = {
      root: null,      // 视窗
      rootMargin: '0px',
      threshold: 0.6,  // 可见度达到 60% 就算进入视野
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 当前进入视野的 section 就是 activeSection
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(sec => {
      const element = document.getElementById(sec.id);
      if (element) observer.observe(element);
    });

    // 返回清理函数
    return () => {
      sections.forEach(sec => {
        const element = document.getElementById(sec.id);
        if (element) observer.unobserve(element);
      });
    };
  };

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    
    // 如果不在主页，先导航到主页
    if (location.pathname !== '/') {
      navigate('/');
      // 设置一个标记，表示需要滚动到指定部分
      sessionStorage.setItem('scrollTo', id);
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 检查是否需要滚动到指定部分（从其他页面返回时）
  useEffect(() => {
    if (location.pathname === '/') {
      const scrollToId = sessionStorage.getItem('scrollTo');
      if (scrollToId) {
        // 延迟执行，确保DOM已经加载
        setTimeout(() => {
          const element = document.getElementById(scrollToId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(scrollToId);
          }
          sessionStorage.removeItem('scrollTo');
        }, 500);
      }
    }
  }, [location.pathname]);

  // 如果不在主页，显示"返回主页"按钮
  const showBackButton = location.pathname !== '/';

  return (
    <nav className="side-nav">
      {showBackButton && (
        <div className="back-to-home">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
            ← {language === 'en' ? 'Back to Home' : '返回首页'}
          </a>
        </div>
      )}
      <ul>
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
              onClick={scrollToSection(id)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
