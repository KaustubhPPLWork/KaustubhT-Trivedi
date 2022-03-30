// const express = require("express")()
import express from 'express'
import axios from 'axios'
import 'dotenv'
const app = express()
const url = `https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc?api_key=${process.env.API_KEY}`
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000

const data = await axios.get(url)
const cats = data.data
// const catString = JSON.stringify(cats)
console.log(cats)

app.use(express.json())

// console.log(mappingCats)
app.get('/', (req, res) => {
    let catArray = []
    const mappingCats = cats.map((cat) => {console.log(cat.breeds)
        catArray.push(cat.breeds)
    })
    res.send(catArray)
    res.send(mappingCats)
    res.send(cats)
})

app.get('/:id', (req, res) => {
    const cat = cats.find(cat => cat.id)
    console.log(cat)
    res.send(cat)
})
app.listen(PORT, (req, res) => {
    console.log(`listening on port ${PORT}...`)
})