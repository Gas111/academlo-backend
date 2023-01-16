const express = require('express')
const db = require('./utils/database')
const initModels = require('./models/init.model')
const Users = require('./models/users.model')
const Todos = require('./models/todos.model')

const app = express()

app.use(express.json())

//const tasksRoutes= require("./routes/tasks.routes")
//app.use(express.json())
// Router es un middleware)
//app.use("/api/v1",tasksRoutes)

const PORT = 8000

db.authenticate()
  .then(() => console.log('autenticacion exitosa'))
  .catch((error) => console.log(error))

initModels()
db.sync({ alter: false })
  .then(() => console.log('Base de datos sincronizada'))
  .catch((error) => console.log(error))

// force:false or true si quiero que no se

app.get('/', (req, res) => {
  res.status(200).json({ message: 'bienvenido al servidor' })
})

//define the routes of ours endpoints

//localhost:8000/users
//localhost:8000/todos

app.get('/users', async (req, res) => {
  try {
    const result = await Users.findAll()

    res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
})

app.get('/users/:id', async (req, res) => {
  try {
    console.log(req.params)
    const { id } = req.params
    const result = await Users.findByPk(id)
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
})

app.get('/users/username/:username', async (req, res) => {
  try {
    console.log(req.params)
    const { username } = req.params
    const result = await Users.findOne({ where: { username } })
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
})

app.post('/users', async (req, res) => {
  try {
    const user = req.body
    const result = await Users.create(user)
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json({ message: 'error' })
    console.log(error)
  }
})

app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params
    const field = req.body
    const result = await Users.update(field, { where: { id } })
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json({ message: 'error' })
    console.log(error)
  }
})

app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params
    const result = await Users.destroy({ where: { id } })
    res.status(20).json(result)
  } catch (error) {
    res.status(400).json({ message: 'error' })
    console.log(error)
  }
})

// ----------------TODOSSSSSS-----------------

app.get('/todos', async (req, res) => {
  try {
    const result = await Todos.findAll()

    res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
})

app.get('/todos/:id', async (req, res) => {
  try {
    console.log(req.params)
    const { id } = req.params
    const result = await Todos.findByPk(id)
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
})

app.get('/todos/title/:title', async (req, res) => {
  try {
    console.log(req.params)
    const { title } = req.params
    const result = await Todos.findOne({ where: { title } })
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
})

app.post('/todos', async (req, res) => {
  try {
    const todo = req.body
    const result = await Todos.create(todo)
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json({ message: 'error' })
    console.log(error)
  }
})

app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const field = req.body
    const result = await Todos.update(field, { where: { id } })
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json({ message: 'error' })
    console.log(error)
  }
})

app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const result = await Todos.destroy({ where: { id } })
    res.status(20).json(result)
  } catch (error) {
    res.status(400).json({ message: 'error' })
    console.log(error)
  }
})

app.listen(PORT, () => {
  console.log('servidor corriendo en port 8000')
})

// module.exports=app
