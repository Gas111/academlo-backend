const { Sequelize } = require("sequelize")
const db= require("../utils/database")
//types of sequelize

const {DataTypes}= require("sequelize")


const Users=db.define("users",{
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail:true,
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },




},{
  timestamps:false,
})

module.exports=Users