import UserProfileComponent from "../../components/UserProfileComponent";
import "./UserProfile.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function UserProfilePage() {
  return (
    <div style={{backgroundColor:"#3e4853",
     fontFamily:"'Montserrat', sans-serif"
     }}>
       {/* style={{position:"absolute", top:"50%", transform:"translateY(-50%)"}}  */}
    <div className="card bg">
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
