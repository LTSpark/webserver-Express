const express = require('express');
const hbs=require('hbs');
require('./helpers/helpers');

const app = express();
const port=process.env.PORT || 3000;

const nombres=['Leo','Edward','Krrian','Cbas','Maurck'];

app.use(express.static(__dirname+'/public'));
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');

app.get('/', (req, res) => {
    res.render('home',{
        name: nombres[Math.floor(Math.random() * 5)],
        data: "The roses are red as the blood we drink",
        
    });
});

app.get('/about', (req, res) => {
    res.render('about');
})


app.listen(port,()=>{
    console.log(`Escuchando el puerto ${port}`)
});




