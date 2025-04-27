import React, { createContext, useState, useContext, useEffect } from 'react';

// 创建主题上下文
export const ThemeContext = createContext();

// 主题提供者组件
export const ThemeProvider = ({ children }) => {
  // 默认主题设为暗色
  const [theme, setTheme] = useState('dark');

  // 从本地存储加载主题偏好
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  // 切换主题
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 自定义钩子，方便在组件中使用主题上下文
export const useTheme = () => useContext(ThemeContext); 