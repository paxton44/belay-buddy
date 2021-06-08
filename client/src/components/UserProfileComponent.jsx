// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function UserProfileComponent() {
    const [userProfileData, setUserProfileData] = useState({});
    // const [allUserProfileData, setAllUserProfileData] = useState([]);
    useEffect(() => {
        fetch(`/api/userprofile/${window.localStorage.getItem("uid")}`)
            .then((response) => response.json())
            .then((userData) => {
                console.log("formstuff from post",userData)
                //   may not need somehthing after dot, run in insomnia
                setUserProfileData(userData[0]);
                // setAllUserProfileData(fetchData.results)
                // setEmployeeArrayFiltered(fetchData.results);
            });
    }, []);

    return (
        <div>
            <div className="card h-screen">
                <div className="card-top">
                    <img src={"https://place-puppy.com/100x100"}
                        alt={""} className="rounded-full" />
                    <h1>Belay Buddy</h1>
                    <p>future dev- "belay buddy email contact goes here</p>
                    <p>future dev- phone number goes here</p>
                </div>
                <div className="card-details">
                    <p>
                        {`City: ${userProfileData.City}`}
                    </p>
                    <p>
                    {`Home Gym: ${userProfileData.HomeGym}`}
                        
</p>
                    <p>
                    {`Skill Level: ${userProfileData.skillLevel}`}
                        
</p>
                    <p>
                        fun fact: Im not actually "aight" :-P
</p>
                    {/* make an or statement that says if no info add placeholder or something */}
                    <p>Times Available:</p>
                    <p>Monday:7</p>
                    <p>Tuesday:8</p>
                    <p>Wednesday:9</p>
                    <p>Thursday:10</p>
                    <p>Friday:11</p>
                    <p>Saturday:12</p>
                    <p>Sunday:1</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfileComponent