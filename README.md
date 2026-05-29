# Backend Training Tasks

## Project Overview
This project contains backend training tasks implemented using Node.js, Express.js, MongoDB, Mongoose, JWT Authentication, and REST APIs.

---

# Day 1 - Introduction to Backend & Node.js

## Objective
Create a simple Node.js application and print a message in the console.

## Concepts Covered
- Backend basics
- Node.js runtime
- npm initialization

## File Used
- app.js

## Execution

```bash
node app.js
```

---

# Day 2 - Node.js Modules & File System

## Objective
Create, write, and read a file using Node.js fs module.

## Concepts Covered
- File System module
- File handling
- Read/Write operations

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
Create a basic Express.js server.

## Concepts Covered
- Express framework
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
- JSON response handling

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
- GET and POST methods
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
- NoSQL concepts
- Collections
- Documents
- MongoDB shell

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
Create Product schema using Mongoose.

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

# Day 10 - CRUD Operations

## Objective
Implement CRUD APIs for products.

## Concepts Covered
- Create API
- Read API
- Update API
- Delete API

## File Used
- crudProductAPI.js

## Routes

### Create Product

```http
POST /products
```

### Get Products

```http
GET /products
```

### Update Product

```http
PUT /products/:id
```

### Delete Product

```http
DELETE /products/:id
```

## Execution

```bash
node crudProductAPI.js
```

---

# Day 11 - User Module

## Objective
Create user schema and model.

## Concepts Covered
- User schema design
- Model creation
- Required fields

## File Used
- userModel.js

## Execution

```bash
node userModel.js
```

---

# Day 12 - Authentication

## Objective
Implement user registration and login APIs using bcrypt.

## Concepts Covered
- Password hashing
- User authentication
- bcryptjs

## File Used
- authServer.js

## Routes

### Register User

```http
POST /register
```

### Login User

```http
POST /login
```

## Execution

```bash
node authServer.js
```

---

# Day 13 - JWT Authentication

## Objective
Implement JWT authentication and secure routes.

## Concepts Covered
- JWT token generation
- Middleware authentication
- Protected routes

## File Used
- jwtAuthServer.js

## Routes

### Login and Generate Token

```http
POST /login
```

### Protected Route

```http
GET /protected
```

## Execution

```bash
node jwtAuthServer.js
```

---

# Day 14 - Mini Project

## Deliverable
Complete backend mini project with:
- Product CRUD APIs
- MongoDB integration
- User authentication
- JWT security
- Protected routes

## Features
- Express.js server
- MongoDB database
- Mongoose models
- bcrypt password hashing
- JWT authentication
- REST APIs

---

# Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- JSON Web Token (JWT)
- JavaScript

---

# Author

Harish Kumar