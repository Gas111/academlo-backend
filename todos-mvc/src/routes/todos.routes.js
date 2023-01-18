const { Router } = require('express')

const {
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
//   gettodoBytodoName,
} = require('../controllers/todos.controller')
const router = Router()
const { getAllTodos } = require('../controllers/todos.controller')

router.get('/todos', getAllTodos)
router.get('/todos/:id', getTodoById)
// router.get('/todos/todoname/:todoname', gettodoBytodoName)
router.post('/todos', createTodo)
router.put('/todos/:id', updateTodo)
router.delete('/todos/:id', deleteTodo)

module.exports = router
