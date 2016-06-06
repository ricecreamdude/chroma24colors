'use strict'

const express = require('express');
const app = express();

//Routes
// const devRoute = require( __dirname + './routes/devRoute');
const gloverRoute = require( __dirname + './routes/gloverRoute');
// const settingRoute = require( __dirname + './routes/settingRoute');

//Middleware as they are created

//Require routes
// app.on('/api/dev', devRoute);
app.on('/api/dev', gloverRoute);
// app.on('/api/dev', settingRoute);

//Server construction after this point
const PORT = process.env.PORT || 3000;

//Add Routes
app.all('*' , () => res.status(404).send('Not Found')); // All other endpoints
app.listen(PORT , () => console.log('The server is running on port ' + PORT));

module.exports = app;
