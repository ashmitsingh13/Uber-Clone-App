const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3, 'Firstname Must Be At Least 3 Characters Long'],
        },
        lastname:{
            type:String,
            minlength:[3, "Lastname Must Be At least 3 Characters Long"],
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        match:[/^\S+@\S+\.\S+$/,"Please Enter A Valid Email"]
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketid:{
        type:String,
    },
    status:{
        type:String,
        enum:['active', 'inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3, "Color Must Be At Least 3 Characters Long"],
        },
        plate:{
            type:String,
            required:true,
            minlength:[3, "Plate Number Must Be At Least 3 Characters Long"]
        },
        capacity:{
            type:Number,
            required:true,
            min:[1, "Capacity Must Be At Least 1"],
        },
        vehicletype:{
            type:String,
            required:true,
            enum:['car','motorcycle','auto'],
            }
    },
    location:{
        lat:{
            type:Number,
        },
        lng:{
            type:Number
        }
    }
})

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id}, process.env.JWT_SECRET, {expiresIn:'24h'});
    return token
}


captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const Captain = mongoose.model('Captain',captainSchema);

module.exports = Captain;