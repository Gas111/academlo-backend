const videoServices=require("../services/videos.service")

const getAllvideos = async (req, res) => {
  try {
    const result= await videoServices.getAll()
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error)
  }
}

const getvideoById = async (req, res) => {
  try {
    const { id } = req.params
    const result=await videoServices.getById(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error)
  }
}



const getvideoWithCourse = async (req, res) => {
  try {
    const { id } = req.params
    const result=await videoServices.getWithCourse(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

// const getvideoByvideoName = async (req, res) => {
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
  getUserWithCourse,
//   getUserByUserName,
}
