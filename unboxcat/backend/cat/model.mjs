import { Schema, model } from "mongoose";

const breedSchema = new Schema({
    id: String,
    name: String,
    temperament: String,
    alt_names: String,
    origin: String,
    description: String,
    wikipedia_url: String,
})

const catSchema = new Schema({
    _id: String,
    imgUrl: String,
    breeds: [breedSchema],
    
    rarity: Number,
    name: String 
}, {timestamps: true})

export const Cat = model('cats', catSchema)