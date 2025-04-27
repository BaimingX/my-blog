import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useLanguage } from '../../context/LanguageContext';
import './style.css';

const ProjectDetail = () => {
  // 从URL参数获取项目ID
  const { id } = useParams();
  const { language } = useLanguage();
  
  // 组件挂载时滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // 英文版内容
  const markdownContentEn = {
    'whispering-cards': `
# Whispering Cards - Technical Overview

## Project Introduction

Whispering Cards is an interactive web application that combines card games with Cthulhu Mythos elements. The application has three core functions: daily card drawing, interactive script adjustment, and creation of cards and interactive scripts. Currently, the card building system for creators has been completed and deployed on the Vercel platform, using Supabase for data storage and identity authentication.

## Technical Architecture

### Frontend
- **Framework**: Next.js 15 (App Router mode)
- **UI Rendering**: React 19
- **Styling System**: Tailwind CSS 4
- **State Management**: 
  - Zustand (Client-side state)
  - TanStack React Query (Server state and data fetching)
- **Form Validation**: Zod
- **Image Processing**: html2canvas/html2canvas-pro (for card rendering and export)
- **Component Library**: Custom UI components based on shadcn-ui
- **Icons**: React Icons

### Backend
- **Server**: Next.js API Routes (Serverless functions)
- **Database Access**: Prisma ORM
- **Data Storage**: Supabase (PostgreSQL)
- **Authentication**:
  - Supabase Auth
  - NextAuth.js (Supporting multiple login methods)
  - Custom Cookie Authentication (Anonymous users)
- **File Storage**: Supabase Storage (for card images)
- **AI Integration**: OpenAI API (GPT-4 and DALL-E)

### Deployment & Hosting
- **Deployment Platform**: Vercel
- **Database Service**: Supabase
- **CI/CD**: Vercel automatic deployment

## Data Models

The main data models include:
- **User**: Registered users and anonymous users
- **Card**: Game cards with attributes like name, description, image, etc.
- **Old God**: Deities associated with specific cards
- **CardInstance**: Specific cards owned by users
- **Scenario**: Basic unit of interactive scripts
- **ScenarioVersion**: Different versions of scripts
- **EffectImplementation**: Specific implementation of card effects

## Creator Features

The completed creator section includes:
- Card creation and editing interface
- Card image upload and management
- Card categorization and attribute settings
- Storage of card images and data via Supabase

## Architectural Features

1. **Server-side Rendering**: Using Next.js App Router for efficient server rendering and client interaction
2. **Serverless Architecture**: All backend logic implemented through API Routes, no need to maintain separate servers
3. **Type Safety**: Using TypeScript and Zod to ensure type consistency between frontend and backend
4. **Modular Design**: Separation of business logic and UI presentation, improving code maintainability
5. **Cloud Native**: Fully leveraging Vercel and Supabase cloud service capabilities

## Development Tools

- **Package Management**: npm
- **Code Standards**: ESLint, TypeScript
- **Database Tools**: Prisma Studio
- **Development Environment**: TypeScript, Node.js

## Future Development

1. Further improving the creator's script blueprint generation system
2. Developing interfaces for creating and experiencing interactive scripts
3. Optimizing user experience and performance
4. Enhancing AI content generation capabilities
`,
    'ecommerce': `
# Full-Stack Microservice Architecture Project Overview

## Overall Architecture

This project adopts a modern microservice architecture, deployed based on Docker containerization, mainly consisting of the following core components:

1. **Next.js Frontend** - User-facing main site frontend
2. **Vue Frontend** - Admin-facing backend management system
3. **Spring Boot Backend** - Unified RESTful API service
4. **Nginx** - Reverse proxy and load balancing
5. **MySQL** - Relational database
6. **Redis** - Caching and session management

The overall architecture adopts a frontend-backend separation design, with container orchestration achieved through Docker Compose, ensuring high cohesion and low coupling between components.

## Frontend Technology Stack

### Next.js Frontend (Main Site)

- **Technology Stack**: Next.js 13+ (React framework), TypeScript, Tailwind CSS
- **Features**:
  - Mixed mode of SSR (Server-Side Rendering) and SSG (Static Site Generation), optimizing SEO and first-screen loading speed
  - Modern architecture based on React Server Components (RSC)
  - Complete user authentication system (NextAuth)
  - Stripe payment system integration
  - Responsive design, ensuring a good experience across various devices

### Vue Frontend (Admin Backend)

- **Technology Stack**: Vue 3, Vite build tool
- **Features**:
  - Written using Composition API, with more concise code and higher maintainability
  - Single-page application (SPA) architecture, optimizing backend operation experience
  - Modular design, facilitating feature extension

## Backend Technology Stack

### Spring Boot Backend

- **Technology Stack**: Spring Boot 3.2, Java 21, MyBatis-Plus
- **Core Functions**:
  - RESTful API design
  - Unified authentication and authorization system based on Sa-Token
  - Redis for caching and session management
  - Stripe payment API integration
  - File upload and download service
  - Email sending functionality
  - Interface rate limiting protection

## Deployment & Operations

### Nginx Reverse Proxy

- **Functions**:
  - Unified route distribution
  - HTTP to HTTPS forced redirection
  - Static resource caching strategy
  - Load balancing
  - SSL certificate configuration

### Docker Containerization

- **Features**:
  - Multi-container orchestration based on Docker Compose
  - One-click deployment for production environment
  - Independent scaling of each service
  - Environment isolation, ensuring consistency across development, testing, and production environments

## Project Highlights

1. **Microservice Architecture**: Adopting a modern microservice architecture design, with clear component responsibilities, facilitating independent development, testing, and deployment.

2. **Full-Stack Technology Selection**:
   - Frontend using Next.js and Vue, two mainstream frameworks, optimized for different user scenarios
   - Backend using the latest version of Spring Boot 3.2, fully leveraging Java 21 new features
   - Data layer using MySQL 8 and Redis 6.2, providing persistent storage and high-performance caching

3. **Performance Optimization**:
   - Next.js implementing SSR/SSG hybrid rendering, improving first-screen loading speed and SEO performance
   - Nginx configuring detailed caching strategies, reducing server load
   - Spring Boot backend interface rate limiting protection, increasing system stability

4. **Security**:
   - Forced HTTPS access
   - Secure authentication using JWT and Sa-Token
   - Strict cross-origin policies and security headers
   - Sensitive information injected via environment variables, not hardcoded in code

5. **Scalability**:
   - Containerized deployment supporting horizontal scaling
   - Modular design facilitating feature iteration
   - Service communication via APIs, reducing coupling

6. **Development Experience**:
   - Hot reload support, improving development efficiency
   - Complete build scripts and deployment processes
   - TypeScript type checking, reducing runtime errors

## Inter-Project Communication Flow

1. **User Access Flow**:
   - User accesses the website via browser
   - Nginx receives the request and distributes traffic to the corresponding frontend service based on domain name
   - Next.js/Vue frontend handles UI rendering
   - Frontend calls Spring Boot backend services via API
   - Backend processes business logic and returns data
   - Frontend displays data to the user

2. **Data Flow**:
   - Frontend accesses backend services through API gateway
   - Backend services operate databases through ORM framework
   - High-frequency data stored in Redis cache to improve performance
   - File uploads and downloads handled through dedicated interfaces

3. **Authentication & Authorization**:
   - Main site users log in through NextAuth (supporting social account login)
   - Admin backend implements authentication and permission control through Sa-Token
   - JWT tokens used for frontend-backend communication verification

## Summary

This project uses industry-leading technology stacks and architectural design, implementing a high-performance, highly available, scalable full-stack application. Through Docker containerization, it achieves one-click deployment and environment consistency, while Nginx reverse proxy provides a unified access entry point and security assurance. The frontend uses Next.js and Vue optimized for different scenarios, the backend Spring Boot provides stable and reliable API services, and the overall system architecture is clear and role-specific, with good maintainability and scalability.
`
  };
  
  // 中文版内容
  const markdownContentZh = {
    'whispering-cards': `
# 呓语之牌 (Whispering Cards) - 技术栈概述

## 项目简介

呓语之牌是一个融合了抽卡游戏与克苏鲁元素的互动式Web应用。该应用具有三大核心功能：每日抽卡、调整互动剧本和创作卡牌和互动剧本。目前已完成创作者部分的卡牌构建系统，并已部署在Vercel平台上，使用Supabase作为数据存储和身份验证服务。

## 技术架构

### 前端
- **框架**: Next.js 15（App Router模式）
- **UI渲染**: React 19
- **样式系统**: Tailwind CSS 4
- **状态管理**: 
  - Zustand（客户端状态）
  - TanStack React Query（服务器状态和数据获取）
- **表单验证**: Zod
- **图像处理**: html2canvas/html2canvas-pro (用于卡牌渲染和导出)
- **组件库**: 基于shadcn-ui构建的自定义UI组件
- **图标**: React Icons

### 后端
- **服务器**: Next.js API Routes (Serverless函数)
- **数据库访问**: Prisma ORM
- **数据存储**: Supabase (PostgreSQL)
- **身份验证**:
  - Supabase Auth
  - NextAuth.js (支持多种登录方式)
  - 自定义Cookie认证 (匿名用户)
- **文件存储**: Supabase Storage (用于卡牌图像)
- **AI集成**: OpenAI API (GPT-4和DALL-E)

### 部署与托管
- **部署平台**: Vercel
- **数据库服务**: Supabase
- **CI/CD**: Vercel自动部署

## 数据模型

主要数据模型包括:
- **用户(User)**: 注册用户与匿名用户
- **卡牌(Card)**: 包含名称、描述、图像等属性的游戏卡牌
- **古神(old_god)**: 与特定卡牌相关联的神祇
- **卡牌实例(CardInstance)**: 用户拥有的具体卡牌
- **场景(Scenario)**: 互动剧本的基本单位
- **场景版本(ScenarioVersion)**: 剧本的不同版本
- **效果实现(EffectImplementation)**: 卡牌效果的具体实现

## 创作者功能

目前已完成的创作者部分包括:
- 卡牌创建与编辑界面
- 卡牌图像上传与管理 
- 卡牌分类与属性设置
- 通过Supabase存储卡牌图像和数据

## 架构特点

1. **服务器端渲染**: 利用Next.js的App Router实现高效的服务器渲染和客户端交互
2. **Serverless架构**: 所有后端逻辑通过API Routes实现，无需维护独立服务器
3. **类型安全**: 使用TypeScript和Zod保证前后端类型一致性
4. **模块化设计**: 业务逻辑与UI展示分离，提高代码可维护性
5. **云原生**: 完全利用Vercel和Supabase的云服务能力

## 开发工具

- **包管理**: npm
- **代码规范**: ESLint, TypeScript
- **数据库工具**: Prisma Studio
- **开发环境**: TypeScript, Node.js

## 未来发展

1. 继续完善创作者剧本蓝图生成系统
2. 开发互动剧本的创建和体验界面
3. 优化用户体验和性能
4. 增强AI内容生成能力
`,
    'ecommerce': `
# 全栈微服务架构项目综述

## 项目整体架构

本项目采用现代化微服务架构，基于Docker容器化部署，主要由以下几个核心组件构成：

1. **Next.js前端** - 面向用户的主站前端
2. **Vue前端** - 面向管理员的后台管理系统
3. **Spring Boot后端** - 统一的RESTful API服务
4. **Nginx** - 反向代理和负载均衡
5. **MySQL** - 关系型数据库
6. **Redis** - 缓存和会话管理

整体架构采用了前后端分离设计，通过Docker Compose实现容器编排，确保各组件之间的高内聚低耦合。

## 前端技术栈

### Next.js前端（主站）

- **技术栈**：Next.js 13+（React框架）、TypeScript、Tailwind CSS
- **特点**：
  - 采用SSR（服务端渲染）和SSG（静态站点生成）混合模式，优化SEO和首屏加载速度
  - 基于React服务器组件（RSC）的现代化架构
  - 实现了完整的用户认证系统（NextAuth）
  - 集成Stripe支付系统
  - 响应式设计，确保在各种设备上的良好体验

### Vue前端（管理后台）

- **技术栈**：Vue 3、Vite构建工具
- **特点**：
  - 采用Composition API编写，代码更简洁、可维护性更高
  - 单页应用架构（SPA），优化管理后台操作体验
  - 模块化设计，便于功能扩展

## 后端技术栈

### Spring Boot后端

- **技术栈**：Spring Boot 3.2、Java 21、MyBatis-Plus
- **核心功能**：
  - RESTful API设计
  - 基于Sa-Token的统一认证授权系统
  - 使用Redis进行缓存和会话管理
  - 集成Stripe支付API
  - 文件上传下载服务
  - 邮件发送功能
  - 接口限流保护

## 部署与运维

### Nginx反向代理

- **功能**：
  - 统一路由分发
  - HTTP转HTTPS强制跳转
  - 静态资源缓存策略
  - 负载均衡
  - SSL证书配置

### Docker容器化

- **特点**：
  - 基于Docker Compose的多容器编排
  - 生产环境一键部署
  - 各服务独立扩展
  - 环境隔离，确保开发、测试、生产环境一致性

## 项目亮点

1. **微服务架构**：采用了现代化的微服务架构设计，各组件职责明确，便于独立开发、测试和部署。

2. **全栈技术选型**：
   - 前端采用Next.js和Vue两种主流框架，分别针对不同用户场景优化
   - 后端选用Spring Boot 3.2最新版本，充分利用Java 21新特性
   - 数据层使用MySQL 8和Redis 6.2，提供持久化存储和高性能缓存

3. **性能优化**：
   - Next.js实现SSR/SSG混合渲染，提升首屏加载速度和SEO表现
   - Nginx配置精细的缓存策略，减轻服务器负担
   - Spring Boot后端接口限流保护，提高系统稳定性

4. **安全性**：
   - 强制HTTPS访问
   - 采用JWT和Sa-Token实现安全认证
   - 配置了严格的跨域策略和安全头
   - 敏感信息通过环境变量注入，不在代码中硬编码

5. **可扩展性**：
   - 容器化部署支持水平扩展
   - 模块化设计便于功能迭代
   - 服务间通过API通信，降低耦合度

6. **开发体验**：
   - 热重载支持，提升开发效率
   - 完整的构建脚本和部署流程
   - TypeScript类型检查，减少运行时错误

## 项目间通信流程

1. **用户访问流程**：
   - 用户通过浏览器访问网站
   - Nginx接收请求并根据域名将流量分发到对应前端服务
   - Next.js/Vue前端处理UI渲染
   - 前端通过API调用Spring Boot后端服务
   - 后端处理业务逻辑并返回数据
   - 前端展示数据给用户

2. **数据流转**：
   - 前端通过API网关访问后端服务
   - 后端服务通过ORM框架操作数据库
   - 高频数据存储在Redis缓存中提升性能
   - 文件上传下载通过专用接口处理

3. **认证授权**：
   - 主站用户通过NextAuth实现登录（支持社交账号登录）
   - 管理后台通过Sa-Token实现认证和权限控制
   - JWT令牌用于前后端通信验证

## 总结

本项目采用了业界主流的技术栈和架构设计，实现了高性能、高可用、可扩展的全栈应用。通过Docker容器化实现了一键部署和环境一致性，Nginx反向代理提供了统一的访问入口和安全保障。前端采用Next.js和Vue分别针对不同场景进行优化，后端Spring Boot提供稳定可靠的API服务，整体系统架构清晰、职责分明，具有良好的可维护性和可扩展性。
`
  };

  // 根据当前语言选择内容
  const content = language === 'en' 
    ? (markdownContentEn[id] || '# Project Details\n\nThe details for this project are not available yet.') 
    : (markdownContentZh[id] || '# 项目详情\n\n该项目详情暂未提供。');

  return (
    <div className="project-detail-container">
      <div className="markdown-content">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ProjectDetail; 