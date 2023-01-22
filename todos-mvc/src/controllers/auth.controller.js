const jwt = require('jsonwebtoken')
const AuthService = require('../services/auth.service')

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body
    const response = await AuthService.login(email, password)
    if (response.isValid) {
      const data = {
        email: response.result.email,
        username: response.result.username,
        id: response.result.id,
      }
      
      const token = jwt.sign(data, 'shalala', { algorithm: 'HS512' })
      data.token=token
      console.log(data)
      res.json(data)
    }

    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = {
  userLogin,
}
