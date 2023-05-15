const express = require("express");
const route = express.Router();
const rpdController = require("../controllers/rpd.controller");

route.post("/rpd", rpdController.create);
route.get("/rpd", rpdController.find);
route.patch("/rpd", rpdController.update);
route.delete("/rpd", rpdController.delete);


module.exports = route;
