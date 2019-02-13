const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    content = {
        nombre: 'Sebastian salazar',
        anio: new Date().getFullYear()
    }


    res.render('home', content);
});

app.get('/about', (req, res) => {
    content = {
        imagePath: 'assets/img/10291122_10204081250212465_5903328913042824996_nv2.jpg',
        anio: new Date().getFullYear()

    }
    res.render('about', content)
});










app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});