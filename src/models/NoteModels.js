const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    content: String,
    createdAtDate: Date
})

const Note = mongoose.model("Note", NoteSchema)

module.exports = {Note}