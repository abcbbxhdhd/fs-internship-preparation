const express = require("express")
const bodyParser = require("body-parser")

const promotionRouter = express.Router()

promotionRouter.use(bodyParser.json())

promotionRouter.route("/")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })
    .get((req, res, next) => {
        res.end("It will send all proms to you!")
    })
    .post((req, res, next) => {
        res.end(`It will create new prom with name: ${req.body.name} and description: ${req.body.description}`)
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end("PUT operation for this endpoint is not allowed")
    })
    .delete((req, res, next) => {
        res.end("It will delete all the proms")
    })

promotionRouter.route("/:promId")
    .all((req, res, next) => {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/plain")
        next()
    })
    .get((req, res, next) => {
        res.end(`It will send info about prom with id: ${req.params.promId}`)
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST for this endpoint is not allowed")
    })
    .put((req, res, next) => {
        res.end(`It will edit info about prom with id ${req.params.promId}`)
        res.end(`New name will be ${req.body.name} and new description will be ${req.body.description}`)
    })
    .delete((req, res, next) => {
        res.end(`It will delete info about prom with id ${req.params.promId}`)
    })
    
module.exports = promotionRouter