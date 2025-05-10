# Distributed Architecture - Management System

This project implements a distributed architecture with multiple independent services that interact with each other. The application includes a user service, a product service, and an API Gateway that acts as an entry point for clients.

---

## Services

### 1. User Service
- **Port**: `3001`
- **Description**: Manages the system's users.
- **Endpoints**:
- `GET /`: Gets all users.
- `POST /`: Creates a new user.

### 2. Product Service
- **Port**: `3003`
- **Description**: Manages the products available in the system.
- **Endpoints**:
- `GET /`: Gets all products.
- `POST /`: Creates a new product.

### 3. API Gateway
- **Port**: `3000`
- **Description**: Acts as an entry point for clients and routes requests to the appropriate services.
- **Endpoints**:
- `GET /users`: Gets all users (via the User Service).
- `POST /users`: Creates a new user (via the User Service).
- `GET /products`: Gets all products (via the Product Service).
- `POST /products`: Creates a new product (via the Product Service).

### 4. MongoDB
- **Port**: `27017`
- **Description**: Database used to store user and product data.

---

## Requirements

- **Docker**: Make sure you have Docker and Docker Compose installed on your machine.
- **Postman** (optional): To test the endpoints.

---

## Configuration

1. Clone this repository:
```bash
git clone <REPOSITORY_URL>
cd Distributed Architecture

2. Build and deploy the containers:
docker-compose up --build

3. Verify that the services are running:

docker ps

## Usage
## Testing services with Postman
## User Service
## Get users:
## Method: GET
## URL: http://localhost:3001/
## Create user:
## Method: POST
## URL: http://localhost:3001/
## Body (JSON):

{
"name": "John Doe",
"email": "john.doe@example.com"
}

## Product Service
## Get products:
## Method: GET
## URL: http://localhost:3003/
## Create product:
## Method: POST
## URL: http://localhost:3003/
## Body (JSON):

{
"name": "Laptop",
"price": 1200
}

## API Gateway
## Get users:
## Method: GET
## URL: http://localhost:3000/users
## Create user:
## Method: POST
## URL: http://localhost:3000/users
## Body (JSON):

{
"name": "Ana Gómez",
"email": "ana.gomez@example.com"
}

## Get products:
## Method: GET
## URL: http://localhost:3000/products
## Create product:
## Method: POST
## URL: http://localhost:3000/products
## Body (JSON):

{
"name": "Smartphone",
"price": 800
}

## Shutdown Services
## To stop and remove containers, run:

## docker-compose down

## Notes
## Make sure port 27017 (MongoDB) is not being used by another process.
## If you need to clean up MongoDB data, remove the volumes with: docker-compose down --volumes