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

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
