import { Schema, model, Types } from "mongoose";

const collection = 'companies';

const schema = new Schema({
    name: {type: String, required: true},
    description: {type: String, },
    website: {type: String},
    logo: {type: String },
    contact_info: {
        phone_number: {type: String, required: true},
        email: {type: String, required: true},
    },
    events: [{type: Types.ObjectId, ref: 'events'}]
})

const Company = model(collection, schema)

export default Company;