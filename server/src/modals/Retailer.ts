import sequelize from "../config/db";
import { Model, DataTypes } from "sequelize";

class  Retailer extends Model {
    public id?: number;
    public firstname!: string;
    public lastname!: string;
    public gender!: string;
    public logo!: string;
    public companyname!: string;
    public email!: string;
    public password!: string;
    public phone!: string;
    public status!: boolean;
}

Retailer.init({
    firstname: {
        type: DataTypes.STRING,
        allowNull:false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull:false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull:false
    },
    logo:{
        type: DataTypes.STRING,
        allowNull:false
    },
    
    companyname: {
        type: DataTypes.STRING,
        allowNull:false
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull:false
        },
    status:{
        type:DataTypes.BOOLEAN,
        allowNull:false
        }
},{
    sequelize,
    modelName: 'retailer',
})

export default Retailer;