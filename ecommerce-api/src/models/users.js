const Sequelize = require('sequelize');
const bcrypt=require("bcrypt")
module.exports = (sequelize, DataTypes) => {
  return users.init(sequelize, DataTypes);
}


/**
 * @openapi
 * components:
 *   schemas:
 *     register:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: gas332
 *         email:
 *           type: string
 *           example: gaston@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: gaston@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     loginResponse:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: gas1123
 *         id:
 *           type: int
 *           example: 2
 *         email:
 *           type: string
 *           example: rosas@gmail.com
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJhZHNmYXNkIiwibGFzdG5hbWUiOiJkY2FmZGEiLCJpZCI6OSwiZW1haWwiOiI4NzcyMmRzQGdtYWlsLmNvbSIsImlhdCI6MTY3NDk2MDI1NiwiZXhwIjoxNjc0OTYwODU2fQ.sj_U2V0Mh-yusASBeLStnBzvOICLBJxYC3F4qoEDeabtKw1lRpVaijxSUz0FUv9Ay3x8YPo3Z33H9BQClehGhw
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */



class users extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: "users_email_key"
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        const { password } = user
        const hash = bcrypt.hashSync(password, 10)
        user.password = hash
      },
    },
    sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
