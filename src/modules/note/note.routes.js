import express from "express"
import { addNote, deleteNote, findAllNotes, findOneNote, updateNote } from "./note.controller.js"
import { auth } from "../../middleware/auth.js"

const noteRouter = express.Router()

noteRouter.use(auth)

noteRouter.route('/notes').get( findAllNotes).post( addNote)
noteRouter.route('/notes/:id').get( findOneNote).put( updateNote).delete(  deleteNote)


export default noteRouter