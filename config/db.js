import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO)
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(err))