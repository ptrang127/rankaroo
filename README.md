![title](./src/assets/rankaroo.png "Rankaroo")

RESTful API built using Node.js and TypeScript with the Express framework. It serves as the backend for Rankaroo, a web application that allows users to rank different subjects. Leveraging Express, the API efficiently handles HTTP requests and responses, enalbing communication between the frontend and backend. With TypeScript, the codebase benefits from static typing, enhancing code reliability and maintainability. The backend provides endpoints for CRUD operations on categories, subjects, and comparisons.

## Getting Started

1. Clone the repository

```
git clone https://github.com/ptrang127/rankaroo.git
```
2. Install packages
```
npm i
```
3. [Set up database](#database-setup)

4. Run the database migration (requires local PostgreSQL server)
```
npm run migrate
```
5. Start the server
```
npm run dev
```

## Database Setup
Rankaroo leverages PostgreSQL as its primary database management system to store and manage data efficiently. To get PostgreSQL running locally, download [PostgreSQL](https://www.postgresql.org/download/) server and your preferred database management tool.

Create a local database with the following configuration:
```
host: localhost
database: rankaroo
user: postgres
password: password
port: 5432
```

Rankaroo uses [Knex](https://knexjs.org/) for the database connection and query building.

## Available Scripts

### `npm run dev`

Run the server in development mode.

### `npm run migrate`

Migrate local database.

### `npm run lint`

Check for linting errors.

### `npm run build`

Build the project for production.

### `npm start`

Run the production build (Must be built first).

### `npm start -- --env="name of env file" (default is production).`

Run production build with a different env file.


## Additional Notes
- This project was created with [express-generator-typescript](https://github.com/seanpmaxwell/express-generator-typescript).

- If `npm run dev` gives you issues with bcrypt on MacOS you may need to run: `npm rebuild bcrypt --build-from-source`. 
