const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000

const publicStaticDirPath = path.join(__dirname, '../public');

app.listen(port, () => {
    console.log("Server is up and running on port: " + port);
});