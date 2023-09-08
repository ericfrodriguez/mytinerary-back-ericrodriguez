import Company from "../models/Company.js";

const controller = {
    getCompany: async (req, res) => {
        try {
            const companies = await Company.find().populate('events');

            return res.status(200).json({
                success: true,
                companies
            })

        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: false,
                message: 'Error al crear un usuario'
            })
        }
    },
    createCompany: async (req, res) => {
        try {
            const newCompany = await Company.create(req.body);

            return res.status(200).json({
                success: true,
                message: 'Usuario creado con exito'
            })

        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: false,
                message: 'Error al crear un usuario'
            })
        }
    },
    deleteCompany: () => {},
}

export default controller;