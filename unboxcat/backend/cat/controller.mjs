import express from 'express'
import { Cat } from './model.mjs'
import { apiKey } from '../server.mjs'
import { getRandomNameFromCountry } from '../helpers.mjs'

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
    const catObject = await fetchRandomCat();
    if (catObject === null) {
        return res.status(500).json({ error: "Fetching cat failed :(" });
    }

    const country_code = catObject['breeds'][0]['country_code']
    console.log(country_code)

    // const rarity = getRandomRarity()
    const name = getRandomNameFromCountry(country_code)
    console.log(name)

    
    res.status(200).json({hi: "hi"})
}

async function fetchRandomCat() {
    const url = `https://api.thecatapi.com/v1/images/search?api_key=${apiKey}&has_breeds=1`;
    const resp = await fetch(url);

    if (!resp.ok) {
        console.error('Network response was not ok');
        return null;
    }

    try {
        const jsonData = await resp.json();
        return jsonData[0]; // Assuming the API returns an array with one cat object
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return null;
    }
}