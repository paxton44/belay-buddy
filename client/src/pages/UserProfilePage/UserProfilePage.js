import UserProfileComponent from "../../components/UserProfileComponent";
import "./UserProfile.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function UserProfilePage() {
  return (
    <div style={{backgroundColor:"#1d2227",
     fontFamily:"'Montserrat', sans-serif"
     }}>
    <div  className="card bg">
      <UserProfileComponent />
      
      <Link to="landingpage">
        <button className="mt-1 focus:outline-none font-bold w-full text-center py-3 rounded">
          Enter BelayBuddy
        </button>
      </Link>
      </div>
    
    </div>
  );
}

export default UserProfilePage;
