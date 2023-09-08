import User from "../../models/User.js"

export const accountExistsSignup = async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if(user) {
        return res.status(400).json({
            success: false,
            message: 'El usuario ya está registrado'
        })
    }

    return next()
}