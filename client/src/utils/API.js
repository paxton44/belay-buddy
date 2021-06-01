import axios from "axios";

// export default {

//   saveProfile: function(profileData) {
//     return axios.post("/api/profile", profileData);
//   } 

// }; 


export default {

  saveProfile: function(profileData) {
    return axios.post("/api/profile", profileData);
  }
}


