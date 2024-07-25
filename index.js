import express from 'express'
import { dbConnections } from './DB/dbConnection.js'
import userRouter from './src/modules/user/user.routes.js'
import noteRouter from './src/modules/note/note.routes.js'
import cors from 'cors'
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(noteRouter)
dbConnections()

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))