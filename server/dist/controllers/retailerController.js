"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = exports.deleteProduct = exports.updateProduct = exports.addProduct = exports.retailerLogin = exports.addRetailer = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Retailer_1 = __importDefault(require("../modals/Retailer"));
const Products_1 = __importDefault(require("../modals/Products"));
const config_1 = require("../environment/config");
// post request
const addRetailer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var { firstname, lastname, email, password, phone, gender, companyname } = req.body;
        password = bcrypt_1.default.hash(password, 10);
        const logo = req.files['logo'][0].path;
        const retailer = yield Retailer_1.default.create({ firstname, lastname, email, password, phone, gender, logo, companyname });
        if (retailer) {
            res.status(200).send("Data Saved Successfully");
        }
        else {
            res.status(400).send("Failed to Save Data");
        }
    }
    catch (err) {
        res.status(500).send(`Something went wrong.........\n ${err}`);
    }
});
exports.addRetailer = addRetailer;
// post request
const retailerLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const retailer = yield Retailer_1.default.findOne({ where: { email } });
        if (!retailer) {
            return res.status(404).json({ message: "Retailer Not Found" });
        }
        const isMatch = yield bcrypt_1.default.compare(password, retailer.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        const token = jsonwebtoken_1.default.sign({ retailerId: retailer.id }, config_1.Local.Secret_Key);
        res.status(200).json({ "token": token });
    }
    catch (err) {
        res.status(500).send(`Something went wrong.........\n ${err}`);
    }
});
exports.retailerLogin = retailerLogin;
//  post request
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { name, price, category, brand, quantity } = req.body;
        name = name.toLowerCase();
        brand = brand.toLowerCase();
        category = category.toLowerCase();
        const photo = req.files['photo'][0].path;
        const product = yield Products_1.default.create({ name, price, photo, category, brand, quantity });
        if (product) {
            res.status(200).send("Product Added Successfully");
        }
        else {
            res.status(400).send("Failed to Add Product");
        }
    }
    catch (err) {
        res.status(500).send(`Something went wrong.........\n ${err}`);
    }
});
exports.addProduct = addProduct;
//  put request
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.body.name = req.body.name.toLowerCase();
        req.body.brand = req.body.brand.toLowerCase();
        req.body.category = req.body.category.toLowerCase();
        const product = yield Products_1.default.update(req.body, { where: { id: req.params.id } });
        if (product) {
            res.status(200).send("Product Updated Successfully");
        }
        else {
            res.status(400).send("Failed to Update Product");
        }
    }
    catch (err) {
        res.status(500).send(`Something went wrong.........\n ${err}`);
    }
});
exports.updateProduct = updateProduct;
//  delete request
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield Products_1.default.destroy({ where: { id: req.params.id } });
        if (product) {
            res.status(200).send("Product Deleted Successfully");
        }
        else {
            res.status(400).send("Failed to Delete Product");
        }
    }
    catch (err) {
        res.status(500).send(`Something went wrong.........\n ${err}`);
    }
});
exports.deleteProduct = deleteProduct;
// get request
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.user.retailer.id;
        const products = yield Products_1.default.findAll({ where: { retailerId: id } });
        if (products) {
            res.status(200).json(products);
        }
        else {
            res.status(400).send("No Products Found");
        }
    }
    catch (err) {
        res.status(500).send(`Something went wrong.........\n ${err}`);
    }
});
exports.getProducts = getProducts;
