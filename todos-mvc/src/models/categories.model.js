const { Sequelize } = require("sequelize")
const db= require("../utils/database")
//types of sequelize

const {DataTypes}= require("sequelize")
const Categories=db.define("categories",{
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

   

},{
  timestamps:false,
}


)
module.exports=Categories