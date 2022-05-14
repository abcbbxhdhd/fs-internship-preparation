const express = require("express")
const bodyParser = require("body-parser")
const Promotions = require("../types/Promotion")

const promotionRouter = express.Router()

promotionRouter.use(bodyParser.json())

promotionRouter.route("/")
.get((req, res, next) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    Promotions.find({})
        .then((response) => {
            res.json(response)
        })
        .catch(err => console.log(err))
})
.post((req, res, next) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    Promotions.create(req.body)
        .then(response => console.log("Created new prom: " + response._id))
        .catch(err => console.log(err))
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.setHeader("Content-Type", "text/plain")
    res.end("PUT operation for this endpoint is not allowed")
})
.delete((req, res, next) => {
    Promotions.remove({})
        .then(response => console.log(response))
        .catch(err => console.log(err))
})

promotionRouter.route("/:promId")
.get((req, res, next) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    Promotions.findById(req.params.promId)
        .then(response => res.json(response))
        .catch(err => console.log(err))
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.setHeader("Content-Type", "text/plain")
    res.end("POST for this endpoint is not allowed")
})
.put((req, res, next) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    Promotions.findByIdAndUpdate(req.params.promId, req.body)
        .then(res => console.log(res))
        .catch(err => console.log(err))
})
.delete((req, res, next) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    Promotions.findByIdAndDelete(req.params.promId)
        .then(res => console.log(res))
        .catch(err => console.log(err)) 
})
    
module.exports = promotionRouter