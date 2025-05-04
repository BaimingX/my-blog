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
    'teams-app': `
# Microsoft Teams App Project Overview

## Project Introduction

This project is a multi-functional application based on the Microsoft Teams platform, specifically designed for training institutions. It implements training management, attendance sheet management, venue inspection, trainer availability management, and other functionalities. The application adopts a modern technology stack and architecture, supporting embedding in Teams, Outlook, and Microsoft 365 applications.

## Technology Stack

### Frontend Technologies

- **React**: Uses React 18 as the frontend framework
- **Material UI (MUI)**: Builds modern UI with MUI component library (V5)
- **Fluent UI**: Integrates Microsoft Teams design style
- **React Router**: Implements in-app navigation
- **Microsoft Teams SDK**: Integrates Teams functionality via @microsoft/teams-js and @microsoft/teamsfx-react
- **PDF Processing**: Implements PDF generation and processing using pdf-lib, pdfjs-dist, and pdfmake
- **Data Visualization**: Implements drag-and-drop functionality using react-beautiful-dnd
- **File Handling**: Implements file uploads using react-dropzone
- **Electronic Signature**: Implements signature functionality through react-signature-canvas
- **WebSocket Communication**: Implements real-time collaborative editing
- **QR Code Generation and Scanning**: Generates QR codes using qrcode.react

### Backend Technologies

- **Azure Functions**: Implements serverless backend APIs
- **Microsoft Graph API**: Accesses Microsoft 365 data using @microsoft/microsoft-graph-client
- **Azure Blob Storage**: Implements data storage via @azure/storage-blob
- **SSO Authentication**: Implements single sign-on based on Microsoft Entra ID
- **WebSocket Service**: Supports real-time data communication

## Technical Highlights

### 1. Authentication and Authorization System

- **OBO (On-Behalf-Of) Authentication Flow**: Implements secure and reliable SSO authentication
- **Role-Based Access Control**: Implements fine-grained permission management through custom permission system
- **Region-Based Access Control**: Restricts feature access based on user's region (e.g., NSW, VIC)

### 2. Modular Architecture

- **Component-Based Design**: Divides functionality into independent modules like attendance sheets, venue checks, trainer availability, etc.
- **Centralized Configuration**: Manages application features and permissions through JSON configuration files
- **Scalability**: Supports dynamic addition and configuration of new functional modules

### 3. Cloud Storage Integration

- **Serverless Data Storage**: Implements lightweight data management using Azure Blob Storage
- **Configuration File Management**: Manages user configurations and system settings through cloud storage
- **File Processing**: Supports document uploading, storage, and processing

### 4. Management Functions

- **Admin Dashboard**: Provides comprehensive management interface supporting user management, permission configuration, and feature enabling/disabling
- **Dynamic UI Configuration**: Supports online modification of application UI and feature descriptions
- **User Management**: Supports adding, deleting, and managing users with different roles

### 5. Form Processing and Data Operations

- **Dynamic Form Generation**: Generates interactive forms based on configuration
- **PDF Generation and Processing**: Supports generating, filling, and signing PDF documents
- **Data Validation**: Implements client-side data validation logic

### 6. PDF Collaborative Editing System

- **WebSocket Real-Time Collaboration**: Enables multiple users to edit the same PDF document simultaneously
- **Real-Time Status Synchronization**: Shows other users' editing status in real-time
- **Field-Level Permission Control**: Dynamically controls editable fields based on user roles
- **UI Feedback Mechanism**: Provides visual cues for collaboration status
- **Disconnection Recovery Mechanism**: Implements stable connection recovery

### 7. Mobile QR Code Quick Upload System

- **QR Code Generation**: Dynamically generates QR codes containing contextual information
- **Mobile Adaptation**: Provides upload interface optimized for mobile devices
- **Batch Operations**: Supports processing multiple student documents at once
- **Image Optimization**: Automatically compresses and processes uploaded images
- **Status Synchronization**: Synchronizes upload status across devices

### 8. EWP Modular Control System

- **Hierarchical Permission Control**: Implements special permission system based on high-risk training characteristics
- **Dynamic Folder Browser**: Customizes Azure Blob storage browser
- **Status Tracking**: Tracks the entire lifecycle of training processes
- **NOA Document Management**: Manages special certification documents
- **Multi-Stage Forms**: Supports multi-day training data collection

## In-Depth Development Features

1. **Attendance Sheet Management System**
   - Electronic signature functionality
   - Automatic PDF report generation
   - Real-time data synchronization
   - Breakpoint resume support
   - Automatic timing and break reminders

2. **Venue Safety Inspection**
   - Structured inspection forms
   - Issue recording and tracking
   - Venue status visualization
   - Photo evidence uploading and management

3. **Trainer Availability Management**
   - Schedule planning and conflict detection
   - Availability visualization
   - Automatic assignment suggestions
   - Holiday and workday management

4. **Inventory Management**
   - Equipment tracking
   - Inventory alerts
   - Usage recording
   - Photo evidence uploading
   - Item request system

5. **High-Risk Training Management (EWP)**
   - Special permission control
   - Safety certification process
   - Training record management
   - Multi-stage form collection
   - Document integrity verification

6. **Administrator Control Panel**
   - User permission management
   - Feature configuration
   - System settings
   - Data analysis and reporting

7. **PDF Collaborative Editing System**
   - Real-time multi-user editing
   - Modification conflict handling
   - Edit history tracking
   - Field validation and formatting
   - Dynamic locking mechanism

8. **Mobile Quick Upload**
   - QR code scan upload
   - Direct camera shooting
   - Batch processing functionality
   - Offline caching mechanism
   - Real-time status synchronization

## Tools and Services Used

- **Microsoft Teams Platform**: Provides application hosting and integration environment
- **Azure Functions**: Implements serverless backend
- **Azure Blob Storage**: Provides cloud storage solutions
- **Microsoft Graph API**: Accesses Microsoft 365 user data
- **Microsoft Entra ID (formerly Azure AD)**: Implements authentication and authorization
- **Teams Toolkit**: Used for developing and debugging Teams apps
- **WebSocket Service**: Provides real-time data communication support
- **PDF Processing Libraries**: Uses pdf-lib, pdfjs-dist for PDF operations
- **QR Code Generation Library**: Uses qrcode.react for generating QR codes

## Innovative Technical Solutions

### PDF Real-Time Collaborative Editing

The project implements a WebSocket-based PDF real-time collaborative editing system, allowing multiple users to edit the same PDF document simultaneously. The system includes the following features:

1. **Real-Time Data Synchronization**: Implements immediate synchronization of form fields via WebSocket
2. **User Status Indication**: Shows who is currently editing specific fields
3. **Dynamic Permission Control**: Automatically assigns editable fields based on user roles
4. **Disconnection Recovery Mechanism**: Provides automatic reconnection and session recovery
5. **Conflict Prevention Mechanism**: Avoids conflicts when multiple people edit the same field simultaneously

### QR Code Mobile Upload System

To solve mobile device upload issues, an innovative QR code upload system was developed:

1. **Context Transmission**: QR codes contain contextual information about training, students, etc.
2. **Mobile-Adapted Interface**: Upload interface optimized for mobile browsers
3. **Image Processing**: Automatically compresses and adjusts uploaded images
4. **Cloud Synchronization**: Real-time synchronization of upload status to the management system
5. **Cross-Device Status Sharing**: Seamless transition between desktop and mobile devices

### EWP High-Risk Training Module

A professional management system developed for high-risk training projects:

1. **Layered File Structure**: Training archives organized by date
2. **Status JSON Tracking**: Uses JSON files to track training status
3. **Multi-Stage Forms**: Supports form collection for multi-day training
4. **Document Integrity Verification**: Automatically checks the completeness of necessary documents
5. **Permission Isolation**: Ensures only authorized users can access sensitive training content

## Deployment and Hosting

- **Azure Cloud Services**: Used for hosting backend functionality and storage
- **Microsoft Teams App Store**: Can be published as internal or public apps for organizations
- **CI/CD**: Supports continuous integration/deployment through GitHub Actions or Azure DevOps

## Summary

This project develops enterprise-level Teams applications using modern technology stacks, combining React frontend, Azure Functions backend, and Microsoft cloud services to create a secure and reliable training management system. The project adopts modular design and role-based access control to provide customized functional experiences for users from different regions and roles. Through integration with Microsoft Graph API and Azure storage services, it achieves deep integration with the Microsoft 365 ecosystem, providing users with a seamless experience.

Particularly noteworthy are the innovative solutions in the project, such as PDF real-time collaborative editing, QR code mobile upload, and EWP high-risk training management, which meet the specific needs of training institutions and greatly improve training management efficiency and data accuracy. The modern technology and architecture adopted by the system ensure high availability, scalability, and security, providing a comprehensive solution for enterprise-level training management. `,
  

   'teams-backend': `
   # Technical Overview of Teams Application Project

## Project Introduction
This is a multi-functional backend system for a Microsoft Teams platform application, specifically designed for training institutions. It implements training management, attendance management, venue inspection, coach availability management, and other features. The backend uses Java Spring Boot architecture to provide API support and data processing services for the frontend Teams application.

## Backend Technology Stack
### Core Framework
- **Java 17**: Project developed based on Java 17
- **Spring Boot 2.6.11**: Core application framework
- **Spring Security**: Authentication and authorization implementation
- **Spring WebSocket**: Provides WebSocket real-time communication support
- **MyBatis-Plus 3.5.3**: Enhanced ORM framework

### Storage and Cache
- **Redis**: Used for caching and session management, utilizing Jedis client
- **Azure Blob Storage**: Cloud storage solution, integrated through Azure SDK

### Authentication and Security
- **JWT (Java-JWT 3.11.0)**: Token-based authentication implementation
- **Spring Security**: Provides security framework and authorization services

### Document Processing
- **iText 7.1.14**: PDF generation and processing library
- **Apache Commons**: Utility class collection (Commons Lang, Commons IO, Commons Collections)

### Cloud Service Integration
- **Microsoft Graph API 5.0.0**: Access to Microsoft 365 data
- **Azure Identity**: Provides Azure authentication services
- **Azure SDK**: Azure services integration

### Other Tools
- **Lombok**: Reduces boilerplate code
- **Hutool**: Chinese utility package providing various practical utility methods
- **Jackson**: JSON processing library
- **WebSocket**: Real-time communication implementation

## Technical Highlights
### 1. WebSocket Real-time Collaboration System
The project implements a WebSocket-based real-time collaborative editing system with the following features:
- **Session Management**: Efficiently manages WebSocket sessions through ConcurrentHashMap
- **Grouping Mechanism**: Session grouping by PDF file for targeted broadcasting
- **Real-time State Synchronization**: Supports immediate synchronization of user editing states
- **Health Check**: Implements PING/PONG mechanism to ensure connection stability
- **Reconnection**: Supports session recovery and state preservation
- **Message Type Handling**: Supports multiple message types (identity verification, PDF changes, PDF events, annotations, etc.)

### 2. Azure Blob Storage Integration
The system deeply integrates Azure Blob Storage services, implementing the following features:
- **Template Management**: Stores and manages PDF templates
- **Student Document Management**: Organizes folder structures by student ID
- **SAS Token Authorization**: Uses Shared Access Signatures for secure access control
- **File Copying and Processing**: Implements template copying and dynamic file generation
- **Pre-signed URLs**: Provides secure direct access links for the frontend

### 3. PDF Generation and Processing System
Uses the iText library to implement powerful PDF processing capabilities:
- **Dynamic Table Generation**: Dynamically generates tables based on student data
- **Conditional Styling**: Dynamically adjusts cell styles based on data content (e.g., NYS status highlighted in red)
- **Regional Adaptation**: Adjusts table structure based on state codes (such as VIC, NSW)
- **Image Integration**: Supports embedding images in PDFs (such as company logos)
- **Data Formatting**: Automatically formats and validates data

### 4. Power Automate Integration
The system seamlessly integrates with Microsoft Power Automate to achieve workflow automation:
- **Data Push**: Sends data to Power Automate for subsequent processing
- **Document Upload**: Supports direct PDF document uploads to Power Automate
- **Trainer Availability Query**: Automatically retrieves trainer SOT lists
- **Location Information Retrieval**: Real-time retrieval of training location information
- **Configuration Synchronization**: Supports system configuration retrieval from Power Automate

### 5. Security and Authentication
Implements comprehensive security mechanisms:
- **JWT Authentication**: Uses JSON Web Token for stateless authentication
- **Spring Security**: Provides comprehensive security framework
- **Role-based Permission Control**: Role-based access control system
- **Request Validation**: Uses Spring Validation for request data validation
- **CORS Configuration**: Handles cross-origin resource sharing

## Main Functional Modules
### 1. Attendance Management
- Generates standardized attendance PDF forms
- Supports student attendance status recording
- Electronic signature and verification
- Conditional formatting (automatically marks exceptions)
- Training completion status tracking

### 2. Venue Inspection System
- Venue information retrieval and management
- Venue status recording
- Issue tracking and reporting

### 3. PDF Collaborative Editing
- Multiple users editing simultaneously
- Real-time status synchronization
- Field-level permission control
- Editing conflict resolution
- Reconnection mechanism

### 4. Power Automate Integration
- Data collection and push
- Automated document processing
- Trainer scheduling management
- Notification and reminder services

## System Architecture
The project adopts a typical Spring Boot MVC architecture, primarily containing the following layers:
1. **Controller Layer**: Handles HTTP requests, provides RESTful APIs
2. **Service Layer**: Implements business logic
3. **Data Access Layer**: Accesses data through Azure Blob Storage and other storage services
4. **WebSocket Service**: Provides real-time communication functionality
5. **Security Layer**: Handles authentication and authorization
6. **Utility Classes**: Provides general functionality support

## Deployment and Runtime Environment
- **Cloud Platform**: Deployed on Azure cloud services
- **Runtime**: Java 17 runtime environment
- **Containerization**: Supports containerized deployment
- **CI/CD**: Supports automated deployment through scripts

## Summary
This project demonstrates a complete enterprise-level application backend implementation, integrating modern Java technology stack and Microsoft cloud service ecosystem. The system achieves real-time collaboration through WebSocket, cloud storage through Azure Blob Storage, PDF processing through iText, and seamless integration with Power Automate, providing a comprehensive digital solution for training institutions.

The project's highlights include modular processing of complex business logic, real-time collaboration, cloud storage integration, and document generation and management, providing users with efficient and reliable training management services. The system architecture is well-designed, with scalability and maintainability, suitable for continuous expansion and optimization of future functionality.
 `,


    'whispering-cards': `
# Whispering Cards - Technical Overview

## (Only the creator build deck part and google login are complete at the moment)

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
    'teams-app': `
