import { pool } from "./db.js"

export const computers = async (req , res)=>{
    try{
    const result = await pool.query('SELECT products.id ,  products.name , products.price , products.stock , products.image_url , categories.name as category  FROM products JOIN categories ON  categories.id = products.category_id ;')
     res.json(result.rows)

   }catch(err){
    res.status(500).json({error :'there is an error'  })
   }
}