const mongoose = require('mongoose');

async function connectToDb(){
    await mongoose.connect(process.env.DB_CONNECT).then(()=>{
        console.log("Connect To DB");
    }).catch(err => console.log(err));
}


module.exports = connectToDb;