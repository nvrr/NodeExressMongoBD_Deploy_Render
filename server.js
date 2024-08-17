const express = require('express')
const app = express()

//routes
app.get('/', (req, res) => {
    res.send('helooo here from backend')
})

app.listen(3000, ()=> {
    console.log('node runing onn port 3000');
} )