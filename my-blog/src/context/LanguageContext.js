import React, { createContext, useState, useContext, useEffect } from 'react';

// 创建语言上下文
export const LanguageContext = createContext();

// 语言提供者组件
export const LanguageProvider = ({ children }) => {
  // 默认语言设为英语
  const [language, setLanguage] = useState('en');

  // 从本地存储加载语言偏好
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // 切换语言
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'zh' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 自定义钩子，方便在组件中使用语言上下文
export const useLanguage = () => useContext(LanguageContext); 