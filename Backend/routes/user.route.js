const express = require("express");
const router = express.Router();
const {body} = require("express-validator")
const userController = require('../controllers/user.controller')
const authMiddleware = require("../middlewares/auth.middleware")

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage("First Name Must Be At 3 Characters Long"),
    body('password').isLength({min:6}).withMessage("Password Must Be At Least 6 Characters Long")
],
userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min:6}).withMessage("Password Must Be At Least 6 Characters Long")
],
userController.loginUser)


router.get("/profile",authMiddleware.authUser,userController.getUserProfile)
router.get('/logout', authMiddleware.authUser, userController.logoutUser)


module.exports = router;