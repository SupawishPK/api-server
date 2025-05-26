# Backend API Server

A TypeScript-based REST API server with Express.js, Prisma ORM, and OpenID Connect authentication.

## Features

- Express.js with TypeScript
- OpenID Connect (OIDC) Authentication
- PostgreSQL Database with Prisma ORM
- User and Post Resources with CRUD Operations
- Docker Support
- Error Handling
- CORS Enabled

## Prerequisites

- Node.js 18 or higher
- PostgreSQL database
- Docker (optional)

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=3000
NODE_ENV=development

# Auth0 Configuration
ISSUER_BASE_URL=https://dev-yg.us.auth0.com
CLIENT_ID=H9F6QG5SzTKMv0tbmgxLj9LjG1EKVllA
BASE_URL=http://localhost:3000
SECRET=your-random-string-here

# Database Configuration
DATABASE_URL="postgresql://postgres:password@localhost:5432/assignment_db"
```

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Generate Prisma client:
   ```bash
   npx prisma generate
   ```

3. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

## Seed

```bash
   npx prisma db seed
```

## Development

Start the development server:
```bash
npm run dev
```

## Production

Build and start the production server:
```bash
npm run build
npm start
```

## Docker

Build and run with Docker:
```bash
docker build -t backend-api .
docker run -p 3000:3000 backend-api
```

## API Endpoints

### Users
- GET /users - List all users
- GET /users/:id - Get user by ID
- POST /users - Create user
- PUT /users/:id - Update user
- PATCH /users/:id - Patch user
- DELETE /users/:id - Delete user

### Posts
- GET /posts - List all posts
- GET /posts/:id - Get post by ID
- POST /posts - Create post
- PUT /posts/:id - Update post
- PATCH /posts/:id - Patch post
- DELETE /posts/:id - Delete post

## Authentication

The API uses OpenID Connect (OIDC) for authentication. All routes require a valid Bearer token.

Test user credentials:
- Email: candidate@test.com
- Password: @password1234 