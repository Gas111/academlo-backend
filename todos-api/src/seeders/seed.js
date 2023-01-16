const db = require('../utils/database')
const Users = require('../models/users.model')
const Todos = require('../models/todos.model')

const users = [
  {
    username: 'fasd1',
    email: 'fas1d@gmail.com',
    password: '1234',
  },
  { username: 'fasd2', email: 'fasd1@gmail.com', password: '1234' },
  { username: 'fasd3', email: 'fas2d@gmail.com', password: '1234' },
]
const todos = [
  { title: 'tarea1', description: 'afdsads', userId: 1 },
  { title: 'tarea2', description: 'afdsads', userId: 1 },
]
// const categories=[{}]
// const categoriesInTasks=[{}]

db.sync({ force: true })//es para crear todo desde cero
  .then(() => {
    console.log('inicio')
    users.forEach((user) => Users.create(user))
    setTimeout(()=>{
      todos.forEach((todo)=>Todos.create(todo))
    },100)
  })
  .catch((error) => console.log(error))
