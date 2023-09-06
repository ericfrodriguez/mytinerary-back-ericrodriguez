import express from 'express';
import authController from '../controllers/auth.controller.js';
import { accountExistsSignup } from '../middlewares/auth/accountExistsSignup.middleware.js';
import { accountExistsSignin } from '../middlewares/auth/accountExistsSignin.middleware.js';
import { accountHasBeenVerified } from '../middlewares/auth/accountHasBeenVerified.middleware.js';
import { passwordIsOk } from '../middlewares/auth/passwordIsOk.middleware.js';

const { signup, signin } = authController;

const router = express.Router();

router.post('/signup',
    /* validator(validateSignup), */
    accountExistsSignup,
    signup)

router.post('/signin',
    /* validator(validateSignup), */
    accountExistsSignin,
    accountHasBeenVerified,
    passwordIsOk,
    signin)

export default router;