# Teams应用项目概述

## 项目简介

本项目是一个基于Microsoft Teams平台的多功能应用，专为培训机构设计，实现了培训管理、考勤表管理、场地检查、教练可用性管理等功能。应用采用了现代化的技术栈和架构，支持在Teams、Outlook和Microsoft 365应用中嵌入使用。

## 技术栈

### 前端技术

- **React**: 使用React 18作为前端框架
- **Material UI (MUI)**: 使用MUI组件库（V5）构建现代化UI
- **Fluent UI**: 集成Microsoft Teams设计风格
- **React Router**: 实现应用内导航
- **Microsoft Teams SDK**: 通过@microsoft/teams-js和@microsoft/teamsfx-react集成Teams功能
- **PDF处理**: 使用pdf-lib、pdfjs-dist和pdfmake实现PDF生成和处理
- **数据可视化**: 使用drag-and-drop（react-beautiful-dnd）实现拖拽功能
- **文件处理**: 使用react-dropzone实现文件上传
- **电子签名**: 通过react-signature-canvas实现签名功能
- **WebSocket通信**: 实现实时协作编辑功能
- **二维码生成与扫描**: 使用qrcode.react生成二维码

### 后端技术

- **Azure Functions**: 用于实现无服务器后端API
- **Microsoft Graph API**: 使用@microsoft/microsoft-graph-client访问Microsoft 365数据
- **Azure Blob Storage**: 通过@azure/storage-blob实现数据存储
- **SSO认证**: 实现基于Microsoft Entra ID的单点登录
- **WebSocket服务**: 支持实时数据通信

