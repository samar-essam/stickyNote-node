import { noteModel } from "../../../DB/models/note.model.js";
import jwt from 'jsonwebtoken'

export const findAllNotes =async (req , res ,next) => {

    const notes = await noteModel.find().populate('createdBy' , 'name -_id')
        res.json({ message : " success" , notes})
    
}

export const findOneNote =async (req , res ,next) => {
    const note = await noteModel.find({createdBy : req.params.id})
    res.json({ message : " success" , note})
}


export const addNote =async (req , res ,next) => {
    const note = await noteModel.insertMany(req.body)
    res.json({ message : " success note added" , note})
}

export const updateNote =async (req , res ,next) => {
    const note = await noteModel.findByIdAndUpdate(req.params.id , req.body , {new : true})
    res.json({ message : " updated Note" , note})
}

export const deleteNote =async (req , res ,next) => {
    const note =  await noteModel.findByIdAndDelete(req.params.id)
    if(!note) return  res.json({ message : " note not found"})
    res.json({ message : " deleted Note"})
}

