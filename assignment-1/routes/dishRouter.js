const express = require("express")
const bodyParser = require("body-parser")

const dishRouter = express.Router()

dishRouter.use(bodyParser.json())

dishRouter.route("/")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })
    .get((req, res, next) => {
        res.end("It will send all dishes to you!")
    })
    .post((req, res, next) => {
        res.end(`It will create new dish with name: ${req.body.name} and description: ${req.body.description}`)
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end("PUT operation for this endpoint is not allowed")
    })
    .delete((req, res, next) => {
        res.end("It will delete all the dishes")
    })

dishRouter.route("/:dishId")
    .all((req, res, next) => {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/plain")
        next()
    })
    .get((req, res, next) => {
        res.end(`It will send info about dish with id: ${req.params.dishId}`)
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST for this endpoint is not allowed")
    })
    .put((req, res, next) => {
        res.end(`It will edit info about dish with id ${req.params.dishId}. New name will be ${req.body.name} and new description will be ${req.body.description}`)
    })
    .delete((req, res, next) => {
        res.end(`It will delete info about dish with id ${req.params.dishId}`)
    })
    
module.exports = dishRouter
