const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoute");
const postRouter = require("./routes/postRoute");

dotenv.config();

const port = process.env.SERVER_PORT;
const hostname = process.env.SERVER_HOSTNAME;
const dbLink = process.env.DB_LINK;

const app = express();
app.use(bodyParser.json());
app.use("/api", userRouter);
app.use("/api", postRouter);
mongoose.connect(dbLink, () => {
    console.log("CONNECTED TO DB");
})

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`STARTED SERVER ON ${hostname}:${port}`)
})
