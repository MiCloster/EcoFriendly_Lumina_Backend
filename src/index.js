require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT ?? 1234;

app.disable('x-powered-by');

//Routes
app.use(require('./routes/index.routes'));

//Middlewares
app.use(express.json()); //datos en json
app.use(express.urlencoded({extended: false})); //datos en formularios con false porque no acepta img


app.get('/', (req, res) => {
    res.send('Hello World');
});
//Port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


