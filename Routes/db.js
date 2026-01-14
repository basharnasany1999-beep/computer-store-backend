
import { Pool } from "pg"

export  const pool =  new Pool({
    connectionString:'postgresql://neondb_owner:npg_Ix7RpeKq3UMu@ep-wandering-art-ahiueo2b-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
    ssl:{rejectUnauthorized : false} ,
    host: 'localhost' ,
    port: 5000 ,
    user: 'me',
    password: 'bbb100',
    database: 'computer'
})
