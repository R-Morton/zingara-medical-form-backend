const express = require('express')
const {createNote, updateNote, deleteNote} = require('../controllers/NoteControllers')
const notesRouter = express.Router();

notesRouter.post("/create", createNote)
notesRouter.put("/update/:id", updateNote)
notesRouter.delete("/delete/:id", deleteNote)

module.exports = notesRouter