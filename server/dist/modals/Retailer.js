"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
const sequelize_1 = require("sequelize");
class Retailer extends sequelize_1.Model {
}
Retailer.init({
    firstname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    logo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    companyname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize: db_1.default,
    modelName: 'retailer',
});
exports.default = Retailer;
