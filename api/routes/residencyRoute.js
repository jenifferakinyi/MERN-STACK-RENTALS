const express = require("express");
const {createResidency,getAllResidencies, getResidency} = require ("../controllers/residencyController")
const jwtCheck = require("../config/auth0Config.js")
const router = express.Router();
router.post("/create",   createResidency);
router.get("/allresidency", getAllResidencies)
router.get("/:id", getResidency)



module.exports =  router ;