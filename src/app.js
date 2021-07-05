const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();

const weatherData = require('../utils/weatherData');

const port = process.env.PORT || 3000

const publicStaticDirPath = path.join(__dirname, '../public');

const viewsPath = path.join(__dirname, '../templates/views');

const partialsPath = path.join(__dirname, '../templates/partials');
// setup handlebars engine and templates path
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// static dir to serve static content
app.use(express.static(publicStaticDirPath));

app.get('', (req, res) => {
    res.send("This is my weather app")
});



// localhost:3000/products?address=lahore
app.get('/weather', (req, res) => {
     res.send("This is weather end point");
});
// 404 route should come at last
app.get("*", (req, res) => {
    res.send("Page not found");
});

app.listen(port, () => {
    console.log("Server is up and running on port: " , port);
})
