const { Note } = require('../models/NoteModels')
const { User } = require('../models/UserModels')

const createNote = async (request, response) => {
    let user = await User.findOne({_id: request.body._id})

    if (user) {
        let newNote = new Note({
            content: request.body.content,
            createdAtDate: new Date(Date.now())
        })
    
        await newNote.save()
        user.notes.push(newNote._id)
        await user.save()
        response.status(201)
        response.json(newNote)
    } else {
        response.json({
            error: "No user found"
        })
    }
}

module.exports = {
    createNote
}