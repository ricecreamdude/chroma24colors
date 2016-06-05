var mongoose = require('mongoose');
var Schema = mongoose.Schema();

var settingSchema = new Schema({
  name: String,
  author: String,
  comments: [ {body: String, date: Date} ],
  colorString: String,
  date: {type: default: Date.now()},
  meta: {
    votes: Number,
    views: Number
  }
});
