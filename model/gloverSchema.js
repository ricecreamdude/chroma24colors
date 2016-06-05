var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gloverSchema = new Schema({
  name: String,
  team: [{abreviation: String, initials: String}]
})
