
const e = require('express');
const Product = require('../models/Product.js');

const getProducts = async (req, res) => { 
    try {
        const products = await Product.findAll();
    res.json(products);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        }); 
    }
    
}

const createProduct = async (req, res) => {
    const {name, brand, category, description, img_url, certification, where_to_buy} = req.body;

    try {
        let newProduct = await Product.create({
            name,
            brand,
            category,
            description,
            img_url,
            certification,
            where_to_buy
        },
        { 
            fields: ['name', 'brand', 'category', 'description', 'img_url', 'certification', 'where_to_buy']
        });
        res.json(newProduct);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        }); 
    }
}

module.exports = {
    getProducts,
    createProduct
}