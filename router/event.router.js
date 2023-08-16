import express from 'express';
import eventController from '../controllers/event.controller.js';

const router = express.Router();

const {getEvents, createEvent, getEventById, updateEvent, deleteEvent} = eventController;

router.get('/', getEvents)
router.post('/', createEvent)

router.get('/:id', getEventById)

router.put('/:id', updateEvent)

router.delete('/:id', deleteEvent)

export default router;