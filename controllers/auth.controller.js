import crypto from 'crypto'
import bcryptjs from 'bcryptjs'
import User from '../models/User.js';

const controller = {
    signup: async (req, res, next) => {
        try {
            req.body.verified_code = crypto.randomBytes(10).toString('hex');
            req.body.password = bcryptjs.hashSync(req.body.password, 10);

            const user = await User.create(req.body)
            
            return res.status(201).json({
                success: true,
                message: 'Usuario registrado!'
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error al registrar el usuario'
            })
        }
    },
    signin: async (req, res, next) => {
        try {
            let user = await User.findOneAndUpdate(
                {email: req.user.email},
                {online: true},
                {new: true}
            )
            
            user.password = null;

            return res.status(200).json({
                success: true,
                message: 'Usuario logueado correctamente',
                response: {
                    user: {
                        name: user.name,
                        email: user.email,
                        photo: user.photo
                    },
                    // token
                }
            })

        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error al autenticar el usuario'
            })
        }
    }
}

export default controller;