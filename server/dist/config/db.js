"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../environment/config");
const DB = config_1.Local.DB_Name;
const USER = config_1.Local.DB_User;
const PASS = config_1.Local.DB_Password;
const HOST = config_1.Local.DB_Host;
const DIA = config_1.Local.DB_Dialect;
const sequelize = new sequelize_1.Sequelize(DB, USER, PASS, {
    host: HOST,
    dialect: DIA,
});
exports.default = sequelize;
