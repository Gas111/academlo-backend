const express = require('express')
const path = require('path')
const fs = require('fs/promises')
const app = express()

const jsonPath = path.resolve('./data.json')

//middleware para leer json


app.get('/api/v1/tasks', async (req, res) => {
  const jsonFile = await fs.readFile(jsonPath, 'utf8')
  res.status(200) //el send envia y cierra la conexion
  res.send(jsonFile)
  // res.end()
})

app.post('/api/v1/tasks', async (req, res) => {
  const newTask = req.body
  const jsonFile = await fs.readFile(jsonPath, 'utf8')
  const taskArray = JSON.parse(jsonFile)
  taskArray.push({ ...newTask, id: getLastId(taskArray) })
  await fs.writeFile(jsonPath, JSON.stringify(taskArray))

  res.status(201)
  res.send(jsonFile)
  // res.end()
})
app.put('/api/v1/tasks', async (req, res) => {
  const jsonFile = await fs.readFile(jsonPath, 'utf8')
  const taskArray = JSON.parse(jsonFile)

  const { id, status } = req.body
  const taskIndex = taskArray.findIndex((task) => task.id == id)
  taskArray[taskIndex].status = status
  await fs.writeFile(jsonPath, JSON.stringify(taskArray))
  res.status(201)
  res.send(taskArray)
})
app.patch('/api/v1/tasks', (req, res) => {})

app.delete('/api/v1/tasks', async (req, res) => {
    const jsonFile = await fs.readFile(jsonPath, 'utf8')
    const taskArray = JSON.parse(jsonFile)
    const { id } = req.body
    const taskIndex = taskArray.findIndex((task) => task.id == id)
    taskArray.splice(taskIndex,1)
    await fs.writeFile(jsonPath, JSON.stringify(taskArray))
    res.status(200)
    res.send(taskArray)


})


// armar servidor con un usuario

// id:number
// email:string
// name:string
// password:string


// servicios 
// gratuitos. 
// render, heroku, railwell