const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
