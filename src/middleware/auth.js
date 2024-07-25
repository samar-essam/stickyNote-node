import jwt from 'jsonwebtoken'

export const auth = (req , res , next) => {

    let token = req.header('token')
    jwt.verify(token , 'myStickyNote' , async (err , decoded) => {
        if(err) return res.json({ message : "err" , err})

        next()
        
    })
}