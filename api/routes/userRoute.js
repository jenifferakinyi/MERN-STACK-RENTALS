const express = require("express");
const { createUser, bookVisit, getAllBookings, cancelBooking, toFav, getAllFavorites } = require("../controllers/userController");
const jwtCheck = require("../config/auth0Config.js")
const router = express.Router();

router.post("/register",   createUser);
router.post("/bookVisit/:id", jwtCheck,  bookVisit);
router.post("/allBookings", getAllBookings);
router.post("/removeBooking/:id", jwtCheck, cancelBooking);
router.post("/toFav/:rid",jwtCheck, toFav);
router.post("/allFav/",jwtCheck,  getAllFavorites);

module.exports =  router ;
