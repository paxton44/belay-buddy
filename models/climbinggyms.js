const mongoose = require ("mongoose")
const Schema = mongoose.Schema;

const ClimbingGymSchema = new Schema ({

    GymName: {
        type: String,
        required: "Gym name required"
    },

    City: {
        type: String,
        required: "City name required"
    },

    PhoneNumber: {
        type: Number,
        
    },

    Address: {
        type: String,
        required: "Address Required"
    },

   
})

const ClimbingGym = mongoose.model("ClimbingGym",ClimbingGymSchema)
module.exports = ClimbingGym;