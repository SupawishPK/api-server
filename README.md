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

## SQL Server

```bash
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=supawish@1" -p 1433:1433 --name sql_server -h sql_server -d mcr.microsoft.com/azure-sql-edge
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
bun run dev
```

## Production

Build and start the production server:

```bash
bun run build
bun start
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
