const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

//passportLocalMongoose defines username on its own
const userSchema = new Schema({  
    email: {
        type:String,
        required: true
    }
});

userSchema.plugin(passportLocalMongoose);//automatically implement username,hashinh,salting
module.exports = mongoose.model('User', userSchema)