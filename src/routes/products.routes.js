const {Router} = require('express');
const router = Router();

const {getProducts, createProduct, updateProduct, deleteProduct, getProductById} = require('../controllers/products.controller');

router.get('/products', getProducts);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);
router.post('/products', createProduct);
router.get('/products/:id', getProductById);



module.exports = router;