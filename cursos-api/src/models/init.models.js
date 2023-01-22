const Categories = require("./categories.models")
const Courses = require("./courses.models")
const UserCourses = require("./userCourses.models")
const Users = require("./users.model")
const Videos = require("./videos.models")

const initModels=()=>{

    Users.hasMany(UserCourses,{as:"course", foreignKey:"user_id"})
    UserCourses.belongsTo(Users,{as:"author", foreignKey:"user_id"})


    UserCourses.belongsTo(Courses,{as:"course", foreignKey:"course_id"})
    Courses.hasMany(UserCourses,{as:"author", foreignKey:"course_id"})
    
    Courses.hasMany(Categories,{as:"category", foreignKey:"course_id"})
    Categories.belongsTo(Courses,{as:"coursec", foreignKey:"course_id"})
    
    Courses.hasMany(Videos,{as:"videos", foreignKey:"course_id"})
    Categories.belongsTo(Courses,{as:"coursev", foreignKey:"course_id"})

}

module.exports=initModels