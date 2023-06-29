const express = require('express')
const {createNote} = require('../controllers/NoteControllers')
const notesRouter = express.Router();

notesRouter.post("/create", createNote)

module.exports = notesRouter