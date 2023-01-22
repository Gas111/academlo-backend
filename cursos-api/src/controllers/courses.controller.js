const CourseServices=require("../services/course.service")


const getAllCourses = async (req, res) => {
  try {
    const result= await CourseServices.getAll()
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error)
  }
}

const getCourseById = async (req, res) => {
  try {
    const { id } = req.params
    const result=await CourseServices.getById(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error)
  }
}

const getCourseWithCategory = async (req, res) => {
  try {
    const { id } = req.params
    const result=await CourseServices.getWithCategories(id)
    res.status(200).json(result)
  } catch (error) {
   res.status(400).json(error)
  }
}

// const getCourseByCourseName = async (req, res) => {
//   try {
//     console.log(req.params)
//     const { Coursename } = req.params
//     const result = await Courses.findOne({ where: { Coursename } })
//     res.status(200).json(result)
//   } catch (error) {
//     console.log(error)
//   }
// }
const createCourse = async (req, res) => {
  try {
    const Course = req.body
    const result= await CourseServices.create(Course)
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json(error)
  }
}
const updateCourse = async (req, res) => {
  try {
    const { id } = req.params
    const field = req.body
    const result = await CourseServices.update(field,id)
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json(error.message)
    console.log(error)
  }
}
const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params
    const result = await CourseServices.delete(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)

  }
}

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  getCourseWithCategory,
//   getUserByUserName,
}
