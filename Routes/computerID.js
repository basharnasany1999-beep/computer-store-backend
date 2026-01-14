import { pool } from "./db.js"

export const computerId = async (req , res)=>{
    const { id } =  req.params
    try{
        const result = await pool.query(`SELECT products.id ,
                                            products.name ,
                                            products.price ,
                                            products.stock ,
                                            products.image_url ,
                                            categories.name as category  FROM products
                                            JOIN categories ON  categories.id = products.category_id 
                                            WHERE products.id = $1` , [id])
        if(result.rows.length === 0){
           return res.status(404).json({error : 'data not found'})
        }
      return  res.status(200).json(result.rows[0])
    }catch(err){
         return res.status(500).json({error :'there is an error'  })
    }

}