const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// username, first name, city, home gym, 

const userProfile = new Schema({
  
    username: {
        type: String,
        index:true
      },

      firstname: {
        type: String,
        index:true
      },
      
      City: {
        type: String,
        index:true
      },
      HomeGym: {
        type: String,
        index:true
      },
      skillLevel: {
        type: String,
        index:true
      },
      funfact: {
          type: String,
          required: true
      },
      time: {
        type: String,
        required: true
    }
    
});

const userProfile = mongoose.model("userProfile", userProfileSchema);

module.exports = userProfile; 
