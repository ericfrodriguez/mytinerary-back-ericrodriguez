import { Schema, model, Types } from "mongoose";

const collection = 'events';

const schema = new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    place: { type: String, required: true },
    price: { type: Number, required: true },
    capacity: { type: Number, required: true },
    assistance: { type: Number },
    estiamte: { type: Number },
    user: { type: Types.ObjectId, ref: 'users' },
    company: {type: Types.ObjectId, ref: 'companies'}
}, {
    timestamps: true
})

const Event = model(collection, schema)

export default Event;


// "capacity": 50000,
// "assistance": 42756