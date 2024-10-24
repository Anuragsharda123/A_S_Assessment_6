import sequelize from "../config/db";
import { Model, DataTypes, BelongsTo } from "sequelize";
import Retailer from "./Retailer";

class  Product extends Model {
    public id?: number;
    public name!: string;
    public photo!: string;
    public category!: string;
    public price!: number;
    public quantity!: number;
    public brand!: string;
    public status!: boolean;
}

Product.init({
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    photo:{
        type: DataTypes.STRING,
        allowNull:false
    },
    category:{
        type: DataTypes.STRING,
        allowNull:false
    },
    price: {
        type: DataTypes.STRING,
        allowNull:false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    brand:{
        type: DataTypes.STRING,
        allowNull:false
    },
    status:{
        type: DataTypes.BOOLEAN,
        allowNull:false
        }
},{
    sequelize,
    modelName: 'products',
})


Retailer.hasMany(Product);
Product.belongsTo(Retailer);

export default Product;