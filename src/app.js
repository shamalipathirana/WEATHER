const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000

const publicStaticDirPath = path.join(__dirname, '../public');

// static dir to serve static content
app.use(express.static(publicStaticDirPath));

app.listen(port, () => {
    console.log("Server is up and running on port: " + port);
});