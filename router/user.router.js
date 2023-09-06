import express from 'express';
import userController from '../controllers/user.controller.js';
import { validator } from '../middlewares/validator.js';
import { createUserSchema } from '../schema/user.schema.js'

const router = express.Router();

router.get('/', userController.getUsers);

router.post('/', validator(createUserSchema),userController.createUser);

export default router;