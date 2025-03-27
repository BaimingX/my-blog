import React, { useEffect, useState } from 'react';
import './SideNav.css';

const sections = [
  { id: 'home', label: '首页' },
  { id: 'about', label: '关于我' },
  { id: 'projects', label: '项目经验' },
  { id: 'contact', label: '联系我' },
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
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

    // 组件卸载时，取消观察
    return () => {
      sections.forEach(sec => {
        const element = document.getElementById(sec.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <nav className="side-nav">
      <ul>
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
