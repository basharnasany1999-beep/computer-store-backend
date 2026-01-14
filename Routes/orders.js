import { pool } from "./db.js";


export const orders = async (req , res)=>{
  const {name , email , phone , product_id} = req.body
  if(!name || !email || !phone || product_id === undefined || product_id === null){
    return res.status(400).json({message : 'you have to fill all the fields'})
  }
  try{
    const resulte = await pool.query('INSERT INTO customers (name , phone , email , product_id)VALUES($1 , $2 , $3 , $4)RETURNING *' , [name ,  phone , email , product_id ])
   return res.json(resulte.rows[0])
  }catch(err){
    return res.status(400).json({message: 'something unvaild try again'})
  }
}