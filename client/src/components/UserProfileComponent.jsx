// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function UserProfileComponent() {
    const [userProfileData, setUserProfileData] = useState({});
    useEffect(() => {
        fetch(`/api/userprofile/${window.localStorage.getItem("uid")}`)
            .then((response) => response.json())
            .then((userData) => {
                console.log(userData)
                setUserProfileData(userData[0]);
            });
    }, []);

    return (

<div class="card">
  <img src={"https://firebasestorage.googleapis.com/v0/b/project-images-5c20b.appspot.com/o/thorsmilingsquare.jpeg?alt=media&token=25696a9e-72a6-4b32-8e5c-c8bb9bd7a140"} alt="John" style={{width:"100%"}} />
  <h1>{`User Name: ${userProfileData.username}`}</h1>
  <p class="title">{`Fun fact: ${userProfileData.funfact}`}</p>
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
  <a className=".a hover:opacity-75" href="#"><i class="fa fa-dribbble"></i></a>
  <a className=".a hover:opacity-75" href="#"><i class="fa fa-twitter"></i></a>
  <a className=".a hover:opacity-75" href="#"><i class="fa fa-linkedin"></i></a>
  <a className=".a hover:opacity-75" href="#"><i class="fa fa-facebook"></i></a>
  {/* <p><button className="button hover:opacity-75">Contact</button></p> */}
</div>


        // <div>
        //     <div className="card h-screen">
        //         <div className="card-top">
        //             <img src={"https://place-puppy.com/100x100"}
        //                 alt={""} className="rounded-full" />
        //             <h1>Belay Buddy</h1>
        //             <p>future dev- "belay buddy email contact goes here</p>
        //             <p>future dev- phone number goes here</p>
        //         </div>
        //         <div className="card-details">
        //             <p>
        //                 {`City: ${userProfileData.City}`}
        //             </p>
        //             <p>
        //                 {`Home Gym: ${userProfileData.HomeGym}`}
        //             </p>
        //             <p>
        //                 {`Skill Level: ${userProfileData.skillLevel}`}
        //             </p>
        //             <p>
        //                 {`Fun Fact: ${userProfileData.funfact}`}
        //             </p>
        //             {/* make an or statement that says if no info add placeholder or something */}
        //             <p>Times Available:</p>
        //             <p>{`Monday: ${userProfileData.MondayTime}`}</p>
        //             <p>{`Tuesday: ${userProfileData.TuesdayTime}`}</p>
        //             <p>{`Wednesday: ${userProfileData.WednesdayTime}`}</p>
        //             <p>{`Thursday: ${userProfileData.ThursdayTime}`}</p>
        //             <p>{`Friday: ${userProfileData.FridayTime}`}</p>
        //             <p>{`Saturday: ${userProfileData.SaturdayTime}`}</p>
        //             <p>{`Sunday: ${userProfileData.SundayTime}`}</p>
        //         </div>
        //     </div>
        // </div>
    )
}

export default UserProfileComponent