# VeloStock - Investor Promotion Deck

## Overview

VeloStock is an investor presentation/pitch deck application for a car dealership operational management SaaS platform. The application showcases a product that goes beyond traditional inventory management (like Boom/365) to provide comprehensive operational tools including vehicle tracking, CRM, financial management, task management, and AI-powered features.

The current implementation is a single-page presentation built with React, designed to pitch the VeloStock platform to investors. The platform itself would include 15 features: vehicles (Kanban, checklists, documents), cost approvals, sales/commissions, warranties, store observations, accounts payable/receivable, leads/CRM, follow-ups, AI tools (VeloBot, ad generation, pricing, coaching), dashboards/metrics, user permissions, settings, reports, documents, and custom checklists.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **UI Components**: shadcn/ui component library (new-york style) with Radix UI primitives
- **Animations**: Framer Motion for slide transitions and effects
- **Charts**: Recharts for data visualization
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints under `/api` prefix
- **Storage**: Abstracted storage interface (currently in-memory, PostgreSQL-ready)
- **Session Management**: Express session with connect-pg-simple for PostgreSQL sessions

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` - shared between client and server
- **Validation**: Zod with drizzle-zod integration
- **Migrations**: Drizzle Kit with `db:push` command

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/ui/  # shadcn/ui components
│   │   ├── pages/          # Route components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utilities and query client
├── server/           # Express backend
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data access layer
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared types and schemas
│   └── schema.ts     # Drizzle schema definitions
└── migrations/       # Database migrations
```

### Development vs Production
- **Development**: Vite dev server with HMR, proxied through Express
- **Production**: Static files served from `dist/public`, server bundled with esbuild

## External Dependencies

### Database
- **PostgreSQL**: Primary database (requires `DATABASE_URL` environment variable)
- **Drizzle ORM**: Database queries and schema management
- **connect-pg-simple**: PostgreSQL session store

### UI Libraries
- **Radix UI**: Accessible component primitives (dialog, dropdown, tabs, etc.)
- **Recharts**: Chart components for data visualization
- **Embla Carousel**: Carousel functionality
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

### Build & Development
- **Vite**: Frontend build tool and dev server
- **esbuild**: Server bundling for production
- **TypeScript**: Type checking across the stack
- **Tailwind CSS**: Utility-first CSS framework

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay in development
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development indicator