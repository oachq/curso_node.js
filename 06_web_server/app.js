const express = require('express')
const app = express()
const port = 3000;

// Servir contenido estatico 
app.use(express.static('public'));


//app.get('/', function(req, res) {
//    res.send('Home page')
//})

app.get('/hola-mundo', function(req, res) {
    res.send('hola mundo en su respectiva ruta ')
})

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`por aqui nos estamos comunicando perro http://localhost:${port}`)
})