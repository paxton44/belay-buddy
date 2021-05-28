import UserProfileComponent from "../../components/UserProfileComponent"
import "./UserProfile.css"
function UserProfilePage(props){
    return(
        
        <div className="card card-top card-details ">
        <UserProfileComponent
        handleSubmit={props.handleSubmit}
        handleInputs={props.handleInputs}
        inputsObj={props.inputsObj} />
        </div>
        
    )
}

export default UserProfilePage