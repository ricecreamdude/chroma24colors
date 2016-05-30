'use strict'

//Express is pretty important for our server.
const express = require('express');
const app = express();
//Middleware as they are created

//Require routes

//Server construction after this point
const PORT = process.env.PORT || 3000;
//Add Routes
// app.use();


app.all('*' , () => res.status(404).send('Not Found')); // All other endpoints
app.listen(PORT , () => console.log('The server is running on port ' + PORT));

module.exports = app;
