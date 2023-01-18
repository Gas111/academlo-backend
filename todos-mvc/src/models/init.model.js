const Users=require("./users.model")
const Todos=require("./todos.model")
const Categories=require("./categories.model")
const CategoriesInTasks=require("./categories.in.tasks.model")
const initModels = () => {
    // Users
    // Todos
    // Categories
    // CategoriesInTasks
//     hasOne
//     hasMany
//     belongsTo pertence a (esta la llave foranea)
Todos.belongsTo(Users,{as:"author", foreignKey:"user_id"}) //
Users.hasMany(Todos,{as:"task", foreignKey:"user_id"})
CategoriesInTasks.belongsTo(Todos,{as:"task", foreignKey:"todos_id"})
Todos.hasMany(CategoriesInTasks,{as:"category", foreignKey:"todos_id"})
CategoriesInTasks.belongsTo(Categories,{as:"category", foreignKey:"category_id"})
Categories.hasMany(CategoriesInTasks,{as:"task", foreignKey:"category_id"})


}

module.exports=initModels