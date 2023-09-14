import Joi from 'joi';

const email = Joi.string()
    .required()
    .email({
        minDomainSegments: 2
    })
    .messages({
        'any.required': 'El email es requerido'
    });

const password = Joi.string()
    .required()
    .min(8)
    .max(35)
    .alphanum();

export const userSignUp = Joi.object({
    email,
    password,
    name: Joi.string()
        .min(2)
        .max(50),
    // .regex(Solo caracteres alfabeticos),
    photo: Joi.string()
        .required()
        .uri()
})

export const userSignIn = Joi.object({
    email,
    password,
})