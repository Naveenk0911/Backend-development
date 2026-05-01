const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || authHeader !== "Addmin@123") {
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();
};

const url = "mongodb://localhost:27017/auth";
mongoose.connect(url)
    .then(() => console.log("MongoDB connected"))     
    .catch((err) => console.error("MongoDB connection error:", err));


app.get("/public", (req, res) => {
    res.send("accessible for everyone ");
});

app.get("/private", authMiddleware, (req, res) => {
    res.send("only for authorized");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
