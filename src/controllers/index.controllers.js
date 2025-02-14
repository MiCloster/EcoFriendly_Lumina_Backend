const {config} = require('dotenv');
const {Pool} = require('pg');

config();

const pool = new Pool({
    
    connectionString: process.env.DATABASE_URL,
    ssl:true //en desarrollo
});


const getProducts = async (req, res) => {
    const response = await pool.query('SELECT * FROM products');
    res.status(200).json(response.rows);
};

module.exports = {
    getProducts
}