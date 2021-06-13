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
      className="h-screen mt-auto grid xs:grid-cols-1 sm:grid-cols-1  md:grid-cols-5 lg:grid-cols-5 xl-grid-cols-7 gap-4 ">
      <div id="mainBckgrnd" className="md:col-span-2 lg:col-span-2 xl-span-3">
        <div className="card bg">
          <UserProfileComponent />
        </div>
      </div>
      <div className=" grid-text bg mr-2  md:col-span-3 lg:col-span-3 xl-col-span-4 border-2 overflow-scroll">
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
              <div className="justify-items-center content-center grid grid-cols-4 gap-4">
                <div>
                  <img className="rounded-full h-24 " src={"https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg"} alt="user" />
                  <p className="pl-1 inline">
                    {each.username} {each.City}
                  </p>
                </div>
                <div className="">
                  {(() => {

                    switch (each.skillLevel) {
                      case 'Beginner':
                        return (
                          <button className=" rounded-full h-10 w-10 bg-green-300 text-white flex"></button>
                        )
                      case 'Intermediate':
                        return (
                          <button className="rounded-full h-10 w-10 bg-blue-400 text-white flex"></button>
                        )
                      case 'Advanced':
                        return (
                          <button className=" rounded-full h-10 w-10 bg-black text-white flex"></button>
                        )
                      default:
                        return (
                          <div>skill level?.</div>
                        )
                    }

                  })()}
                  <p className="pl-1 inline">{each.skillLevel}</p>
                </div>
                <div>
                  <p className="pl-1 inline">{each.HomeGym}</p>
                </div>
                <div>
                  <p className="pl-1">{`Monday: ${each.MondayTime}`}</p>
                  <p className="pl-1">{`Tuesday: ${each.TuesdayTime}`}</p>
                  <p className="pl-1">{`Wednesday: ${each.WednesdayTime}`}</p>
                  <p className="pl-1">{`Thursday: ${each.ThursdayTime}`}</p>
                  <p className="pl-1">{`Friday: ${each.FridayTime}`}</p>
                  <p className="pl-1">{`Saturday: ${each.SaturdayTime}`}</p>
                  <p className="pl-1">{`Sunday: ${each.SundayTime}`}</p>
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
