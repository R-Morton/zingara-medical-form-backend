const mongoose = require('mongoose')

const painSchema = new mongoose.Schema({
    painType: String,
    gp: String
})

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    dob: String,
    gender: String,
    height: String,
    address: String,
    occupation: String,
    ename: String,
    enumber: String,
    pain: {
        painType: String,
        gp: String
    },
    notes: [{type: mongoose.Types.ObjectId, ref: 'Note'}]
})

const User = mongoose.model("User", UserSchema)

module.exports = {User}