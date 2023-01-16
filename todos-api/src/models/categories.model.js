const { Sequelize } = require("sequelize")
const db= require("../utils/database")
//types of sequelize

const {DataTypes}= require("sequelize")
const CategoriesInTasks = require("./categories.in.tasks.model")

const Categories=db.define("categories",{
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        references: {
          model: CategoriesInTasks,
          key: 'id',
        },

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