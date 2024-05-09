import { Schema, model } from "mongoose";

const breedSchema = new Schema({
    id: String,
    name: String,
    temperament: String,
    alt_names: String,
    origin: String,
    country_code: String,
    description: String,
    wikipedia_url: String,
})

const catSchema = new Schema({
    _id: String,
    imgUrl: String,
    breed: breedSchema,
    
    rarity: Number,
    petName: String,
    fullName: String
}, {timestamps: true})

export const Cat = model('cats', catSchema)