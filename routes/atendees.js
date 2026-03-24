var routes = require("express").Router();
var AtendeesController = require("../controllers/atendees.js");
let getAtendees = AtendeesController.getAtendees;
let registerAtendee = AtendeesController.registerAtendee;

routes.get("/assistance",getAtendees);
routes.post("/register",registerAtendee);

module.exports = routes;