const{Sequelize}=require("sequelize")
const db=new Sequelize({
    database:"videoapp",
    username:"postgres",
    host:"localhost",
    port:"5433",
    password:"root",
    dialect:"postgres",
})
module.exports=db

