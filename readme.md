# Adonis.js Project Setup and Migration Guide

This guide provides step-by-step instructions on setting up an Adonis.js project and running migrations. Adonis.js is a Node.js framework for building server-side applications.

## Prerequisites

Before getting started, ensure that you have the following installed on your machine:

- Node.js (v12 or later)
- npm (Node Package Manager)

## Project Setup

1. Clone the repository or create a new directory for your project:

   ```bash
   $ git clone <repository-url>
   $ cd <project-directory>
   ```

2. Install the project dependencies:

   ```bash
    $ npm install
    ```
3. Create a `.env` file in the root directory of your project and copy the contents of `.env.example` into it. Update the values of the environment variables in the `.env` file to match your local environment.

4. Generate an application key:

   ```bash
   $ node ace generate:key
   ```

5. Run the application:

   ```bash
    $ node ace serve --watch
    ```

## Running Migrations

1. Create a database for your project and update the `DB_CONNECTION` environment variable in the `.env` file with the name of the database.

2. Run the migrations:

   ```bash
   $ node ace migration:run
   ```

### API ENDPOINTS
https://bitspeed-production.up.railway.app/identify


