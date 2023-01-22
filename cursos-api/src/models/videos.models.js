const db = require('../utils/database')
const Courses = require('./courses.models')
const { DataTypes } = require('sequelize')
const Videos = db.define('videos', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    // validate: {
    //     isUrl:true,
    //   },
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

module.exports = Videos