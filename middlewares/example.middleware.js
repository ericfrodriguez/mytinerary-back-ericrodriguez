export const logPostEvent = (req, res, next) => {
    console.log('Peticion POST Events ejecutada')

    next()
}