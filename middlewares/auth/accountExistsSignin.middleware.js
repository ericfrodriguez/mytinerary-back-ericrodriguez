import User from "../../models/User.js"

export const accountExistsSignin = async (req, res, next) => {
    const user = await User.findOne({email: req.body.email});

    if(user) {
        req.user = {
            id: user._id,
            email: user.email,
            photo: user.photo,
            password: user.password,
            online: user.online,
            verified: user.verified
        }

        return next()
    }

    return res.status(400).json({
        success: false,
        message: 'Usuario no registrado'
    })
}