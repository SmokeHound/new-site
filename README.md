# Admin Dashboard

A modern admin dashboard built with React frontend, Node.js backend, and PostgreSQL database in a monorepo structure.

## Features

- **Dark Theme UI**: Modern dark interface with Material-UI components
- **Responsive Layout**: Works on desktop and mobile devices
- **Navigation**: Dark sidebar with routing to different sections:
  - Dashboard - Overview with statistics cards
  - Orders - Order management table
  - Users - User management with avatars and status
  - Analytics - Charts and analytics (placeholder)
  - Settings - Application settings

## Architecture

- **Frontend**: React 18 + TypeScript + Material-UI + React Router
- **Backend**: Node.js + Express + TypeScript
- **Database**: PostgreSQL with sample schema
- **Development**: Monorepo with npm workspaces

## Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL (optional, using Docker)

### Installation
```bash
# Install dependencies
npm install

# Start database (optional)
cd database && docker-compose up -d

# Start development servers (both frontend and backend)
npm run dev
```

### Individual Services
```bash
# Frontend only (http://localhost:3000)
npm run dev:frontend

# Backend only (http://localhost:5000)
npm run dev:backend
```

### Production Build
```bash
# Build all packages
npm run build

# Start production server
npm start
```

## Project Structure

```
├── packages/
│   ├── frontend/          # React application
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   └── theme/
│   │   └── package.json
│   └── backend/           # Node.js API server
│       ├── src/
│       └── package.json
├── database/              # PostgreSQL schema and Docker setup
│   ├── schema.sql
│   └── docker-compose.yml
└── package.json          # Root package with workspace config
```

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/dashboard/stats` - Dashboard statistics
- `GET /api/users` - User list
- `GET /api/orders` - Order list

## Screenshot

![Admin Dashboard](https://github.com/user-attachments/assets/8720beae-7d49-4511-8727-a3ccc5f747d7)

The dashboard features:
- Dark AppBar with title and theme toggle
- Dark Sidebar with navigation items
- Main content area with responsive layout
- Statistics cards with icons and colors
- Data tables for orders and users