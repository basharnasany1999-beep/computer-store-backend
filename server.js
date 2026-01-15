import express from 'express'
import { APProuter } from './Routes/UseRouters.js'

import cors from 'cors'


const app = express()
const PORT = 9000

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173"
}))
app.use('/api' , APProuter)

app.listen(PORT , ()=> console.log(`the server is running on port : ${PORT}`))

