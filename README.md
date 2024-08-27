# Teams and Persons API

This project is a REST API built with Next.js that manages teams and persons. It serves as a demonstration of building a simple API with integration tests.

## Features

- **Teams API:**
    - Create, retrieve, update, and delete teams.
- **Persons API:**
    - Create, retrieve, update, and delete persons.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   The API will be accessible at `http://localhost:3000`.

## Running Tests

To run the integration tests, use the following command:

```bash
npm run test
```

## API Endpoints

### Teams

- **GET /api/teams:** Get all teams.
- **POST /api/teams:** Create a new team.
- **GET /api/teams/[id]:** Get a team by ID.
- **PATCH /api/teams/[id]:** Update a team by ID.
- **DELETE /api/teams/[id]:** Delete a team by ID.

### Persons

- **GET /api/persons:** Get all persons.
- **POST /api/persons:** Create a new person.
- **GET /api/persons/[id]:** Get a person by ID.
- **PATCH /api/persons/[id]:** Update a person by ID.
- **DELETE /api/persons/[id]:** Delete a person by ID.
