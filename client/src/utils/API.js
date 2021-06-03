import axios from "axios";

// eslint-disable-next-line 
export default {
  saveProfile: function(profileData) {
    return axios.post("/api/userprofile", profileData);
  }
}


