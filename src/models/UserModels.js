const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    dob: String,
    gender: String,
    height: String,
    address: String,
    ename: String,
    enumber: String,
    occupation: String,
    pain: {
        painType: String,
        gp: String
    },
    allergies: String,
    q3: Array,
    notes: [{type: mongoose.Types.ObjectId, ref: 'Note'}]
})

const User = mongoose.model("User", UserSchema)

module.exports = {User}