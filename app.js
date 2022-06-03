const log = console.log;
const { dir } = require('console');
const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
app.listen(3030, ()=>{
    log('Servidor corriendo en el puerto 3030')
});
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})
app.get('/register',(req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})
app.get('/login', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})
app.get('/shoppingBasket', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/shoppingBasket.html'))
})
