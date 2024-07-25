import { userModel } from "../../../DB/models/user.model.js"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

const signup = async ( req , res) => {
 
    await userModel.insertMany(req.body) 
    res.json({ message : "Success" })
}

const signin = async ( req , res) => {
    let user = await userModel.findOne({email : req.body.email})


if(user && bcrypt.compareSync(req.body.password , user.password)) {

    let token = jwt.sign({userId : user._id , role : user.role} , 'myStickyNote')
    return res.json({message : "login" , token})
}

return res.json({message : "email or password is incorrect" })

}

export {
    signup,
    signin
}