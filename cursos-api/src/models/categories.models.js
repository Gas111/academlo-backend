const db = require('../utils/database')
const Courses = require('./courses.models')
const { DataTypes } = require('sequelize')
const Categories = db.define('categories', {
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

module.exports = Categories
