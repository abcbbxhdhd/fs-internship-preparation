const express = require("express");
const { post } = require("./userRoute");
const auth = require("../middlewares/auth");

const postRouter = express.Router();

postRouter.get("/posts", auth, (req, res) => {
    res.send("Hello, authenticated user!!!");
});

module.exports = postRouter;