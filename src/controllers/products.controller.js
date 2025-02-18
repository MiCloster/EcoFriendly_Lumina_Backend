
const Product = require('../models/Product.js');

const getProducts = async (req, res) => { 
    try {
        const products = await Product.findAll();
        if (products.length === 0) {
            return res.status(404).json({ message: "No hay productos registrados." });
        }
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
            message: "Todos los campos son obligatorios."
        }); 
    }
}

const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, brand, category, description, img_url, certification, where_to_buy} = req.body;
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: "Producto no existente" });
        }
        product.name = name;
        product.brand = brand;
        product.category = category;
        product.description = description;
        product.img_url = img_url;
        product.certification = certification;
        product.where_to_buy = where_to_buy;

        await product.save();
        res.json(product);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
        
    }

}
const deleteProduct = async (req, res) => {
    try {
        const deletedRows = await Product.destroy({
            where: {
                id: req.params.id
            }
        });

        if (deletedRows === 0) {
            return res.status(404).json({ message: "Producto no existente" });
        }

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const getProductById = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByPk(id);
        if (!product){
            return res.status(404).json({message: "Producto no existente"});
        };
        res.json(product);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
        
    }
}


module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById
}