## 技术亮点

### 1. 身份验证与授权系统

- **OBO (On-Behalf-Of) 身份验证流**: 实现安全可靠的SSO身份验证
- **基于角色的访问控制**: 通过自定义权限系统实现精细的权限管理
- **区域化访问控制**: 根据用户所属区域（如NSW、VIC）限制功能访问

### 2. 模块化架构

- **组件化设计**: 将功能拆分为多个独立模块，如考勤表、场地检查、教练可用性等
- **中心化配置**: 通过JSON配置文件管理应用功能和权限
- **可扩展性**: 支持动态添加和配置新功能模块

### 3. 云存储集成

- **无服务器数据存储**: 利用Azure Blob Storage实现轻量级数据管理
- **配置文件管理**: 通过云存储管理用户配置和系统设置
- **文件处理**: 支持文档上传、存储和处理

### 4. 管理功能

- **管理控制面板**: 提供全面的管理界面，支持用户管理、权限配置和功能启用/禁用
- **动态UI配置**: 支持在线修改应用UI和功能描述
- **用户管理**: 支持添加、删除和管理不同角色的用户

### 5. 表单处理与数据操作

- **动态表单生成**: 根据配置生成交互式表单
- **PDF生成与处理**: 支持生成、填写和签署PDF文档
- **数据验证**: 实现客户端数据验证逻辑

