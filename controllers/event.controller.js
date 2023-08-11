import Event from "../models/Event.js"

const controller = {
    getEvents: async (req, res) => {

        let queries = {}

        if(req.query.name) {
            queries.name = req.query.name
        }

        try {
            const events = await Event.find(queries)

            return res.status(200).json({
                success: true,
                events: events
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error al obtener los eventos'
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