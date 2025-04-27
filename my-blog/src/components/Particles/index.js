import React, { useRef, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './style.css';

const Particles = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();
  
  // 粒子配置
  const particleConfig = {
    number: 80,
    connectDistance: 120,
    moveSpeed: 0.5,
    lineColor: theme === 'dark' ? 'rgba(97, 218, 251, 0.2)' : 'rgba(0, 136, 204, 0.2)',
    particleColor: theme === 'dark' ? 'rgba(97, 218, 251, 0.7)' : 'rgba(0, 136, 204, 0.7)',
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // 调整canvas大小以适应窗口
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // 创建粒子类
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * particleConfig.moveSpeed;
        this.vy = (Math.random() - 0.5) * particleConfig.moveSpeed;
        this.radius = Math.random() * 2 + 1;
      }

      // 绘制粒子
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleConfig.particleColor;
        ctx.fill();
      }

      // 更新粒子位置
      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.vx = -this.vx;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.vy = -this.vy;
        }
        this.x += this.vx;
        this.y += this.vy;
      }
    }

    // 初始化粒子
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleConfig.number; i++) {
        particles.push(new Particle());
      }
    };

    // 绘制粒子之间的连线
    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < particleConfig.connectDistance) {
            ctx.beginPath();
            ctx.strokeStyle = particleConfig.lineColor;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // 动画循环
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    // 初始化
    resizeCanvas();
    initParticles();
    animate();

    // 监听窗口大小变化
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    // 清理
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]); // 主题变化时重新初始化

  return (
    <canvas ref={canvasRef} className="particles-canvas" />
  );
};

export default Particles; 