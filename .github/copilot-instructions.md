# Admin Dashboard - AI Coding Guide

## Project Architecture

This is a **monorepo admin dashboard** with React frontend, Node.js backend, and PostgreSQL database using npm workspaces.

### Key Structure
- **Root**: Workspace orchestration with `concurrently` for parallel dev servers
- **Frontend** (`packages/frontend/`): Create React App + Material-UI dark theme + React Router
- **Backend** (`packages/backend/`): Express.js with TypeScript, simple REST API with mock data
- **Database** (`database/`): PostgreSQL schema with Docker Compose setup

## Development Workflows

### Essential Commands (run from root)
```bash
# Start database first
cd database && docker-compose up -d

# Start both frontend and backend simultaneously
npm run dev

# Individual services
npm run dev:frontend  # http://localhost:3000
npm run dev:backend   # http://localhost:5000

# Production build all packages
npm run build

# Database management
cd database && docker-compose down  # Stop database
docker-compose logs postgres        # View database logs
```

### Package Management
- **Always install from root** using workspace syntax: `npm install package --workspace=packages/frontend`
- Dependencies are managed per package but coordinated through root workspace

## Code Patterns & Conventions

### Frontend (`packages/frontend/src/`)
- **Dark Theme Only**: Uses custom `darkTheme` from `theme/theme.ts` with Material-UI
- **Layout Pattern**: Single `Layout.tsx` component handles routing + responsive sidebar/AppBar
- **Page Structure**: Simple functional components in `pages/` directory, no complex state management
- **Navigation**: Route-based with Material-UI drawer, mobile-responsive with toggle
- **Component Style**: Material-UI `sx` prop for styling, no CSS modules

### Backend (`packages/backend/src/`)
- **Simple Express Setup**: Single `index.ts` file with all routes, no complex routing structure
- **Mock Data Pattern**: All API endpoints return hardcoded JSON responses (no database integration yet)
- **CORS Configuration**: Configured for `http://localhost:3000` frontend
- **API Structure**: RESTful endpoints under `/api/` prefix

### Database Integration
- **PostgreSQL Schema**: `database/schema.sql` defines complete schema with users, orders, analytics, settings
- **Docker Setup**: `docker-compose.yml` with PostgreSQL 15, auto-initialization from schema.sql
- **Environment Config**: `.env.example` shows DATABASE_URL format for connection
- **Ready for Connection**: Backend has `pg` dependency, currently uses mock data
- **Database Credentials**: admin/password@localhost:5432/admin_dashboard (Docker defaults)

## File Organization Rules

### Frontend Component Creation
- **Pages**: Add to `src/pages/` directory, export default React.FC
- **Components**: Add to `src/components/` with folder-per-component structure
- **Navigation**: Update `navigationItems` array in `Layout.tsx` for new routes

### Backend API Endpoints
- **Pattern**: Add routes directly in `src/index.ts` following `/api/resource` convention
- **Response Format**: Return JSON objects/arrays matching frontend expectations
- **Error Handling**: Basic Express error responses

### TypeScript Configuration
- **Backend**: CommonJS modules, ES2020 target, strict mode
- **Frontend**: ESNext modules, React JSX transform, Create React App defaults

## Integration Points

### Frontend-Backend Communication
- **Base URL**: Backend runs on port 5000, frontend on 3000
- **API Calls**: No API client library, use fetch() directly in components
- **CORS**: Pre-configured for localhost development

### PostgreSQL Connection Setup
- **Start Database**: `cd database && docker-compose up -d` (creates admin_dashboard DB)
- **Environment**: Copy `.env.example` to `.env` in `packages/backend/`
- **Connection Pattern**: Use `pg.Pool` for connection pooling in backend
- **Schema Auto-Init**: Docker automatically runs `schema.sql` on first start
- **Current State**: Backend uses mock data, ready for `pg` integration
- **Sample Data**: Database schema includes INSERT statements for testing

## Database Connection Implementation

### Setting Up PostgreSQL Connection
1. **Start Database**: `cd database && docker-compose up -d`
2. **Environment Setup**: Copy `packages/backend/.env.example` to `packages/backend/.env`
3. **Connection Pool**: Create `pg.Pool` instance in backend using `DATABASE_URL`
4. **Replace Mock Data**: Swap hardcoded responses with actual database queries
5. **Error Handling**: Add proper database error handling and connection retry logic

### Query Patterns
- **Connection**: Use connection pooling with `pg.Pool` for concurrent requests
- **Queries**: Use parameterized queries to prevent SQL injection
- **Transactions**: Implement transactions for multi-table operations
- **Schema**: Follow existing table structure in `database/schema.sql`

## Critical Patterns to Follow

1. **Monorepo Workspace Commands**: Always use `npm run command --workspace=packages/package-name`
2. **Material-UI Dark Theme**: All new components must use the established dark theme
3. **Responsive Design**: Follow Layout.tsx pattern for mobile/desktop breakpoints
4. **API Endpoint Pattern**: Keep simple REST structure in single backend file
5. **Mock Data Consistency**: Ensure backend mock responses match expected frontend data structures