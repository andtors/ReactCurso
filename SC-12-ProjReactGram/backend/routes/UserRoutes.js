const express = require("express")
const router = express.Router()

// Controller
const {
    register,
     } = require("../controllers/UserController");

//middlwates
const validate = require("../middlewares/handleValidation")
const {userCreateValidation} = require("../middlewares/userValidation")


// Routes
router.post("/register", userCreateValidation(), validate, register)

module.exports = router

