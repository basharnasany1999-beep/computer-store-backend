import { pool } from "./db.js";

export const orderUser = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        products.id,
        products.name AS product_name,
        products.price,
        products.image_url AS image,
        customers.name AS customer_name,
        customers.created_at AS order_time,
        categories.name as category 
      FROM products
      JOIN customers ON customers.product_id = products.id
      JOIN categories ON categories.id = products.category_id;

    `);

    return res.json(result.rows);
  } catch (err) {
    console.error(err); 
    return res.status(500).json({ message: 'Database connection error' });
  }
};
