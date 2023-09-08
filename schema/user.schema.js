import Joi from 'joi';


export const userSignUp = Joi.object({
    email: Joi.string()
        .required()
        .email({
            minDomainSegments: 2
        })
        .messages({
            'any.required': 'El email es requerido'
        }),
    password: Joi.string()
        .required()
        .min(8)
        .max(35)
        .alphanum(),
    name: Joi.string()
        .min(2)
        .max(50),
    // .regex(Solo caracteres alfabeticos),
    photo: Joi.string()
        .required()
        .uri()
})