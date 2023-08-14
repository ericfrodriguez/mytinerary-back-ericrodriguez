import express from 'express';
import eventController from '../controllers/event.controller.js';

const router = express.Router();

const {getEvents, createEvent, getEventById} = eventController;

router.get('/', getEvents)

router.get('/:id', getEventById)

router.post('/', createEvent)

export default router;