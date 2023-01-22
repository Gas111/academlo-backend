const { Router } = require('express')

const {
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  getCourseWithCategory,
//   getCourseByCourseName,
} = require('../controllers/courses.controller')
const router = Router()
const { getAllCourses } = require('../controllers/courses.controller')

router.get('/courses', getAllCourses)
router.get('/courses/:id', getCourseById)
router.get('/courses/:id/category', getCourseWithCategory)

// router.get('/Courses/Coursename/:Coursename', getCourseByCourseName)
router.post('/courses', createCourse)
router.put('/courses/:id', updateCourse)
router.delete('/courses/:id', deleteCourse)

module.exports = router
