const { Router } = require('express')
const { Model } = require('sequelize')
const {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserWithTasks,
//   getUserByUserName,
} = require('../controllers/users.controller')
const router = Router()
const { getAllUsers } = require('../controllers/users.controller')

router.get('/users', getAllUsers)
router.get('/users/:id', getUserById)

// router.get('/users/username/:username', getUserByUserName)
router.get('/users/:id/tasks', getUserWithTasks)
router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

module.exports = router