### 6. PDF协作编辑系统

- **WebSocket实时协作**: 实现多用户同时编辑PDF文档
- **实时状态同步**: 实时显示其他用户的编辑状态
- **字段级权限控制**: 基于用户角色动态控制可编辑字段
- **UI反馈机制**: 通过视觉提示反馈协作状态
- **断线重连机制**: 实现稳定的连接恢复功能

### 7. 移动二维码快速上传系统

- **二维码生成**: 动态生成包含上下文信息的二维码
- **移动端适配**: 专为移动设备优化的上传界面
- **批量操作**: 支持一次性处理多个学员文档
- **图像优化**: 自动压缩和处理上传图像
- **状态同步**: 跨设备同步上传状态

### 8. EWP模块化控制系统

- **层级权限控制**: 基于高风险培训特性的特殊权限系统
- **动态文件夹浏览器**: 自定义Azure Blob存储浏览器
- **状态追踪**: 培训过程全生命周期追踪
- **NOA文档管理**: 特殊认证文档的管理功能
- **多阶段表单**: 支持跨日培训的多阶段数据收集

## 深度开发功能

1. **考勤表管理系统**
   - 电子签名功能
   - 自动生成PDF报告
   - 实时数据同步
   - 断点续传支持
   - 自动计时与休息提醒

