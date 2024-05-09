import express from 'express'
import { Cat } from './model.mjs'
import { apiKey } from '../server.mjs'

export const catRoutes = express.Router()
    .get('/', getAllCats)
    .get('/random', getRandomCat)


async function getAllCats(req, res) {
    const cats = await Cat
        .find({})
        .sort({ createdAt: -1 })

    console.log("we got json:", cats, "yes")

    res.status(200).json(cats)
}

async function getRandomCat(req, res) {
    const url = `https://api.thecatapi.com/v1/images/search?api_key=${apiKey}&has_breeds=1`;

    try {
        const resp = await fetch(url)
        const json = await resp.json()

        console.log(json)
    } catch (err) {
        console.error(err)
    }

    
    res.status(200).json({hi: "hi"})
}