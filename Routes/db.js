
import { Pool } from "pg"

export  const pool =  new Pool({
    host: 'localhost' ,
    port: 5000 ,
    user: 'me',
    password: 'bbb100',
    database: 'computer'
})
