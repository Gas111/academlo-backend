const TodoServices=require("../services/todo.service")


const getAllTodos = async (req, res) => {
  try {
    const result= await TodoServices.getAll()
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error)
  }
}

const getTodoById = async (req, res) => {
  try {
    const { id } = req.params
    const result=await TodoServices.getById(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error)
  }
}

// const getTodoByTodoName = async (req, res) => {
//   try {
//     console.log(req.params)
//     const { Todoname } = req.params
//     const result = await Todos.findOne({ where: { Todoname } })
//     res.status(200).json(result)
//   } catch (error) {
//     console.log(error)
//   }
// }
const createTodo = async (req, res) => {
  try {
    const todo = req.body
    const result= await TodoServices.create(todo)
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json(error)
  }
}
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params
    const field = req.body
    const result = await TodoServices.update(field,id)
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json(error.message)
    console.log(error)
  }
}
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params
    const result = await TodoServices.delete(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)

  }
}

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
//   getUserByUserName,
}
