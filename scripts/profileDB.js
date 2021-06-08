const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  
  process.env.MONGODB_URI || "mongodb://localhost/climbing", 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


const ClimbingProfiles = [
  {
    
    "username": "wylieu",

    "firstname": "wylie",
    
    "City": "Denver", 

    "HomeGym": "Denver",

    "skillLevel": "Beginner",

    "funfact": "this is a test",

     "MondayTime": "8am",
    
     "TuesdayTime": "8am",

    "WednesdayTime": "8am",

    "ThursdayTime": "8am",

    "FridayTime": "8am",

    "SaturdayTime": "8am",

    "SundayTime": "8am"

},
]



db.UserProfile
  .remove({})
  .then(() => db.UserProfile.collection.insertMany(ClimbingProfiles))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })