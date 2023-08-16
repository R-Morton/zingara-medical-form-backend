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

const updateNote = async (request, response) => {
    let updatedNote = await Note.findByIdAndUpdate(request.params.id, request.body, {new: true})
        .catch(error => {
            console.log("Some error while accessing data:\n" + error)
        }) 
    // if we could find the note we will update it
    if (updatedNote) {
        response.send(updatedNote)
    } else { // if the id doesn't exist note will be undefined and will return error message
        response.json({error: "id not found"})
    }     
}

const deleteNote = async (request, response) => {
    const noteId = request.params.id

    const deletedNote = await Note.findByIdAndDelete(noteId)

    response.json("note deleted successfully")
}

module.exports = {
    createNote,
    updateNote,
    deleteNote
}