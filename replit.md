# Overview

This is a modern blog application for Beaverly Innovative Systems, a fintech AI startup. The blog serves as the official platform for sharing insights about AI trading, automated investing, and financial technology innovations. Built as a pure static React application, it provides a clean, production-ready blogging platform with dark theme aesthetics and modern UI components that can be deployed anywhere without backend requirements.

# User Preferences

Preferred communication style: Simple, everyday language.
Brand Identity: Sophisticated black and white minimalist design inspired by the Beaverly logo (rounded square black/white design).

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with pages for blog home, individual posts, about, and contact
- **UI Framework**: Tailwind CSS with shadcn/ui component library providing consistent, accessible design components
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds
- **Theme**: Dark-first design with Inter font, following modern fintech aesthetics

## Static Architecture
- **Data Management**: Static blog posts defined in TypeScript arrays
- **Content Structure**: Blog posts with id, slug, title, description, content, author, publication date, and tags
- **Type Safety**: TypeScript interfaces for runtime type checking
- **No Backend Required**: Pure static deployment compatible with any hosting platform

## Development Workflow
- **Development Server**: Vite dev server with hot module replacement and Express API proxy
- **Production Build**: Static asset generation with server-side rendering capabilities
- **TypeScript Configuration**: Strict mode enabled with path aliases for clean imports

## Content Management
- **Markdown Support**: Custom markdown renderer for blog content with support for headers, links, code blocks, and lists
- **SEO Optimization**: Dynamic meta tag management for each page with Open Graph and Twitter Card support
- **Sample Content**: Pre-loaded with AI trading and fintech content including "How Chilla Works" article

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Query for frontend state management
- **Database**: Neon Database (PostgreSQL) with Drizzle ORM for database operations (development only)
- **UI Components**: Radix UI primitives with shadcn/ui component system for accessible design
- **Styling**: Tailwind CSS with PostCSS for utility-first styling

## Development Tools
- **Build System**: Vite with React plugin and TypeScript support
- **Code Quality**: TypeScript strict mode, ESNext modules
- **Development Experience**: Replit integration with runtime error overlay and development banner

## Production Services
- **Static Deployment**: Configured for Vercel, Netlify, and other static hosting platforms
- **Full-Stack Deployment**: Support for Node.js platforms like Railway, Render, Heroku
- **Performance**: CSS variables for theming, lazy loading, and optimized bundle splitting
- **Analytics**: Google Analytics 4 integration with measurement ID G-229WRH1KTN

## Third-Party Integrations
- **Analytics**: Google Analytics 4 for page views and event tracking
- **Social Media**: React Icons for social platform icons (Twitter, LinkedIn, Instagram)
- **Date Handling**: date-fns for consistent date formatting across the application
- **Form Handling**: React Hook Form with Zod resolvers for type-safe form validation

## Deployment Architecture
- **Hybrid API Strategy**: Environment-aware client that uses static data for deployment and API for development
- **Multi-Platform Support**: Configured for Vercel, Netlify, GitHub Pages, and other static hosts
- **Content Management**: Static blog posts with structured data for consistent performance
- **Analytics Integration**: Automatic page view tracking and custom event monitoring