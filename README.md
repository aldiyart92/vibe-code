# vibe-code

A modern backend setup with **Bun**, **ElysiaJS**, **Drizzle ORM**, and **MySQL**.

## Prerequisites
- [Bun](https://bun.sh) (v1.0+)
- MySQL Server

## Setup

1. **Install dependencies**:
   ```bash
   bun install
   ```

2. **Configure environment**:
   Copy `.env.example` to `.env` and fill in your MySQL credentials:
   ```bash
   cp .env.example .env
   ```

3. **Database migrations**:
   - Generate migration files:
     ```bash
     bun run db:generate
     ```
   - Apply migrations to database:
     ```bash
     bun run db:migrate
     ```
   - Launch Drizzle Studio (web UI):
     ```bash
     bun run db:studio
     ```

4. **Start Development Server**:
   ```bash
   bun run dev
   ```

Server will run at [http://localhost:3000](http://localhost:3000).

## Endpoints

- `GET /` — Health check endpoint
- `GET /users` — Fetch users from database
