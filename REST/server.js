// const express = require("express")()
import express from 'express'
import cats from './data.js'
import 'dotenv'
const app = express()
const PORT = process.env.PORT || 3000

// console.log(cats)

app.use(express.json())

app.get('/', (req, res) => {
    res.send(cats)
})

app.get('/:cat_id', (req, res) => {
    const cat = cats.find(cat => cat.cat_id === req.params.cat_id);
    res.send(`${cat.name} || ${cat.breed} || ${cat.age}`)
    console.log(cat);
})

app.post('/', (req, res) => {
    const postObj = {
        name: req.body.name,
        breed: req.body.breed,
        age: req.body.age,
        cat_id: req.body.cat_id + 1
    }
    cats.push(postObj)
    res.send(cats)
})
app.listen(PORT, (req, res) => {
    console.log(`listening on port ${PORT}...`)
})