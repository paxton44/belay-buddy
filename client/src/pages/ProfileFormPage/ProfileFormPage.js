import CreateProfileForm from "../../components/CreateProfileForm";
import "./ProfileForm.css"

function ProfileFormPage(props){
    return (
        <>
        <CreateProfileForm
        handleSubmit={props.handleSubmit}
        handleInputs={props.handleInputs}
        inputsObj={props.inputsObj} />
        </>
    )
}

export default ProfileFormPage