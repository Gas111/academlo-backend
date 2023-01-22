const Courses = require('../models/courses.models')
const categories = require('../models/categories.models')

class CategorieServices {
  static async getAll() {
    try {
      const result = await categories.findAll()
      return result
    } catch (error) {
      throw error
    }
  }

  static async getById(id) {
    try {
      const result = await categories.findOne({where:{id}})
      return result
    } catch (error) {
      throw error
    }
  }

  static async create(category) {
    try {
      const result = await categories.create(category)
      return result
    } catch (error) {
      throw error
    }
  }
  static async delete(id) {
    try {
      
        const result = await categories.destroy({ where: { id } })
        return (result)
      } catch (error) {
        throw (error)
    }

  }
}

module.exports = CategorieServices
