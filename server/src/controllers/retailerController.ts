import { Response } from "express";
import bcrypt from 'bcrypt';
import  jwt from 'jsonwebtoken';
import Retailer from "../modals/Retailer";
import Product from "../modals/Products";
import { Local } from "../environment/config";


// post request
export const addRetailer = async(req:any, res:Response) => {
    try{
        var  { firstname, lastname, email, password, phone, gender, companyname} = req.body;
        password = bcrypt.hash(password, 10);
    
        const logo = req.files['logo'][0].path
        const retailer = await Retailer.create({firstname, lastname, email, password, phone, gender, logo, companyname });
        
        if(retailer){
            res.status(200).send("Data Saved Successfully");
        }
        else{
            res.status(400).send("Failed to Save Data");
        }
    }
    catch(err){
        res.status(500).send(`Something went wrong.........\n ${err}`);
    }

}

// post request
export const retailerLogin = async(req:any, res:any) => {
    try{
        const { email, password } = req.body;
        const retailer = await Retailer.findOne({ where: { email } });
        if (!retailer) {
            return res.status(404).json({ message: "Retailer Not Found" });
            }
        
        const isMatch = await bcrypt.compare(password, retailer.password);
        
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Credentials" });
            }
        const token = jwt.sign({ retailerId: retailer.id }, Local.Secret_Key);
        res.status(200).json({"token":token});
    }catch(err){
        res.status(500).send(`Something went wrong.........\n ${err}`);
    }

}

//  post request
export const  addProduct = async(req:any, res:Response) => {
    try{
        let { name, price, category, brand, quantity } = req.body
        name = name.toLowerCase();
        brand = brand.toLowerCase();
        category = category.toLowerCase();
        const photo = req.files['photo'][0].path

        const product = await Product.create({ name, price, photo, category, brand, quantity });
        if(product){
            res.status(200).send("Product Added Successfully");
            }
        else{
            res.status(400).send("Failed to Add Product");
            }
        }
    catch(err){
        res.status(500).send(`Something went wrong.........\n ${err}`);
        }
}

//  put request
export const updateProduct = async(req:any, res:Response) => {
    try{
        req.body.name = req.body.name.toLowerCase();
        req.body.brand = req.body.brand.toLowerCase();
        req.body.category = req.body.category.toLowerCase();
        const product = await Product.update(req.body, { where: { id: req.params.id }});
        if(product){
            res.status(200).send("Product Updated Successfully");
        }
        else{
            res.status(400).send("Failed to Update Product");
            }
        }
        catch(err){
            res.status(500).send(`Something went wrong.........\n ${err}`)
        }
}

//  delete request
export const deleteProduct = async(req:any, res:Response) => {
    try{
        const product = await Product.destroy({ where: { id: req.params.id }});
        if(product){
            res.status(200).send("Product Deleted Successfully");
            }
        else{
            res.status(400).send("Failed to Delete Product");
            }
        }
        catch(err){
            res.status(500).send(`Something went wrong.........\n ${err}`)
        }
}

// get request
export  const getProducts = async(req:any, res:Response) => {
    try
    {
        const id = req.user.retailer.id;
        const products = await Product.findAll({where:{retailerId:id}});
        if(products){
            res.status(200).json(products);
        }
        else{
            res.status(400).send("No Products Found");
        }
    }
    catch(err){
        res.status(500).send(`Something went wrong.........\n ${err}`)
    }
}
