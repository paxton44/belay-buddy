import UserProfileComponent from "../../components/UserProfileComponent";
import "./UserProfile.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function UserProfilePage() {
  return (
    <div id="backgroundFull">
       
    <div className="mx-auto align-items-center card bg ">
   
      <UserProfileComponent />
      
      <Link to="landingpage">
        <button className="border-b-4 shadow-inner mt-1 hover:bg-blue-300 focus:outline font-bold w-full text-center py-3 rounded">
          Enter BelayBuddy
        </button>
      </Link>
      </div>
    
    </div>
  );
}

export default UserProfilePage;
