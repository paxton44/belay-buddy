import axios from "axios";

// eslint-disable-next-line 
export default {
  saveProfile: function(profileData) {
    return axios.post("/api/userprofile", profileData);
  },
  getProfiles: function() {
    return axios.get("/api/userprofile");
  },
  getProfile: function(id) {
    return axios.get("/api/userprofile/" + id);
  },
  
}


