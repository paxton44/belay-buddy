import UserProfileComponent from "../components/UserProfileComponent";
import { useEffect, useState } from "react";
import "../pages/UserProfilePage/UserProfile.css"
function LandingPageComponent() {
  const [allUserProfileData, setAllUserProfileData] = useState([]);
  useEffect(() => {
    fetch("/api/userprofile/")
      .then((response) => response.json())
      .then((allData) => {
        setAllUserProfileData(allData);
      });
  }, []);

  return (
    
    

      <div
       className="h-screen mt-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4 ">
        <div className="sm:cols-1 lg:col-span-2 md:col-span-2">
          {/* pass state to userprofilefcomponent */}
          <div className="card bg">
          <UserProfileComponent />
          </div>
        </div>

        {/* in bottom portion/right side. we set state directly */}
        <div className="grid-text bg mr-2 sm:col-1 md:col-span-3 lg:col-span-3 border-2 overflow-scroll">
          <div className=" grid grid-cols-4 gap-4">
            <div>
              <h1 className="font-bold text-lg">Climbers </h1>
            </div>
            <div>
              <h1 className="font-bold text-lg">Skill Level </h1>
            </div>
            <div>
              <h1 className="font-bold text-lg">Home Gym </h1>
            </div>
            <div>
              <h1 className="font-bold text-lg">Times Available </h1>
            </div>
          </div>
          {allUserProfileData.map((each, index) => {
            return (
              <div
                key={index}
                className="bg rounded border-b-2 border-black"
              >
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <img className="rounded-full " src={each.img} alt="user" />
                    <p className="pl-1">
                      {each.username} {each.city}
                    </p>
                  </div>
                  <div className="">
                    <button className="rounded-full h-10 w-10 bg-black text-white flex items-center justify-center "></button>
                    <p className="pl-1 inline">{each.skillLevel}</p>
                  </div>
                  <div>
                    <p className="pl-1">{each.homeGym}</p>
                  </div>
                  <div>
                    <p className="pl-1">{`Monday: ${each.MondayTime}`}</p>
                    <p className="pl-1">{`Tuesday: ${each.TuesdayTime}`}</p>
                    <p className="pl-1">{`Wednesday: ${each.TimesAvailable}`}</p>
                    <p className="pl-1">{`Thursday: ${each.TimesAvailable}`}</p>
                    <p className="pl-1">{`Friday: ${each.TimesAvailable}`}</p>
                    <p className="pl-1">{`Saturday: ${each.TimesAvailable}`}</p>
                    <p className="pl-1">{`Sunday: ${each.TimesAvailable}`}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
   
  );
}

export default LandingPageComponent;
