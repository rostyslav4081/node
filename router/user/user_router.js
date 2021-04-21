const  { Router } = require('express');

const  { userMiddleware, validationMiddleware } = require('../../middleware');
const { userController } = require('../../controller');

const userRouter = Router()

userRouter.get('/', userController.findAll);

userRouter.post('/', validationMiddleware.isUserCreateCorrect, userController.createUser);
// userRouter.put('/:userId', validationMiddleware.isIdCorrect, validationMiddleware.isUserCorrect, userMiddleware.checkIsUserRegisteredById, userController.findAll);

userRouter.use('/:userId', validationMiddleware.isIdCorrect, userMiddleware.checkIsUserRegisteredById);
userRouter.get('/:userId', userController.findById);

userRouter.delete('/:userId', userController.findAll);
userRouter.put('/:userId', validationMiddleware.isUserUpdateCorrect, userController.findAll);

module.exports = userRouter;
