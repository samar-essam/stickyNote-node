import bcrypt, { hash } from "bcrypt"


export const hashPassword = (req , res , next) =>{
    req.body.password = bcrypt.hashSync(req.body.password , 8)
    next()

}