2. **场地安全检查**
   - 结构化检查表单
   - 问题记录与跟踪
   - 场地状态可视化
   - 图片证据上传与管理

3. **教练可用性管理**
   - 日程安排与冲突检测
   - 可用性可视化
   - 自动分配建议
   - 假期与工作日管理

4. **库存管理**
   - 设备跟踪
   - 库存预警
   - 使用记录
   - 图片证据上传
   - 物品请求系统

5. **高风险培训管理(EWP)**
   - 特殊权限控制
   - 安全认证流程
   - 培训记录管理
   - 多阶段表单收集
   - 文档完整性验证

6. **管理员控制面板**
   - 用户权限管理
   - 功能配置
   - 系统设置
   - 数据分析与报表

7. **PDF协作编辑系统**
   - 实时多用户编辑
   - 修改冲突处理
   - 编辑历史跟踪
   - 字段验证与格式化
   - 动态锁定机制

8. **移动端快速上传**
   - 二维码扫描上传
   - 相机直接拍摄
   - 批量处理功能
   - 离线缓存机制
   - 状态实时同步

## 使用的工具和服务

- **Microsoft Teams平台**: 提供应用托管和集成环境
- **Azure Functions**: 实现无服务器后端
- **Azure Blob Storage**: 提供云存储解决方案
- **Microsoft Graph API**: 访问Microsoft 365用户数据
- **Microsoft Entra ID (前Azure AD)**: 实现身份验证和授权
- **Teams Toolkit**: 用于开发和调试Teams应用
- **WebSocket服务**: 提供实时数据通信支持
- **PDF处理库**: pdf-lib、pdfjs-dist用于PDF操作
- **QR码生成库**: qrcode.react用于生成二维码

## 创新技术方案

### PDF实时协作编辑

项目实现了基于WebSocket的PDF实时协作编辑系统，允许多名用户同时编辑同一PDF文档。系统包含以下特性：

1. **实时数据同步**: 通过WebSocket实现表单字段的即时同步
2. **用户状态指示**: 显示谁正在编辑特定字段
3. **权限动态控制**: 根据用户角色自动分配可编辑字段
4. **断线重连机制**: 自动重连和会话恢复
5. **防冲突机制**: 避免多人同时编辑同一字段的冲突

### 二维码移动上传系统

为解决移动设备上传问题，开发了创新的二维码上传系统：

1. **上下文传递**: 二维码包含培训、学员等上下文信息
2. **移动适配界面**: 为手机浏览器优化的上传界面
3. **图像处理**: 自动压缩和调整上传图像
4. **云端同步**: 实时同步上传状态到管理系统
5. **跨设备状态共享**: 在桌面和移动端之间无缝切换

