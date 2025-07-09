const express = require("express");
const router = express.Router();
const {body} = require("express-validator")
const userController = require('../controllers/user.controller')


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage("First Name Must Be At 3 Characters Long"),
    body('password').isLength({min:6}).withMessage("Password Must Be At Least 6 Characters Long")
],
userController.registerUser
)



module.exports = router;