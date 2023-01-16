const TaskServices = require('../services/task.service')

const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskServices.getAllTasksInFile()
    res.send(tasks)
  } catch (error) {
    console.log(error)
  }
}

const createTask = async (req, res) => {
  try {
    const newTask = req.body
    const task = await TaskServices.createTaskInFile(newTask)
    res.json(task)
  } catch (error) {
    console.log(error)
  }
}

const updateTask = async (req, res) => {
  try {
    const updateTask = req.body
    const { id } = req.params
    const result = await TaskServices.updateTaskInFile(updateTask, id)
    if (result == []) {
      res.status(201)
      res.json(result)
    } else {
      res.status(401)
      res.end()
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params
    console.log(id)

    const result = await TaskServices.deleteTaskInFile(id)
    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getAllTasks, deleteTask, updateTask, createTask }