### EWP高风险培训模块

针对高风险培训项目开发的专业管理系统：

1. **分层文件结构**: 基于日期组织的培训档案
2. **状态JSON追踪**: 使用JSON文件追踪培训状态
3. **多阶段表单**: 支持跨天培训的表单收集
4. **文档完整性验证**: 自动检查必要文档的完整性
5. **权限隔离**: 确保只有授权用户才能访问敏感培训内容

## 部署和托管

- **Azure云服务**: 用于托管后端功能和存储
- **Microsoft Teams应用商店**: 可发布为组织内部或公共应用
- **CI/CD**: 支持通过GitHub Actions或Azure DevOps实现持续集成/部署

## 总结

本项目使用现代化技术栈开发企业级Teams应用，结合了React前端、Azure Functions后端和Microsoft云服务，实现了安全可靠的培训管理系统。项目采用模块化设计和基于角色的访问控制，为不同地区和角色的用户提供了定制化的功能体验。通过集成Microsoft Graph API和Azure存储服务，实现了与Microsoft 365生态系统的深度集成，为用户提供了无缝的使用体验。

特别值得一提的是项目中的PDF实时协作编辑、二维码移动上传和EWP高风险培训管理等创新解决方案，这些功能满足了培训机构的特定需求，大大提高了培训管理效率和数据准确性。系统采用的现代化技术和架构确保了应用的高可用性、可扩展性和安全性，为企业级培训管理提供了全面的解决方案。
`,

'teams-backend': `
# Teams应用项目技术概述

## 项目简介

这是一个基于Microsoft Teams平台的多功能应用后端系统，专为培训机构设计，实现了培训管理、考勤表管理、场地检查、教练可用性管理等功能。后端采用Java Spring Boot架构，为前端Teams应用提供API支持和数据处理服务。

## 后端技术栈

### 核心框架
- **Java 17**: 项目基于Java 17开发
- **Spring Boot 2.6.11**: 核心应用框架
- **Spring Security**: 实现认证与授权
- **Spring WebSocket**: 提供WebSocket实时通信支持
- **MyBatis-Plus 3.5.3**: 增强的ORM框架

### 存储与缓存
- **Redis**: 用于缓存和会话管理，使用Jedis客户端
- **Azure Blob Storage**: 云存储解决方案，通过Azure SDK集成

### 认证与安全
- **JWT (Java-JWT 3.11.0)**: 实现基于令牌的认证
- **Spring Security**: 提供安全框架和授权服务

### 文档处理
- **iText 7.1.14**: PDF生成和处理库
- **Apache Commons**: 工具类集合（Commons Lang, Commons IO, Commons Collections）

### 云服务集成
- **Microsoft Graph API 5.0.0**: 访问Microsoft 365数据
- **Azure Identity**: 提供Azure认证服务
- **Azure SDK**: 集成Azure服务

### 其他工具
- **Lombok**: 减少样板代码
- **Hutool**: 国产工具包，提供各种实用工具方法
- **Jackson**: JSON处理库
- **WebSocket**: 实现实时通信

## 技术亮点

### 1. WebSocket实时协作系统

项目实现了基于WebSocket的实时协作编辑系统，具有以下特点：

- **会话管理**: 通过ConcurrentHashMap高效管理WebSocket会话
- **分组机制**: 按PDF文件进行会话分组，实现针对性广播
- **实时状态同步**: 支持用户编辑状态的即时同步
- **健康检查**: 实现PING/PONG机制确保连接稳定性
- **断线重连**: 支持会话恢复和状态保持
- **消息类型处理**: 支持多种消息类型（身份识别、PDF变更、PDF事件、注释等）

### 2. Azure Blob Storage集成

系统深度集成了Azure Blob Storage服务，实现以下功能：

- **模板管理**: 存储和管理PDF模板
- **学生文档管理**: 按学生ID组织文件夹结构
- **SAS令牌授权**: 使用共享访问签名实现安全访问控制
- **文件复制与处理**: 实现模板复制和动态文件生成
- **预签名URL**: 为前端提供安全的直接访问链接

### 3. PDF生成与处理系统

使用iText库实现了强大的PDF处理功能：

