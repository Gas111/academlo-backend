const Courses = require('../models/courses.models')
const videos = require('../models/videos.model')

class VideoServices {
  static async getAll() {
    try {
      const result = await videos.findAll()
      return result
    } catch (error) {
      throw error
    }
  }

  static async getById(id) {
    try {
      const result = await videos.findOne({where:{id}})
      return result
    } catch (error) {
      throw error
    }
  }

  static async create(video) {
    try {
      const result = await videos.create(video)
      return result
    } catch (error) {
      throw error
    }
  }
  static async delete(id) {
    try {
      
        const result = await videos.destroy({ where: { id } })
        return (result)
      } catch (error) {
        throw (error)
    }

  }
}

module.exports = VideoServices
