import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        cities: [
            {name: 'Buenos Aires'},
            {name: 'Paris'},
        ]
    });
})

export default router;