export const validator = (schema) => [
    (req, res, next) => {

        const validation = schema.validate(req.body, {abortEarly: false});

        // En caso de error respondo con el array de todos los mensajes
        if(validation.error) {
            return res.status(400).json({
                success: false,
                message: validation.error.details.map(error => error.message)
            })
        }

        // En caso de exito, voy a pasar al siguiente middleware
        return next();
    }
]