# Shopping Cart Backend

This backend provides the API for a simple e-commerce workflow.

## Core Flow

1. User signs up
2. User logs in (single active session enforced)
3. User adds items to cart
4. Cart is converted into an order
5. User can view order history

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs

---

## Key Features

### 1. Single-Device Login
- Each user has only one active token
- Token stored in database
- Login blocked if token already exists
- Token cleared on logout

### 2. Cart Logic
- One cart per user
- Items added by clicking on item
- Quantity handled by counting duplicate items

### 3. Order Logic
- Cart converted into order
- Items copied into order
- Cart cleared after checkout

---

## API Endpoints

### Users
- POST `/users` → Register
- POST `/users/login` → Login
- POST `/users/logout` → Logout

### Items
- POST `/items` → Create item
- GET `/items` → List items

### Cart (Protected)
- POST `/carts` → Add item to cart
- GET `/carts` → Get user cart

### Orders (Protected)
- POST `/orders` → Checkout
- GET `/orders` → Order history

---

## Security Design

- Passwords hashed using bcrypt
- JWT used for authentication
- Middleware validates token against DB
- Prevents multiple simultaneous logins
