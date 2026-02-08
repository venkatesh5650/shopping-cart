# Shopping Cart Application

This project implements a simple e-commerce flow:

User → Login → Add Items to Cart → Checkout → Order History

It was built as part of a Full Stack Intern assignment, focusing on:
- Clean backend architecture
- Secure authentication
- Single-device session control
- Simple and functional UI

---

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs

### Frontend
- React (Vite)
- Axios
- Simple CSS

---

## Project Structure

```
shopping-cart/
├── shopping-cart-backend/
└── shopping-cart-frontend/
```


- `shopping-cart-backend` → REST API and database logic
- `shopping-cart-frontend` → React UI for login, cart, and orders

---

## Main Features

- User registration and login
- Single active session per user
- Item listing
- Add items to cart
- Cart summary with quantity
- Checkout to create orders
- Order history

---

## How to Run

### Backend

cd shopping-cart-backend
npm install
npm run dev


### Frontend

cd shopping-cart-frontend
npm install
npm run dev


Backend runs on:
http://localhost:5000



Frontend runs on:
http://localhost:5173