import express from 'express';
import eventController from '../controllers/event.controller.js';
import { logPostEvent } from '../middlewares/example.middleware.js';
import { isAdmin } from '../middlewares/isAdmin.middleware.js';
import passport from '../middlewares/passport.js';

const router = express.Router();

const { getEvents, createEvent, getEventById, updateEvent, deleteEvent } = eventController;

router.get('/', getEvents)
router.post('/', passport.authenticate('jwt', { session: false }), logPostEvent, createEvent)

router.get('/:id', /* validator(createEventSchema), */getEventById)

router.put('/:id', updateEvent)

router.delete('/:id',
    isAdmin,
    deleteEvent // Esto solo se ejecuta si el middleware isAdmin verifica que el usuario es "admin"
)

export default router;