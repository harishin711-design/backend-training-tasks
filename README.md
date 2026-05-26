# Backend Training Tasks

## Project Overview
This project contains backend training tasks implemented using Node.js, Express.js, MongoDB, and Mongoose.

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

## Files Used
- fileSystem.js
- sample.txt

## Execution

```bash
node fileSystem.js
```

---

# Day 3 - HTTP Module

## Objective
Create a basic HTTP server.

## Concepts Covered
- HTTP module
- Request and response handling

## File Used
- server.js

## Execution

```bash
node server.js
```

---

# Day 4 - Introduction to Express.js

## Objective
Create a basic Express server with a root endpoint.

## Concepts Covered
- Express.js framework
- Server setup
- Routing basics

## File Used
- expressServer.js

## Execution

```bash
node expressServer.js
```

---

# Day 5 - Routing in Express

## Objective
Create product-related routes using Express.js.

## Concepts Covered
- GET routes
- Route parameters
- JSON responses

## File Used
- productRoutes.js

## Routes

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

---

# Day 6 - Middleware

## Objective
Implement custom middleware for request logging.

## Concepts Covered
- Middleware
- Request tracking
- next() function

## File Used
- middlewareServer.js

## Execution

```bash
node middlewareServer.js
```

---

# Day 7 - Mini Product API

## Objective
Build a simple Product API without database.

## Concepts Covered
- REST API basics
- GET method
- POST method
- JSON handling

## File Used
- miniProductAPI.js

## Routes

### Get Products

```http
GET /products
```

### Add Product

```http
POST /products
```

## Execution

```bash
node miniProductAPI.js
```

---

# Day 8 - MongoDB Basics

## Objective
Setup MongoDB and create ecommerce database.

## Concepts Covered
- NoSQL database
- Collections
- Documents
- MongoDB Shell

## Commands Used

```javascript
use ecommerce
```

```javascript
db.products.insertOne({
  name: "Laptop",
  price: 50000
})
```

```javascript
db.products.find()
```

---

# Day 9 - Mongoose

## Objective
Create a Product schema using Mongoose.

## Concepts Covered
- Mongoose
- Schema creation
- Model creation

## File Used
- productModel.js

## Execution

```bash
node productModel.js
```

---

# Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
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
# Day 8 - MongoDB Basics

## Objective
Setup MongoDB and create an ecommerce database.

## Concepts Covered
- NoSQL database
- Collections and documents
- MongoDB shell commands

## Commands Used

```bash
mongosh
use ecommerce
db.products.insertOne({
  name: "Laptop",
  price: 50000
})
db.products.find()
---

# Author

Harish Kumar
