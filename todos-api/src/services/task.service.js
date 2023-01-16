const path = require('path')
const fs = require('fs/promises')

const jsonPath = path.resolve('./data.json')

const getLastId = (dataArray) => {
  const lastElementIndex = dataArray.length - 1
  return Number(dataArray[lastElementIndex].id) + 1
}

class TaskServices {
  static async getAllTasksInFile() {
    // logica ara recuperar el archivo y devolverlo.
    try {
      const jsonFile = await fs.readFile(jsonPath, 'utf8')

      return jsonFile
    } catch (error) {
      throw error
    }
  }
  static async createTaskInFile(newTask) {
    // logica ara recuperar el archivo y devolverlo.
    try {
      const jsonFile = await fs.readFile(jsonPath, 'utf8')
      const taskArray = JSON.parse(jsonFile)
      const lastId = getLastId(taskArray)
      taskArray.push({ ...newTask, id: lastId })
      await fs.writeFile(jsonPath, JSON.stringify(taskArray))
      return []
    } catch (error) {
      throw error
    }
  }
  static async updateTaskInFile(updateTask,id) {
    // logica ara recuperar el archivo y devolverlo.
    try {
      const jsonFile = await fs.readFile(jsonPath, 'utf8')
      const taskArray = JSON.parse(jsonFile)
      const taskIndex = taskArray.findIndex((task) => task.id === id)
      taskArray[taskIndex] = {...updateTask}
      await fs.writeFile(jsonPath, JSON.stringify(taskArray))
      return []
    } catch (error) {
      throw error
    }
  }

  static async deleteTaskInFile(id) {
    // logica ara recuperar el archivo y devolverlo.
    try {
      const jsonFile = await fs.readFile(jsonPath, 'utf8')
      const taskArray = JSON.parse(jsonFile)
      const taskIndex = taskArray.findIndex((task) => task.id == id)
      if(taskIndex>=0)
      {taskArray.splice(taskIndex,1)
      await fs.writeFile(jsonPath, JSON.stringify(taskArray))
      return []
      }else{

        return ["not found"]
   
      }
    } catch (error) {
      throw error
    }
  }

}

module.exports=TaskServices