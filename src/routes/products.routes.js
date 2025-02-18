const {Router} = require('express');
const router = Router();

const {getProducts, createProduct} = require('../controllers/products.controller');

router.get('/products', getProducts);
router.put('/products/:id');
router.delete('/products/:id');
router.post('/products', createProduct);
router.get('/products/:id');



module.exports = router;