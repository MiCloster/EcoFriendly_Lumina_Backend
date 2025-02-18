const sequelize = require('../database/database');
const { DataTypes, where } = require('sequelize');

const Product = sequelize.define('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    brand: {
        type: DataTypes.STRING
    },
    category: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    },
    img_url: {
        type: DataTypes.STRING
    },
    certification: {
        type: DataTypes.STRING
    },
    where_to_buy: {
        type: DataTypes.STRING
    },
}, {
    timestamps: true
})

module.exports = Product;