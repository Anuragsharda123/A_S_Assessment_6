"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
const sequelize_1 = require("sequelize");
const Retailer_1 = __importDefault(require("./Retailer"));
class Product extends sequelize_1.Model {
}
Product.init({
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    photo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    brand: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize: db_1.default,
    modelName: 'products',
});
Retailer_1.default.hasMany(Product);
Product.belongsTo(Retailer_1.default);
exports.default = Product;
