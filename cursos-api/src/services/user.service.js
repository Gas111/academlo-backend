const Courses = require('../models/courses.models')
const Users = require('../models/users.model')

class UserServices {
  static async getAll() {
    try {
      const result = await Users.findAll()
      return result
    } catch (error) {
      throw error
    }
  }

  static async getById(id) {
    try {
      const result = await Users.findOne({where:{id},attributes:["username","email"]})
      return result
    } catch (error) {
      throw error
    }
  }

  static async getWithCourse(id) {
    try {
      const result = await Users.findOne({where:{id},attributes:["username","email"],include:{model:Courses,as:"course",attributes:["title"]}})
      return result
    } catch (error) {
      console.log("Servicio, no encuentra courses")
      throw error
    }
  }

  static async create(user) {
    try {
      const result = await Users.create(user)
      return result
    } catch (error) {
      throw error
    }
  }
  static async update(field,id) {
    try {
         
            const result = await Users.update(field, { where: { id } })
            return result
          } catch (error) {
            throw (error)
          }

  }
  static async delete(id) {
    try {
      
        const result = await Users.destroy({ where: { id } })
        return (result)
      } catch (error) {
        throw (error)
    }

  }
}

module.exports = UserServices
