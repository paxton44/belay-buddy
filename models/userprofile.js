const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// username, first name, city, home gym,

const ProfileSchema = new Schema({
  username: {
    type: String,
    index: true,
  },

  firstname: {
    type: String,
    index: true,
  },

  City: {
    type: String,
    index: true,
  },
  HomeGym: {
    type: String,
    index: true,
  },
  skillLevel: {
    type: String,
    index: true,
  },
  funfact: {
    type: String,
    required: true,
  },
  MondayTime: {
    type: String,
    required: true,
  },
  TuesdayTime: {
    type: String,
    required: true,
  },
  WednesdayTime: {
    type: String,
    required: true,
  },
  ThursdayTime: {
    type: String,
    required: true,
  },
  FridayTime: {
    type: String,
    required: true,
  },
  SaturdayTime: {
    type: String,
    required: true,
  },
  SundayTime: {
    type: String,
    required: true,
  },
  // combines id from user model to ensure user signed in matches correct profile
  user_id: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const UserProfile = mongoose.model("UserProfile", ProfileSchema);

module.exports = UserProfile;
