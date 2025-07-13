const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const captaincontroller = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage("First Name Must Be At 3 Characters Long"),
    body('password').isLength({min:6}).withMessage("Password Must Be At Least 6 Characters Long"),
    body('vehicle.color').isLength({min:3}).withMessage("Color must be at least 3 characters"),
    body('vehicle.plate').isLength({min:3}).withMessage("Plate must be at least 3 characters"),
    body('vehicle.capacity').isInt({min:1}).withMessage("Capacity must be at least 1"),
    body('vehicle.vehicletype').isIn(['car','motorcycle','auto']).withMessage("Invalid vehicle Type"),
],
captaincontroller.registercaptain
)


router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
     body('password').isLength({min:6}).withMessage("Password Must Be At Least 6 Characters Long"),
],
captaincontroller.logincaptain
)

router.get('/profile',authMiddleware.authCaptain,captaincontroller.getCaptainProfile);


router.get('/logout', authMiddleware.authCaptain, captaincontroller.logoutCaptain)
module.exports = router;