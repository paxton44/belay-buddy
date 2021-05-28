import CreateProfileForm from "../../components/CreateProfileForm";
import "./ProfileForm.css"

function ProfileFormPage(props){
    return (
        <div className="profileform">
        <CreateProfileForm
        handleSubmit={props.handleSubmit}
        handleInputs={props.handleInputs}
        inputsObj={props.inputsObj} />
       </div>
    )
}

export default ProfileFormPage