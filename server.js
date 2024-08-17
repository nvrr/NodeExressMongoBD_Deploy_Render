const express = require('express')
const app = express()
const mongoose = require('mongoose');

//routes
app.get('/', (req, res) => {
    res.send('helooo here from backend')
})

app.get('/blog', (req,res) => {
    res.send('Helo Bloger')
})
mongoose.set("strictQuery", false)

mongoose.connect('mongodb+srv://nvr:1a1b1c@admin.2jdet.mongodb.net/Node-API?retryWrites=true&w=majority&appName=admin')
  .then(() => {
  console.log('Connected to MongoDB!')
  app.listen(3000, ()=> {
    console.log('node runing onn port 3000');
} )
}).catch((error) => {
    console.log(error);
})



