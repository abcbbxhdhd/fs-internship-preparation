const express = require("express")
const http = require("http")
const bodyParser = require("body-parser")
const dishRouter = require("./routes/dishRouter")
const promotionRouter = require("./routes/promotionRouter")
const leaderRouter = require("./routes/leaderRouter")
const mongoose = require("mongoose")


const hostname = "localhost"
const port = 3000;
const dbUrl = "mongodb://localhost:27017/coursera-db"

mongoose.connect(dbUrl).then(() => console.log("Connected to db"))

const app = express()

app.use(express.static(__dirname + "/public"))
app.use(bodyParser.json())
app.use("/dishes", dishRouter)
app.use("/leaders", leaderRouter)
app.use("/promotions", promotionRouter)

const server = http.createServer(app)
server.listen(port, hostname, () => {
    console.log(`Started http://${hostname}:${port}`)
})