const blacklisitTokenModel = require("../models/blacklisitToken.model");
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

module.exports.logincaptain = async(req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({err: errors.array()});
    }

    const {email, password}= req.body;

    const captain = await captainModel.findOne({email}).select('+password');


    if(!captain){
        return res.status(401).json({message:"Invalid Email Or Password"});
    }

    const isMatch = await captain.comparePassword(password);


    if(!isMatch){
     return res.status(401) .json({message:"Invalid Email Or Password"});  
    }

    const token = captain.generateAuthToken();

    res.cookie("token", token);

    res.status(200).json({token, captain});
}


module.exports.getCaptainProfile = async(req, res, next)=>{
    res.status(200).json({captain: req.captain});
}

module.exports.logoutCaptain = async(req, res, next)=>{
    const token=  req.cookies.token || req.headers.authorization?.split(' ')[1];
    await blacklisitTokenModel.create({token});
    res.clearCookie('token');
    res.status(200).json({message:'Logout Successfully'});
}