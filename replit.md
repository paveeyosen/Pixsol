# Overview

PIX GPX is a professional software development company website built as a modern single-page application showcasing comprehensive technology services. The website features a clean, responsive design with sections for services, industries served, portfolio, company information, and a working contact form. Built with React and TypeScript on the frontend with an Express.js backend, the application demonstrates modern web development practices with a focus on user experience and professional presentation.

# Recent Changes (January 2025)

✓ **Complete Website Build**: Built a fully functional professional software development company website from scratch
✓ **Modern Design System**: Implemented gradient themes, smooth animations, and responsive design with TailwindCSS
✓ **Navigation System**: Created fixed navigation with smooth scrolling and mobile-friendly hamburger menu
✓ **Hero Section**: Professional landing area with call-to-action buttons and compelling messaging
✓ **Services Showcase**: Comprehensive display of 6 core services including web development, mobile apps, custom software, graphic design, domain & hosting, and consulting
✓ **Industries Section**: Targeted industry solutions for Manufacturing, Healthcare, Retail, Education, Real Estate, and Freelance
✓ **Portfolio Display**: Professional project showcases with technology stacks and descriptions
✓ **About Section**: Company information with statistics and professional imagery
✓ **Working Contact Form**: Fully functional contact form with backend processing, validation, and user feedback
✓ **Footer**: Complete footer with navigation links and social media integration

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for build tooling
- **Styling**: TailwindCSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe forms

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database Layer**: Drizzle ORM configured for PostgreSQL with schema definitions
- **Storage Strategy**: Currently using in-memory storage with interface design for easy database migration
- **API Design**: RESTful endpoints with proper error handling and validation
- **Development Setup**: Hot reloading with Vite integration for seamless development experience

## Database Schema
- **Users Table**: Basic user authentication structure with username/password
- **Contact Submissions**: Form data capture with validation for business inquiries
- **Migration Strategy**: Drizzle Kit for schema migrations and database management

## Component Organization
- **Page Components**: Single home page with modular section components
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives
- **Layout Strategy**: Responsive design with mobile-first approach and smooth scrolling navigation
- **Asset Management**: External image hosting with Unsplash integration for professional imagery

## Development Workflow
- **Build Process**: Vite for frontend bundling, esbuild for backend compilation
- **Type Safety**: Full TypeScript implementation with shared schema types
- **Code Organization**: Monorepo structure with shared types and clear separation of concerns

# External Dependencies

## Core Technologies
- **Database**: PostgreSQL with Neon serverless hosting
- **ORM**: Drizzle ORM for type-safe database operations
- **UI Framework**: Radix UI primitives for accessible component foundation
- **Styling**: TailwindCSS for utility-first styling approach

## External Services
- **Image Hosting**: Unsplash API for professional stock photography
- **Font Services**: Google Fonts (Inter family) for typography
- **Icon Library**: Font Awesome 6 for comprehensive icon coverage
- **Development Tools**: Replit integration for cloud development environment

## Build and Deployment
- **Package Manager**: npm with lockfile for dependency management
- **Development Server**: Vite dev server with HMR and Express.js backend
- **Production Build**: Static asset generation with Express.js server compilation
- **Environment**: Designed for serverless deployment with environment variable configuration