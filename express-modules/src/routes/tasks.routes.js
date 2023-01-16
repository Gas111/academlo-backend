// express.Router()
// trabaja como intermediario entre las peticiones q se realicen con las rutas a las q responde
// es un middleware

const express=require("express")
const router=express.Router()

const {getAllTasks,createTask,updateTask,deleteTask}=require("../controllers/task.controllers")

router.get("/tasks",getAllTasks)

router.post("/tasks",createTask)
router.put("/tasks/:id",updateTask)
router.delete("/tasks/:id",deleteTask)

module.exports=router