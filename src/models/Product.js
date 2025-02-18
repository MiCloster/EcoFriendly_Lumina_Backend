const sequelize = require('../database/database');
const { DataTypes, where } = require('sequelize');

const Product = sequelize.define('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    img_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    certification: {
        type: DataTypes.STRING,
        allowNull: false
    },
    where_to_buy: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true
});


module.exports = Product;