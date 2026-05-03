const express = require("express")
const router = express.router();
const controller = require("../controllers/game.controllers")


router.get("/count" , controller.count)

module.exports = router