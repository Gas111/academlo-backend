const express = require('express')
const db = require('./utils/database')
const initModels = require('./models/init.model')
const userRoutes = require('./routes/users.routes')
const TodoRoutes = require('./routes/todos.routes')

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
db.sync({ force: false })
  .then(() => console.log('Base de datos sincronizada'))
  .catch((error) => console.log(error))

// force:false or true si quiero que no se

app.use('/api/v1', userRoutes)
app.use('/api/v1', TodoRoutes)

app.get('/', (req, res) => {
  res.status(200).json({ message: 'bienvenido al servidor' })
})

app.listen(PORT, () => {
  console.log('servidor corriendo en port 8000')
})

// module.exports=app
