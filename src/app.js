require('./models/Product');

const express = require('express');
const app = express();
app.disable('x-powered-by');

//Middlewares
app.use(express.json()); //datos en json
app.use(express.urlencoded({extended: false})); //datos en formularios con false porque no acepta img


//Routes
app.use(require('./routes/products.routes.js'));



module.exports = app;

