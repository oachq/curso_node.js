require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//handelbars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico 
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'TEXLAVE COMPANY',
        titulo: 'Trip viajero'
    })

})

app.get('/generic', function(req, res) {
    // res.sendFile(__dirname + '/public/generic.html');
    res.render('generic', {
        nombre: 'TEXLAVE COMPANY',
        titulo: 'Trip viajero'
    })
})

app.get('/elements', function(req, res) {
    //res.sendFile(__dirname + '/public/elements.html');
    res.render('elements', {
        nombre: 'TEXLAVE COMPANY',
        titulo: 'Trip viajero'
    })
})

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`por aqui nos estamos comunicando perro http://localhost:${port}`)
})