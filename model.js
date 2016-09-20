//NYTimes MongoDB Schema

//global dependencies
var mongoose = require("mongoose");

//connection to local mongo database
mongoose.connect("mongodb://localhost/nytreact");

//save the mongoose connection to the variable db
//test to see if the connection was successful
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function(){
  //if you get the "open" message, the connection was successful
})

//schema + model
var Schema = mongoose.Schema

var articleSchema = new Schema({
    name:String,
    title:String,
    url:String,
    date:String
  });

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;