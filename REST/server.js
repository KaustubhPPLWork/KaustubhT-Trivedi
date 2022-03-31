// const express = require("express")()
import express from 'express'
import cats from './data.js'
import 'dotenv'
const app = express()
const PORT = process.env.PORT || 3000

// console.log(cats)

app.use(express.json())


//Get all Cats
app.get('/', (req, res) => {
    res.send(cats)
})


//Get cat by id
app.get('/:cat_id', (req, res) => {
    const cat = cats.find(cat => cat.cat_id === req.params.cat_id);
    res.send(`${cat.name} || ${cat.breed} || ${cat.age}`)
    console.log(cat);
})


//Create a new cat
app.post('/', (req, res) => {
    const postObj = {
        name: req.body.name,
        breed: req.body.breed,
        age: req.body.age,
        cat_id: req.body.cat_id
    }
    cats.push(postObj)
    res.send(cats)
})


//Update an existing cat
app.put('/:cat_id', (req, res) => {
    const cat = cats.find(cat => cat.cat_id === req.params.cat_id);
    // res.send(`${cat.name} || ${cat.breed} || ${cat.age}`)
    // console.log(cat);
    cat.name = req.body.name
    cat.age = req.body.age
    cat.breed = req.body.breed
    cat.cat_id = req.body.cat_id
    res.send(cat)
})


//Delete a cat
app.delete('/:cat_id', (req, res) => {
    const cat = cats.find(cat => cat.cat_id === req.params.cat_id);
    cats.splice(cat,1)
    // cat.parseInt()
    res.send(cat)
})


//Listen on the given port
app.listen(PORT, (req, res) => {
    console.log(`listening on port ${PORT}...`)
})