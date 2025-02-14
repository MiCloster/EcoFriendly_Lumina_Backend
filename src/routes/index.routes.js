const {Router} = require('express');
const router = Router();

const {getProducts} = require('../controllers/index.controllers');

router.get('/products', getProducts);
module.exports = router;