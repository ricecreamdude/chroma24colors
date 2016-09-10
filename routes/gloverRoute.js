//Libs
const express = require('express');
const app = express();

//Middleware
var appError = require('appError');

//Models
const mongoose = require('mongoose');
const Glover = require( __dirname + '/../model/gloverSchema');

var gloveRouter = module.exports = exports = express.Router();

//Send loading screen info (User profile and top 10 color sets) and favorite color settings
gloveRouter.route('/')

  .get(req, res) => {
    Glover.find( {} , (err, data) => {
      if (err) return appError.error500('gloverRoute - Get: DB Error');
      res.status(200).json(data);
      console.log('Glover GET');
    });
  }
  .post(req, res) => {
    var newGlover = new Glover(req.body);
    newGlover.save( (err, data) => {
      if (err) return appError.error500('gloverRoute - Post: DB Error');
      res.status(200).json(newGlover);
      console.log('Glover POST');
    });
  }
});

// //Create a glove set. Send the created set & confirmation.
// gloveRouter.post( '', (req, res) => {
//
// });
//
// //Update a glove set and send the updated set
// gloveRouter.put( '' , (req, res) => {
//
// });
//
// //Delete a specific glove set and send confirmation
// gloveRouter.delete('' , (req , res) => {
//
// });
