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
# Week 3 - eCommerce Backend Development

## Goal
Develop a scalable eCommerce backend system using Node.js, Express.js, MongoDB, and Mongoose.

---

## Project Structure

```text
backend-task/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── categoryController.js
│   └── productController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── category.js
│   ├── product.js
│   └── user.js
│
├── routes/
│   ├── categoryRoutes.js
│   └── productRoutes.js
│
├── app.js
├── package.json
└── README.md
```

---

# Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

---

# Day 15 - Project Architecture

Created a scalable folder structure:

- controllers/
- models/
- routes/
- middleware/
- config/

---

# Day 16 - Categories Module

## Create Category

### POST /categories

Request:

```json
{
  "name": "Laptops"
}
```

Response:

```json
{
  "_id": "category_id",
  "name": "Laptops"
}
```

---

## Get Categories

### GET /categories

Response:

```json
[
  {
    "_id": "category_id",
    "name": "Laptops"
  }
]
```

---

# Day 17 - Product Module Enhancement

## Product Model

```javascript
{
  name: String,
  price: Number,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  }
}
```

---

## Create Product

### POST /products

Request:

```json
{
  "name": "Laptop",
  "price": 50000,
  "category": "category_id"
}
```

Response:

```json
{
  "_id": "product_id",
  "name": "Laptop",
  "price": 50000
}
```

---

## Get Products

### GET /products

Response:

```json
[
  {
    "_id": "product_id",
    "name": "Laptop",
    "price": 50000,
    "category": {
      "_id": "category_id",
      "name": "Laptops"
    }
  }
]
```

---

# Pagination

### GET /products?page=1&limit=5

Example:

```http
GET http://localhost:3000/products?page=1&limit=5
```

Features:
- Page-wise product listing
- Limit number of records returned
- Better performance for large datasets

---

# Authentication Features

Implemented:

- User Registration
- User Login
- Password Hashing using bcryptjs
- JWT Token Generation
- Protected Routes using JWT Middleware

---

# Database Integration

MongoDB Atlas connected successfully using Mongoose.

Features:
- Categories Collection
- Products Collection
- Users Collection
- Relationship between Products and Categories

---

# Completed Tasks

## Week 2

- CRUD Operations
- User Model
- Authentication
- JWT Authentication
- Mini Project

## Week 3

### Day 15
- Project Architecture Setup

### Day 16
- Categories Module

### Day 17
- Product Module Enhancement
- Category Reference
- Pagination

---
# Day 18 - Cart Module

## Features
- Create Cart
- Get Cart
- User and Product References

## APIs

POST /cart
GET /cart

# Day 19 - Order Module

## Features
- Create Order
- Get Orders
- Order Schema with User and Products

# Day 20 - Role-Based Access Control (RBAC)

## Features
- User Roles (Admin / User)
- JWT Authentication with Role
- Admin-only Route Protection
- Middleware-based Authorization

## Role System
- user → can access cart, orders, and view products
- admin → can create, update, delete products

## Middleware
- authMiddleware → verifies JWT token
- adminMiddleware → checks user role and allows only admin access

## Protected Routes
- POST /products → Admin only
- GET /products → Public access

## Authentication Flow
- User logs in and receives JWT token
- Token contains user role (admin/user)
- Token is sent in request header:
  Authorization: Bearer <token>
- Middleware verifies token and role before allowing access

## Outcome
- Implemented Role-Based Access Control (RBAC)
- Secured admin-only routes
- Added middleware-based authorization system

## APIs

POST /order
GET /orders

# Run Project

Install dependencies:

```bash
npm install
```

Start server:

```bash
node app.js
```

Output:

```bash
MongoDB Connected
Server running on port 3000
```

---

# Author

Harish Kumar

Backend Training Tasks

