# Express API Practice

Mini REST API project for practicing **Express.js**.  
The project includes **users** and **orders** routes, validation, middleware, and logging.

## 🚀 Features

- **Global middleware** to log each request with a timestamp
- **Validation middleware** for POST routes
- **Users routes**:
  - `POST /users` – create a user (body: `{ userName, email }`)
  - `GET /users` – list all users
  - `GET /users/:id` – get a user by ID
- **Orders routes**:
  - `POST /orders` – create an order (body: `{ userId, productName, quantity }`)
  - `GET /orders` – list all orders
  - `GET /orders/:id` – get an order by ID

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/MilosMicun/express-api-practice.git
Go into the project folder:

bash
Copy code
cd express-api-practice
Install dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
node index.js
Server runs at: http://localhost:3000

📋 Testing Routes
Using curl or Postman:

Users
Create a user:

bash
Copy code
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"userName":"Milos","email":"m@gmail.com"}'
List all users:

bash
Copy code
curl http://localhost:3000/users
Get a user by ID:

bash
Copy code
curl http://localhost:3000/users/1
Orders
Create an order:

bash
Copy code
curl -X POST http://localhost:3000/orders -H "Content-Type: application/json" -d '{"userId":1,"productName":"Phone","quantity":2}'
List all orders:

bash
Copy code
curl http://localhost:3000/orders
Get an order by ID:

bash
Copy code
curl http://localhost:3000/orders/1
🛠 Technologies
Node.js

Express.js