- **动态表格生成**: 根据学生数据动态生成表格
- **条件样式**: 根据数据内容动态调整单元格样式（如NYS状态标红）
- **区域化适配**: 根据州代码（如VIC、NSW）调整表格结构
- **图像集成**: 支持在PDF中嵌入图像（如公司Logo）
- **数据格式化**: 自动格式化和验证数据

### 4. Power Automate集成

系统与Microsoft Power Automate无缝集成，实现工作流自动化：

- **数据推送**: 将数据发送至Power Automate进行后续处理
- **文档上传**: 支持PDF文档直接上传至Power Automate
- **培训师可用性查询**: 自动获取培训师SOT列表
- **位置信息获取**: 实时获取培训地点信息
- **配置同步**: 支持从Power Automate获取系统配置

### 5. 安全与认证

实现了完善的安全机制：

- **JWT认证**: 使用JSON Web Token实现无状态认证
- **Spring Security**: 提供全面的安全框架
- **角色权限控制**: 基于角色的访问控制系统
- **请求验证**: 使用Spring Validation进行请求数据验证
- **CORS配置**: 处理跨域资源共享

## 主要功能模块

### 1. 考勤表管理
- 生成规范化考勤表PDF
- 支持学生出勤状态记录
- 电子签名与验证
- 条件格式化（自动标记异常）
- 培训完成状态追踪

### 2. 场地检查系统
- 场地信息获取与管理
- 场地状态记录
- 问题追踪与报告

### 3. PDF协作编辑
- 多用户同时编辑
- 实时状态同步
- 字段级权限控制
- 编辑冲突处理
- 断线重连机制

### 4. Power Automate集成
- 数据收集与推送
- 文档自动化处理
- 培训师排期管理
- 通知与提醒服务

## 系统架构

项目采用典型的Spring Boot MVC架构，主要包含以下层次：

1. **控制器层(Controller)**: 处理HTTP请求，提供RESTful API
2. **服务层(Service)**: 实现业务逻辑
3. **数据访问层**: 通过Azure Blob Storage和其他存储服务访问数据
4. **WebSocket服务**: 提供实时通信功能
5. **安全层**: 处理认证和授权
6. **工具类**: 提供通用功能支持

## 部署与运行环境

- **云平台**: 部署于Azure云服务
- **运行时**: Java 17运行环境
- **容器化**: 支持容器化部署
- **CI/CD**: 通过脚本支持自动部署

## 总结

该项目展示了一个完整的企业级应用后端实现，集成了现代化的Java技术栈和Microsoft云服务生态系统。系统通过WebSocket实现实时协作，通过Azure Blob Storage实现云存储，通过iText实现PDF处理，并与Power Automate无缝集成，为培训机构提供了全面的数字化解决方案。

项目的亮点在于实现了复杂业务逻辑的模块化处理、实时协作、云存储集成以及文档生成与管理，为用户提供了高效、可靠的培训管理服务。系统架构设计良好，具有可扩展性和可维护性，适合未来功能的持续扩展和优化。 
`,

    'whispering-cards': `
# 呓语之牌 (Whispering Cards) - 技术栈概述

## (目前只完成创作者建立卡牌部分和google登陆)

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
- **用户**: 注册用户和匿名用户
- **卡牌**: 游戏卡牌，具有名称、描述、图像等属性
- **旧神**: 与特定卡牌关联的神明
- **卡牌实例**: 用户拥有的具体卡牌
- **剧本**: 互动剧本的基本单位
- **剧本版本**: 剧本的不同版本
- **效果实现**: 卡牌效果的具体实现

## 创作者功能

已完成的创作者部分包括:
- 卡牌创建和编辑界面
- 卡牌图像上传和管理
- 卡牌分类和属性设置
- 通过Supabase存储卡牌图像和数据

## 架构特点

1. **服务端渲染**: 使用Next.js App Router实现高效的服务器渲染和客户端交互
2. **无服务器架构**: 所有后端逻辑通过API Routes实现，无需维护单独的服务器
3. **类型安全**: 使用TypeScript和Zod确保前后端之间的类型一致性
4. **模块化设计**: 业务逻辑与UI表现分离，提高代码可维护性
5. **云原生**: 充分利用Vercel和Supabase云服务能力

## 开发工具

- **包管理**: npm
- **代码规范**: ESLint, TypeScript
- **数据库工具**: Prisma Studio
- **开发环境**: TypeScript, Node.js

## 未来开发计划

