const express=require("express")
const app=express()
const cors=require("cors")
const morgan=require("morgan")
const db= require("./utils/database")
const initModels= require("./models/init.models")
const usersRoutes = require('./routes/users.routes')
const coursesRoutes = require('./routes/courses.routes')

app.use(express.json())
app.use(cors()) //origens x
app.use(morgan("tiny")) //velocity and log

db.authenticate()
  .then(() => console.log('autenticacion exitosa'))
  .catch((error) => console.log(error))

initModels()
db.sync({ alter: true })
  .then(() => console.log('Base de datos sincronizada'))
  .catch((error) => console.log(error))


  
app.use('/api/v1', usersRoutes)
app.use('/api/v1', coursesRoutes)
// app.use('/api/v1', categoriesRoutes)
// app.use('/api/v1', videosRoutes)



  app.get("/",(req,res)=>{
    res.json({message:"welcome to my server"})
})


module.exports=app

