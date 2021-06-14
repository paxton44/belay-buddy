import { useEffect, useState } from "react";

function UserProfileComponent() {
    const [userProfileData, setUserProfileData] = useState({});
    useEffect(() => {
        fetch(`/api/userprofile/${window.localStorage.getItem("uid")}`)
            .then((response) => response.json())
            .then((userData) => {
                setUserProfileData(userData[0]);
            });
    }, []);
    return (
<div className="card ">
  <img src={"https://firebasestorage.googleapis.com/v0/b/project-images-5c20b.appspot.com/o/thorsmilingsquare.jpeg?alt=media&token=25696a9e-72a6-4b32-8e5c-c8bb9bd7a140"} alt="John" style={{width:"100%"}} />
  <h1>{`User Name: ${userProfileData.username}`}</h1>
  <p className="title">{`Comfortable climbing with other genders: ${userProfileData.funfact}`}</p>
  <p>{`City: ${userProfileData.City}`}</p>
  <p>{`Home Gym: ${userProfileData.HomeGym}`}</p>
  <p>{`Skill Level: ${userProfileData.skillLevel}`}</p>
  <p>Times Available:</p>
<p>{`Monday: ${userProfileData.MondayTime}`}</p>
<p>{`Tuesday: ${userProfileData.TuesdayTime}`}</p>
<p>{`Wednesday: ${userProfileData.WednesdayTime}`}</p>
<p>{`Thursday: ${userProfileData.ThursdayTime}`}</p>
<p>{`Friday: ${userProfileData.FridayTime}`}</p>
<p>{`Saturday: ${userProfileData.SaturdayTime}`}</p>
<p>{`Sunday: ${userProfileData.SundayTime}`}</p>
  <button className=".a hover:opacity-75" href="#"><i className="fa fa-dribbble"></i></button>
  <button className=".a hover:opacity-75" href="#"><i className="fa fa-twitter"></i></button>
  <button className=".a hover:opacity-75" href="#"><i className="fa fa-linkedin"></i></button>
  <button className=".a hover:opacity-75" href="#"><i className="fa fa-facebook"></i></button>
</div>
    )
}

export default UserProfileComponent