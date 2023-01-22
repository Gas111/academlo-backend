
const Categories = require('../models/categories.models')
const Courses = require('../models/courses.models')
const Videos = require('../models/videos.models')

class CourseServices {
  static async getAll() {
    try {
      const result = await Courses.findAll()
      return result
    } catch (error) {
      throw error
    }
  }

  static async getById(id) {
    try {
      const result = await Courses.findByPk(id)
      return result
    } catch (error) {
      throw error
    }
  }

  static async getWithCategories(id) {
    try {
      const result = await Courses.findOne({where:{id},include:{model:Categories,as:"category",include:{model:Videos, as:"videos"}}})
      return result
    } catch (error) {
      throw error.message
    }
  }

  static async create(Course) {
    try {
      const result = await Courses.create(Course)
      return result
    } catch (error) {
      throw error
    }
  }
  static async update(field,id) {
    try {
         
            const result = await Courses.update(field, { where: { id } })
            return result
          } catch (error) {
            throw (error)
          }

  }
  static async delete(id) {
    try {
      
        const result = await Courses.destroy({ where: { id } })
        return (result)
      } catch (error) {
        throw (error)
    }

  }
}

module.exports = CourseServices
