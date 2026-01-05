const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

function validateUser(req, res, next) {
    const { userName, email } = req.body;

    if (!userName || !email) {
        return res.status(400).json({ error: "Username and email are required" });
    }

    if (!email.includes("@")) {
        return res.status(400).json({ error: "Email must contain @" });
    }

    next();
}

function validateOrder(req, res, next) {
    const { userId, productName, quantity } = req.body;

    if (userId === undefined || !productName || quantity === undefined) {
        return res.status(400).json({ error: "userId, productName and quantity are required" });
    }

    if (typeof quantity !== "number" || quantity <= 0) {
        return res.status(400).json({ error: "Quantity must be a positive number" });
    }

    next();
}

app.post("/users", validateUser, (req, res) => {
    const { userName, email } = req.body;
    return res.status(201).json({
        message: "User successfully created",
        user: { userName, email }
    });
});

app.get("/users", (req, res) => {
    const users = [
        { id: 1, userName: "Milos", email: "m@gmail.com" }
    ];
    return res.json(users);
});

app.get("/users/:id", (req, res) => {
    const users = [
        { id: 1, userName: "Milos" },
        { id: 2, userName: "Ana" }
    ];
    const user = users.find(u => u.id === Number(req.params.id));

    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    return res.json(user);
});

app.post("/orders", validateOrder, (req, res) => {
    const { userId, productName, quantity } = req.body;
    return res.status(201).json({
        message: "Order successfully created",
        order: { userId, productName, quantity }
    });
});

app.get("/orders", (req, res) => {
    const orders = [
        { id: 1, userId: 1, productName: "Phone", quantity: 1 }
    ];
    return res.json(orders);
});

app.get("/orders/:id", (req, res) => {
    const orders = [
        { id: 1 },
        { id: 2 }
    ];
    const order = orders.find(o => o.id === Number(req.params.id));

    if (!order) {
        return res.status(404).json({ error: "Order not found" });
    }

    return res.json(order);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
