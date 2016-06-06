const express = require('express');
const app = express();

//Send loading screen info (User profile and top 10 color sets) and favorite color settings
app.get('/' , (req, res) => {

});

//Send info about a specific ID
app.get('./:id' , (req, res) => {

});

//Create a glove set. Send the created set & confirmation.
app.post( '', (req, res) => {

});

//Update a glove set and send the updated set
app.put( '' , (req, res) => {

});

//Delete a specific glove set and send confirmation
app.delete('' , (req , res) => {

});
