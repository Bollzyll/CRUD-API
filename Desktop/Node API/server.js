// console.log('Bolu');
const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

app.get('/blog', (req, res) => {
    res.send('Hello Blog My name is Bolu')
})

app.listen(3000, ()=> {
    console.log('Node API app is running on port 3000')
})

// app.post('/product', (req, res) => {
//     console.log(req.body);
//     res.send(req.body)
// })
mongoose.
connect('mongodb+srv://userA:paOlo102@cluster0.remm9dj.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
}).catch((error) => {
    console.log(error)
})