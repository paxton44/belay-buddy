import UserProfileComponent from "../../components/UserProfileComponent";
import "./UserProfile.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function UserProfilePage(props) {
  return (
    <div className="card card-top card-details ">
      <UserProfileComponent />
      <Link to="landingpage">
        <button className="border-4 mt-1 focus:outline-none font-bold w-full text-center py-3 rounded">
          Enter BelayBuddy
        </button>
      </Link>
    </div>
  );
}

export default UserProfilePage;
