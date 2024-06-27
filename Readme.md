# Best Movie of All Time App

## Overview

This CRUD application manages a list of movies using Node.js, Express, MongoDB, and integration with TMDB API. The application allows importing data from a CSV file, interacting with external APIs, and caching responses to optimize performance.

## Features

- Import movie data from CSV into MongoDB.
- CRUD operations for managing movies.
- Integration with TMDB API to fetch additional movie details.
- Caching mechanism to reduce external API calls.
- Dockerized for easy deployment.

## Setup

### Prerequisites

- Docker
- Docker Compose
- Node.js (for development)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/mahmoudShokry94/Movie-of-All-Time-App
   cd Movie-of-All-Time-App

2. Create a .env file with the following content:
      ```
      MONGO_URL=mongodb://mongo:27017/bestmovieapp
      TMDB_API_KEY=<YOUR_TMDB_API_KEY>
      JWT_SECRET=<YOUR_JWT_SECRET>

3. Build and run the application using Docker Compose:
   ```
   docker-compose up --build
   ```
The application will be available at http://localhost:8080.

### API Documentation
      
   * Available at http://127.0.0.1:8080/api-docs

### Project Structure
         /Movie-of-All-Time-App
      ├── adapter
      ├── controllers
      ├── services
      └── repositories
      ├── models
      ├── tests
      ├── utils
      ├── seeder
      ├── Dockerfile
      ├── docker-compose.yml
      ├── app.js
      ├── package.json
      └── .env

   * <b><b>adapter</b>:</b> Adapter responsible for conncecting with DB.
   * <b><b>controllers</b>:</b> Validate API Requests.
   * <b>services/</b>: Handles business logic for routes.
   * <b>repositories/</b>: External API integrations.
   * <b>models/</b>: Defines MongoDB schemas.
   * <b>tests/</b>: Unit tests using Jest.
   * <b>utils/</b>: Utility functions (e.g., CSV import).
   * <b>seeder/</b>: Seeding Functions.
   * <b>Dockerfile</b>: Docker configuration for building the app image.
   * <b>docker-compose.yml</b>: Docker Compose configuration for multi-container setup.
   * <b>app.js</b>: Entry point of the application.
   * <b>package.json</b>: Node.js dependencies and scripts.
   * <b>.env</b>: Environment variables configuration.
### Technologies Used
   1. Node.js
   2. Express
   3. MongoDB
   4. Mongoose
   5. TMDB API for movie data
   6. Docker