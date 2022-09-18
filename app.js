const express = require('express');
const app = express;

app.get('/home', (req,res => {
    res.send('hola mundo')
}))

app.listen(3000, () => {
    console.log('servidor corriendo')
})