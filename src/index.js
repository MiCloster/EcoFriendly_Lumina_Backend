require('dotenv').config();

const app = require('./app.js');
const PORT = process.env.PORT ?? 1234;
const sequelize = require('./database/database');


app.get('/', (req, res) => {
    res.send('Hello World');
});


async function main() {
    await sequelize.sync({force: false});
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

main();