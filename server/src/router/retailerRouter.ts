import { Router } from "express";
import { addRetailer, addProduct, retailerLogin, updateProduct, deleteProduct, getProducts } from "../controllers/retailerController";
import { upload } from "../middlewares/upload";
import { Validator } from "../middlewares/userValidation";
import { authenticateJWT } from "../middlewares/userAuth";

const  router = Router();


router.get("get-products",  getProducts);
router.post("add-retailer", upload.single('logo'), Validator, addRetailer);
router.post("add-product",  upload.single('photo'), authenticateJWT, addProduct);
router.post("retailer-login", retailerLogin);
router.put("update-product", authenticateJWT, updateProduct);
router.delete("delete-product", authenticateJWT, deleteProduct);

export default router;