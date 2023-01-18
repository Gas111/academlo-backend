const db = require('../utils/database')
const Users = require('../models/users.model')
const Todos = require('../models/todos.model')
const Categories = require('../models/categories.model')
const CategoriesInTasks = require('../models/categories.in.tasks.model')

const users = [
  {
    username: 'fasd1',
    email: 'fas1d@gmail.com',
    password: '1234',
  },
  { username: 'fasd2', email: 'fasd1333@gmail.com', password: '1234' },
  { username: 'fasd3', email: 'fas2d@gmail.com', password: '1234' },
]
const todos = [
  { title: 'Estudiar Node', description: 'afdsads', userId: 1 },
  { title: 'Pasear el perro', description: 'afdsads', userId: 1 },
  { title: 'Pasear el perro', description: 'afdsads', userId:2 },
]
const categories = [
  {name: 'personal'},
  { name: 'educacion' },
  { name: 'salud' },
  { name: 'trabajo' },
  { name: 'hogar'},
  { name: 'cocina' },
  { name: 'deporte' },
  { name: 'ocio' },
  { name: 'financiero' },
  { name: 'entretenimiento' },
  
]

const categoriesInTasks = [
  {
    categoryId: 1,
    todosId: 1,
  },
  {
    categoryId: 3,
    todosId: 2,
  },
  {
    categoryId: 1,
    todosId: 2,
  },
]

db.sync({ force: true }) //es para crear todo desde cero(true toma de nuevo los valores)
  .then(() => {
    console.log('inicio')
    users.forEach((user) => Users.create(user))

    setTimeout(() => {
      todos.forEach((todo) => Todos.create(todo))
    }, 100)

    setTimeout(() => {
      categories.forEach((category) => Categories.create(category))
    }, 300)

    setTimeout(() => {
      categoriesInTasks.forEach((cit) => CategoriesInTasks.create(cit))
    }, 600)
  })
  .catch((error) => console.log(error))
