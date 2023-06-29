const express = require('express')
const {getUsers, createUser} = require('../controllers/UserControllers')
const usersRouter = express.Router();

usersRouter.get("/", getUsers)
usersRouter.post("/signup", createUser)

module.exports = usersRouter