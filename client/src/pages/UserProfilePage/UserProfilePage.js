import UserProfileComponent from "../../components/UserProfileComponent"
import "./UserProfile.css"
function UserProfilePage(props){
    return(
        <>
        <UserProfileComponent
        handleSubmit={props.handleSubmit}
        handleInputs={props.handleInputs}
        inputsObj={props.inputsObj} />
        </>
    )
}

export default UserProfilePage