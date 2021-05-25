const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
      Skill: {
        type: String,
        index:true
      },
      Comfortability: {
          type: Boolean,
          required: true
      }
  
});

const userProfile = mongoose.model("userProfile", userProfileSchema);

module.exports = Book;
