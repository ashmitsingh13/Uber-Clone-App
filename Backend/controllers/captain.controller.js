const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const {validationResult} = require('express-validator');


module.exports.registercaptain = async (req, res, next) =>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {fullname, email, password, vehicle} = req.body;

    const isCaptain = await captainModel.findOne({email});

    if(isCaptain){
        return res.status(400).json({message:"Caption Already Exist"});
    }

    const hashPassword = await captainModel.hashPassword(password);


    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword,
        color: vehicle .color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicletype: vehicle.vehicletype
    });


    const token = captain.generateAuthToken();

    res.status(201).json({token, captain}); 
}