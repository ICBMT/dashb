# Laravel Dashboard Setup

## Requirements

- PHP 8.3 or newer with Composer 2
- Node.js 22 or newer with npm
- SQLite with PHP PDO SQLite enabled (the default database), or another database configured in `.env`

## First-time setup

Run these commands from the repository root:

```bash
cd reactjs-dashboard
cp .env.example .env
```

For the default SQLite database, create the database file before running the setup script:

```bash
touch database/database.sqlite
```

If you are using a different database, update the `DB_*` settings in `.env` and create that database first. Then install dependencies, generate the application key, run migrations, and build the frontend:

```bash
composer setup
```

## Start the application

```bash
composer dev
```

Open the local URL shown in the terminal (usually `http://localhost:8000`).
