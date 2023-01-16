// table categories_in_tasks{
//     id int [pk, increment, not null]
//     todos_id int [not null]
//     category_id int [not null]
     
   
//    }
   
const { Sequelize } = require("sequelize")
const db= require("../utils/database")
//types of sequelize
const Todos=require("./todos.model")
const Categories=require("./categories.model")
const {DataTypes}= require("sequelize")


const CategoriesInTasks=db.define("categories_in_tasks",{
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
    todosId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      field:"todos_id",
      references: {
        model: Todos,
        key: 'id',
      },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        field:"category_id",
        references: {
          model: Categories,
          key: 'id',
        },
        },

},{
  timestamps:false,
})
module.exports=CategoriesInTasks

