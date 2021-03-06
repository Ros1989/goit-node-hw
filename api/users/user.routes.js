const { Router } = require('express')
const UserController = require('./user.controller')

const userRouter = Router()

userRouter.get('/users/current', UserController.authorize, UserController.getCurrentUser)
userRouter.post('/auth/register', UserController.validateUser, UserController.signUp)
userRouter.put('/auth/login', UserController.validateUser, UserController.signIn)
userRouter.put('/auth/logout', UserController.authorize, UserController.logout)
userRouter.patch('/users', UserController.authorize, UserController.subscriptionUpdate)



module.exports = userRouter