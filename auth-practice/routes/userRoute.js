const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

userRouter.post("/signup", async (req, res, next) => {
    const {email, username, password} = req.body;

    const emailExists = await User.findOne({email});
    const usernameExists = await User.findOne({username});
    
    if (emailExists) {
        return res.status(400).send("Email already exists");
    }
    else if (usernameExists) {
        return res.status(400).send("Username already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = new User({
        email,
        username,
        password: hashPassword 
    });

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch(err) {
        res.status(400).send(err);
    }
});

userRouter.post("/login", async (req, res, next) => {
    const {password, username} = req.body;
    const foundUser = await User.findOne({username});
    if (!foundUser) {
        return res.status(400).send("Such user does not exist");
    }

    if (!await bcrypt.compare(password, foundUser.password)) {
        return res.status(400).send("Invalid password");
    }

    const token = jwt.sign({_id: foundUser._id}, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send(token);
});

module.exports = userRouter;