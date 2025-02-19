"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const retailerController_1 = require("../controllers/retailerController");
const upload_1 = require("../middlewares/upload");
const userValidation_1 = require("../middlewares/userValidation");
const userAuth_1 = require("../middlewares/userAuth");
const router = (0, express_1.Router)();
router.get("get-products", retailerController_1.getProducts);
router.post("add-retailer", upload_1.upload.single('logo'), userValidation_1.Validator, retailerController_1.addRetailer);
router.post("add-product", upload_1.upload.single('photo'), userAuth_1.authenticateJWT, retailerController_1.addProduct);
router.post("retailer-login", retailerController_1.retailerLogin);
router.put("update-product", userAuth_1.authenticateJWT, retailerController_1.updateProduct);
router.delete("delete-product", userAuth_1.authenticateJWT, retailerController_1.deleteProduct);
exports.default = router;
