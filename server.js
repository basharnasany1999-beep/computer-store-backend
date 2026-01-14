import express from 'express'
import { APProuter } from './Routes/UseRouters.js'

import cors from 'cors'


const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors({
    origin:'https://computer.vercel.app'
}))
app.use('/api' , APProuter)

app.listen(PORT , ()=> console.log(`the server is running on port : ${PORT}`))

