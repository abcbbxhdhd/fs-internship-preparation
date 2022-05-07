const express = require("express")
const bodyParser = require("body-parser")

const leaderRouter = express.Router()

leaderRouter.use(bodyParser.json())

leaderRouter.route("/")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })
    .get((req, res, next) => {
        res.end("It will send all leaders to you!")
    })
    .post((req, res, next) => {
        res.end(`It will create new leader with name: ${req.body.name} and description: ${req.body.description}`)
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end("PUT operation for this endpoint is not allowed")
    })
    .delete((req, res, next) => {
        res.end("It will delete all the leaders")
    })

leaderRouter.route("/:leaderId")
    .all((req, res, next) => {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/plain")
        next()
    })
    .get((req, res, next) => {
        res.end(`It will send info about leader with id: ${req.params.leaderId}`)
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST for this endpoint is not allowed")
    })
    .put((req, res, next) => {
        res.end(`It will edit info about leader with id ${req.params.leaderId}`)
        res.end(`New name will be ${req.body.name} and new description will be ${req.body.description}`)
    })
    .delete((req, res, next) => {
        res.end(`It will delete info about leader with id ${req.params.leaderId}`)
    })
    
module.exports = leaderRouter