1. 进一步完善创作者剧本蓝图生成系统
2. 开发创建和体验互动剧本的界面
3. 优化用户体验和性能
4. 增强AI内容生成能力
`,
    'ecommerce': `
# 全栈微服务架构项目概述

## 整体架构

本项目采用现代化微服务架构，基于Docker容器化部署，主要由以下核心组件构成：

1. **Next.js前端** - 面向用户的主站前端
2. **Vue前端** - 面向管理员的后台管理系统
3. **Spring Boot后端** - 统一的RESTful API服务
4. **Nginx** - 反向代理和负载均衡
5. **MySQL** - 关系型数据库
6. **Redis** - 缓存和会话管理

整体架构采用前后端分离设计，通过Docker Compose实现容器编排，确保组件间高内聚低耦合。

## 前端技术栈

### Next.js前端（主站）

- **技术栈**：Next.js 13+（React框架）、TypeScript、Tailwind CSS
- **特点**：
  - SSR（服务端渲染）和SSG（静态页面生成）混合模式，优化SEO和首屏加载速度
  - 基于React Server Components (RSC)的现代化架构
  - 完整的用户认证系统（NextAuth）
  - Stripe支付系统集成
  - 响应式设计，确保在各类设备上的良好体验

### Vue前端（后台）

- **技术栈**：Vue 3、Vite构建工具
- **特点**：
  - 使用Composition API编写，代码更简洁、可维护性更高
  - 单页应用（SPA）架构，优化后台操作体验
  - 模块化设计，便于功能扩展

## 后端技术栈

### Spring Boot后端

- **技术栈**：Spring Boot 3.2、Java 21、MyBatis-Plus
- **核心功能**：
  - RESTful API设计
  - 基于Sa-Token的统一认证授权系统
  - Redis用于缓存和会话管理
  - Stripe支付API集成
  - 文件上传下载服务
  - 邮件发送功能
  - 接口限流保护

## 部署与运维

### Nginx反向代理

- **功能**：
  - 统一路由分发
  - HTTP强制跳转HTTPS
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

1. **微服务架构**：采用现代化微服务架构设计，组件职责明确，便于独立开发、测试和部署。

2. **全栈技术选型**：
   - 前端使用Next.js和Vue两大主流框架，针对不同用户场景优化
   - 后端使用最新版Spring Boot 3.2，充分利用Java 21新特性
   - 数据层使用MySQL 8与Redis 6.2，提供持久化存储和高性能缓存

3. **性能优化**：
   - Next.js实现SSR/SSG混合渲染，提升首屏加载速度和SEO表现
   - Nginx配置详细缓存策略，减轻服务器负担
   - Spring Boot后端接口限流保护，提高系统稳定性

4. **安全性**：
   - 强制HTTPS访问
   - 使用JWT和Sa-Token的安全认证
   - 严格的跨域策略和安全头
   - 敏感信息通过环境变量注入，不硬编码在代码中

5. **可扩展性**：
   - 容器化部署支持水平扩展
   - 模块化设计便于功能迭代
   - 服务间通过API通信，降低耦合度

6. **开发体验**：
   - 支持热重载，提高开发效率
   - 完整的构建脚本和部署流程
   - TypeScript类型检查，减少运行时错误

## 项目间通信流程

1. **用户访问流程**：
   - 用户通过浏览器访问网站
   - Nginx接收请求并根据域名将流量分发到对应的前端服务
   - Next.js/Vue前端处理UI渲染
   - 前端通过API调用Spring Boot后端服务
   - 后端处理业务逻辑并返回数据
   - 前端将数据展示给用户

2. **数据流**：
   - 前端通过API网关访问后端服务
   - 后端服务通过ORM框架操作数据库
   - 高频数据存储在Redis缓存中提高性能
   - 文件上传下载通过专门的接口处理

3. **认证与授权**：
   - 主站用户通过NextAuth登录（支持社交账号登录）
   - 后台通过Sa-Token实现认证和权限控制
   - 前后端通信使用JWT令牌验证

## 总结

本项目使用行业领先的技术栈和架构设计，实现了高性能、高可用、可扩展的全栈应用。通过Docker容器化实现一键部署和环境一致性，Nginx反向代理提供统一访问入口和安全保障。前端采用针对不同场景优化的Next.js和Vue，后端Spring Boot提供稳定可靠的API服务，整体系统架构清晰、职责明确，具有良好的可维护性和可扩展性。
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