const express = require("express")
const bodyParser = require("body-parser")
const Leaders = require("../types/Leader")


const leaderRouter = express.Router()

leaderRouter.use(bodyParser.json())

leaderRouter.route("/")
    .get((req, res, next) => {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        Leaders.find({})
            .then((response) => {
                res.json(response)
            })
            .catch(err => console.log(err))
    })
    .post((req, res, next) => {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        Leaders.create(req.body)
            .then(response => console.log("Created new leader: " + response._id))
            .catch(err => console.log(err))
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.setHeader("Content-Type", "text/plain")
        res.end("PUT operation for this endpoint is not allowed")
    })
    .delete((req, res, next) => {
        Leaders.remove({})
            .then(response => console.log(response))
            .catch(err => console.log(err))
    })

leaderRouter.route("/:leaderId")
    .get((req, res, next) => {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        Leaders.findById(req.params.leaderId)
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
        Leaders.findByIdAndUpdate(req.params.leaderId, req.body)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    })
    .delete((req, res, next) => {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        Leaders.findByIdAndDelete(req.params.leaderId)
            .then(res => console.log(res))
            .catch(err => console.log(err)) 
    })
    
module.exports = leaderRouter
 