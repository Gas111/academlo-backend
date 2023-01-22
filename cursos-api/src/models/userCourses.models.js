const db = require('../utils/database')
const Courses = require('./courses.models')
const Users = require('./users.model')
const { DataTypes } = require('sequelize')
const UserCourses = db.define('users_courses', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field:"user_id",
    references: {
      model: Users,
      key: 'id',
    },
   
  },
  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field:"course_id",
    references: {
      model: Courses,
      key: 'id',
    },
   },
})

module.exports = UserCourses