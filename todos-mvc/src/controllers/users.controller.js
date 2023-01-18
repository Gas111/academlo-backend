const UserServices=require("../services/user.service")


const getAllUsers = async (req, res) => {
  try {
    const result= await UserServices.getAll()
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error)
  }
}

const getUserById = async (req, res) => {
  try {
    const { id } = req.params
    const result=await UserServices.getById(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error)
  }
}



const getUserWithTasks = async (req, res) => {
  try {
    const { id } = req.params
    const result=await UserServices.getWithTasks(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

// const getUserByUserName = async (req, res) => {
//   try {
//     console.log(req.params)
//     const { username } = req.params
//     const result = await Users.findOne({ where: { username } })
//     res.status(200).json(result)
//   } catch (error) {
//     console.log(error)
//   }
// }
const createUser = async (req, res) => {
  try {
    const user = req.body
    const result= await UserServices.create(user)
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json(error)
  }
}
const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const field = req.body
    const result = await UserServices.update(field,id)
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json(error.message)
    console.log(error)
  }
}
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const result = await UserServices.delete(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
    console.log(error)
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserWithTasks,
//   getUserByUserName,
}
