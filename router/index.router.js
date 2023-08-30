import express from 'express';
import userRouter from './user.router.js';
import eventRouter from './event.router.js';
import companyRouter from './company.router.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello world')
});

router.use('/users', userRouter);

router.use('/events', eventRouter);

router.use('/companies', companyRouter);

export default router;