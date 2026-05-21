# Backend Training Tasks

## Project Overview
This project contains backend training tasks implemented using Node.js and Express.js.

---

# Day 1 - Introduction to Backend & Node.js

## Objective
Create a simple Node.js application and print a message in the console.

## Concepts Covered
- Backend basics
- Node.js runtime
- Project initialization using npm

## File Used
- app.js

## Execution
```bash
node app.js
```

## Output
```bash
Backend training started successfully!
```

---

# Day 2 - Node.js Modules & File System

## Objective
Create, write, and read a file using the fs module.

## Concepts Covered
- Core modules
- fs module
- File handling operations
- Asynchronous callbacks

## Files Used
- fileSystem.js
- sample.txt

## Execution
```bash
node fileSystem.js
```

## Output
```bash
File created and data written successfully.
File content:
Hello from Node.js File System Module!
```

---

# Day 3 - HTTP Module

## Objective
Create a basic HTTP server and handle requests and responses.

## Concepts Covered
- HTTP module
- Server creation
- Request handling
- Response handling
- Port listening

## File Used
- server.js

## Execution
```bash
node server.js
```

## Output
```bash
Server is running on http://localhost:3000
```

---

# Day 4 - Introduction to Express.js

## Objective
Create a basic Express.js server with a root endpoint.

## Concepts Covered
- Express.js framework
- Express server setup
- Root endpoint handling

## File Used
- expressServer.js

## Execution
```bash
node expressServer.js
```

OR

```bash
npm run express
```

## Output
```bash
Express server running on http://localhost:3000
```

---

# Day 5 - Routing in Express

## Objective
Create product-related routes using Express.js.

## Concepts Covered
- Routing
- GET requests
- Route parameters
- JSON responses
- Status codes

## File Used
- productRoutes.js

## Routes Implemented

### Get All Products
```http
GET /products
```

### Get Product By ID
```http
GET /products/:id
```

## Execution
```bash
node productRoutes.js
```

## Example Response

### Get All Products
```json
[
  { "id": 1, "name": "Laptop" },
  { "id": 2, "name": "Mobile" },
  { "id": 3, "name": "Headphones" }
]
```

### Get Product By ID
```json
{
  "id": 1,
  "name": "Laptop"
}
```

---

# Technologies Used

- Node.js
- Express.js
- JavaScript

---
---

# Day 6 - Middleware

## Objective
Implement a custom logging middleware for request tracking.

## Concepts Covered
- Middleware
- Request lifecycle
- Custom middleware creation
- Request logging
- next() function

## File Used
- middlewareServer.js

## Execution
```bash
node middlewareServer.js
```

## Output
```bash
Server running on http://localhost:3000
GET request received for /
```

---

# Day 7 - Mini Project (Product API)

## Objective
Build a simple Product API without database integration.

## Concepts Covered
- REST API basics
- GET request
- POST request
- JSON handling
- Express middleware
- API response handling

## File Used
- miniProductAPI.js

## Endpoints Implemented

### Get All Products
```http
GET /products
```

### Add New Product
```http
POST /products
```

## Execution
```bash
node miniProductAPI.js
```

## Example GET Response
```json
[
  { "id": 1, "name": "Laptop" },
  { "id": 2, "name": "Mobile" }
]
```

## Example POST Request
```json
{
  "name": "Keyboard"
}
```

## Example POST Response
```json
{
  "message": "Product added successfully",
  "product": {
    "id": 3,
    "name": "Keyboard"
  }
}
```

---

# Author

Harish Kumar
