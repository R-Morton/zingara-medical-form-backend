const { User } = require("../models/UserModels")

const getUsers = async (request, response) => {
    let notes = await User.find().populate('notes')
    response.send(notes)
}

const createUser = async (request, response) => {

    let newUser = new User({
        name: request.body.name,
        email: request.body.email,
        dob: request.body.dob,
        gender: request.body.gender,
        occupation: request.body.occupation,
        height: request.body.height,
        address: request.body.address,
        ename: request.body.ename,
        enumber: request.body.enumber,
        pain: request.body.pain,
        allergies: request.body.allergies,
        q3: request.body.q3
    })
    await newUser.save()
    response.status(201)
    response.json(newUser)
}

module.exports = {
    getUsers,
    createUser
}