"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Local = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: ".env.development" });
exports.Local = {
    Port: Number(process.env.PORT),
    DB_Name: String(process.env.DB_NAME),
    DB_User: String(process.env.DB_USER),
    DB_Password: String(process.env.DB_PASSWORD),
    DB_Host: String(process.env.DB_HOST),
    DB_Dialect: String(process.env.DB_DIALECT),
    Secret_Key: String(process.env.SECRET_KEY)
};
// export const Production = {}
// export const Staging = {}
