import mongoose from "mongoose";


export function dbConnections(){
    mongoose.connect('mongodb+srv://samarEssam:gQVCo8HX6ouygB0o@cluster0.6hiiuac.mongodb.net/sara7a-app/stickyNote').then( ()=> {
        console.log("DB is connected ");
    }).catch((err)=>{
        console.log("error connection");
    })
}
