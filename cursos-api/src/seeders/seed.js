const Categories = require('../models/categories.models')
const Courses = require('../models/courses.models')
const UserCourses = require('../models/userCourses.models')
const Users = require('../models/users.model')
const Videos = require('../models/videos.models')
const db = require('../utils/database')


const users = [
  {
    username: 'fasd1',
    email: 'fas1d@gmail.com',
    password: '1234',
  },
  { username: 'fasd2', email: 'fasd1333@gmail.com', password: '1234' },
  { username: 'fasd3', email: 'fas2d@gmail.com', password: '1234' },
]
const courses = [
    {
      title: 'clase nro1 maths',
      description: 'class off xxx',
      instructor: 'prof123476',
    },
    { title: 'biology', description: 'fasd1333', instructor: 'prof1234' },
    { title: 'algebraic', description: 'fas2d', instructor: 'prof12345' },
  ]
  

const categories = [
  {name: 'python',courseId:1},
  { name: 'javascript',courseId:2 },
  
]

const videos = [
    {title:"sadklfj",url: 'https:',courseId:1},
    {title:"sadklfjsdaf", url: 'https:df',courseId:2 },
    
  ]
  


const userCourses = [
  {
    userId: 1,
    courseId: 1,
  },
  {
    userId: 1,
    courseId: 2,
  },
  {
    userId: 2,
    courseId: 2,
  },
]

db.sync({ force:true}) //es para crear todo desde cero(true toma de nuevo los valores)
  .then(() => {
    console.log('inicio')
    users.forEach((user) => Users.create(user))
   setTimeout(() => {
      courses.forEach((c) => Courses.create(c))
    }, 100)



    setTimeout(() => {
      userCourses.forEach((uc) => UserCourses.create(uc))
    }, 300)

 

    setTimeout(() => {
      categories.forEach((c) => Categories.create(c))
    }, 600)
    setTimeout(() => {
        videos.forEach((c) => Videos.create(c))
      }, 900)
 
  })
  .catch((error) => console.log(error))
