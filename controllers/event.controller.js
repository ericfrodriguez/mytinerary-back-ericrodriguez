import Event from "../models/Event.js"

const controller = {
    getEvents: async (req, res) => {

        let queries = {}

        if(req.query.name) {
            queries.name = new RegExp(`^${req.query.name}`, 'i')
        }

        if(req.query.category) {
            queries.category = req.query.category
        }

        try {
            const events = await Event.find(queries).populate('user');

            if(events.length > 0) {
                return res.status(200).json({
                    success: true,
                    events: events
                })
            }

            return res.status(404).json({
                success: false,
                message: 'No se encontraron eventos'
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error al obtener los eventos'
            })
        }
    },
    getEventById: async (req, res) => {
        try {
            // console.log(req.params)
            const oneEvent = await Event.findById(req.params.id)

            if(oneEvent) {
                return res.status(200).json({
                    success: true,
                    event: oneEvent
                })
            }

            return res.status(404).json({
                success: false,
                message: 'No se pudo encontrar el evento'
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error al obtener el evento'
            })
        }
    },
    createEvent: async (req, res) => {
        try {
            const newEvent = await Event.create(req.body);
    
            return res.status(201).json({
                success: true,
                message: 'Evento creado'
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error al crear el evento'
            })
        }
    }
}

export default controller;