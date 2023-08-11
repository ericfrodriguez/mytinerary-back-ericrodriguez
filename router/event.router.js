import express from 'express';
import eventController from '../controllers/event.controller.js';

const router = express.Router();

router.get('/', eventController.getEvents)

router.post('/', eventController.createEvent)

export default router;