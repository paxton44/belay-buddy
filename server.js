const express = require("express");
var session = require('express-session');
var passport = require('passport');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// 
require("dotenv").config()
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));
app.get("/test", function(req, res){
  res.send({message:"works"})
})
// Passport init
app.use(passport.initialize());
app.use(passport.session());
// Add routes, both API and view
app.use(routes);

// Express Session


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI,
  // "mongodb://localhost/climbing",

{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
