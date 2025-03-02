const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = 3000; 
app.use(express.json());

// Home page api
app.get('/', (req, res) => {
    res.send("<h1 align=center>Welcome to the MERN stack week 2 session</h1>");
});

// Registration page api
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    console.log("Registration request body:", req.body); // Log registration request body





    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: "User Registered." });
        console.log("User Registration completed...");
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Login page api
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log("Login request body:", req.body); // Log login request body





    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
    }

    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        res.status(200).json({ message: "Login Successful", username: user.username });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Error handling for JSON parsing
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError) {
        return res.status(400).json({ message: "Invalid JSON" });
    }
    next();
});

mongoose.connect(process.env.MONGO_URL).then(
    () => console.log("DB connected successfully..")
).catch(
    (err) => console.log(err)
);

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Server is running on port :" + PORT);
});
