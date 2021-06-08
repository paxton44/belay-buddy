import UserProfileComponent from "../components/UserProfileComponent";
import { useEffect, useState } from "react";
let gymUsers = [
  {
    userName: "AllFather",
    skillLevel: "main boss",
    homeGym: "valhalla",
    img: "https://firebasestorage.googleapis.com/v0/b/project-images-5c20b.appspot.com/o/odincropped.jpeg?alt=media&token=df0926bf-4059-43b7-85c7-f62c5cc25788",
    TimesAvailable: "all day",
    city: "Denver",
  },
  {
    userName: "Loki",
    skillLevel: "Mischievous",
    homeGym: "Jotunheim",
    img: "https://firebasestorage.googleapis.com/v0/b/project-images-5c20b.appspot.com/o/lokismaller.jpeg?alt=media&token=657702a3-c154-4388-b4b1-71c26b9e171c",
    //!   times available needs to be its own object? or its own div with 7 key value pairs?
    TimesAvailable: "all night",
    city: "oakland",
  },
  {
    userName: "Odinson",
    skillLevel: "Thunderous",
    homeGym: "Azgard",
    img: "https://firebasestorage.googleapis.com/v0/b/project-images-5c20b.appspot.com/o/thorsmilingsquare.jpeg?alt=media&token=25696a9e-72a6-4b32-8e5c-c8bb9bd7a140",
    TimesAvailable: "9-5",
    city: "NewYork",
  },
  {
    userName: "Heimdall",
    skillLevel: "All Seeing",
    gitHub: "https://github.com/iigonzoii/TeamProfileGenerator",
    homeGym: "gates of the bifrost",
    img: "https://firebasestorage.googleapis.com/v0/b/project-images-5c20b.appspot.com/o/heimdall.jpeg?alt=media&token=c21c8726-2c5c-4b9f-823a-6705ffd17048",
    TimesAvailable: "when the realm is at peace",
    city: "Chicago",
  },
  {
    userName: "AllFather",
    skillLevel: "main boss",
    homeGym: "valhalla",
    img: "https://firebasestorage.googleapis.com/v0/b/project-images-5c20b.appspot.com/o/odincropped.jpeg?alt=media&token=df0926bf-4059-43b7-85c7-f62c5cc25788",
    TimesAvailable: "all day",
    city: "Denver",
  },
  {
    userName: "Loki",
    skillLevel: "Mischievous",
    homeGym: "Jotunheim",
    img: "https://firebasestorage.googleapis.com/v0/b/project-images-5c20b.appspot.com/o/lokismaller.jpeg?alt=media&token=657702a3-c154-4388-b4b1-71c26b9e171c",
    //!   times available needs to be its own object? or its own div with 7 key value pairs?
    TimesAvailable: "all night",
    city: "oakland",
  },
  {
    userName: "Odinson",
    skillLevel: "Thunderous",
    homeGym: "Azgard",
    img: "https://firebasestorage.googleapis.com/v0/b/project-images-5c20b.appspot.com/o/thorsmilingsquare.jpeg?alt=media&token=25696a9e-72a6-4b32-8e5c-c8bb9bd7a140",
    TimesAvailable: "wednesday",
    city: "NewYork",
  },
  {
    userName: "Heimdall",
    skillLevel: "All Seeing",
    gitHub: "https://github.com/iigonzoii/TeamProfileGenerator",
    homeGym: "gates of the bifrost",
    img: "https://firebasestorage.googleapis.com/v0/b/project-images-5c20b.appspot.com/o/heimdall.jpeg?alt=media&token=c21c8726-2c5c-4b9f-823a-6705ffd17048",
    TimesAvailable: "when the realm is at peace",
    city: "Chicago",
  },
  {
    userName: "AllFather",
    skillLevel: "main boss",
    homeGym: "valhalla",
    img: "https://firebasestorage.googleapis.com/v0/b/project-images-5c20b.appspot.com/o/odincropped.jpeg?alt=media&token=df0926bf-4059-43b7-85c7-f62c5cc25788",
    TimesAvailable: "all day",
    city: "Denver",
  },
  {
    userName: "Loki",
    skillLevel: "Mischievous",
    homeGym: "Jotunheim",
    img: "https://firebasestorage.googleapis.com/v0/b/project-images-5c20b.appspot.com/o/lokismaller.jpeg?alt=media&token=657702a3-c154-4388-b4b1-71c26b9e171c",
    //!   times available needs to be its own object? or its own div with 7 key value pairs?
    TimesAvailable: "all night",
    city: "oakland",
  },
  {
    userName: "Odinson",
    skillLevel: "Thunderous",
    homeGym: "Azgard",
    img: "https://firebasestorage.googleapis.com/v0/b/project-images-5c20b.appspot.com/o/thorsmilingsquare.jpeg?alt=media&token=25696a9e-72a6-4b32-8e5c-c8bb9bd7a140",
    TimesAvailable: "wednesday",
    city: "NewYork",
  },
  {
    userName: "Heimdall",
    skillLevel: "All Seeing",
    gitHub: "https://github.com/iigonzoii/TeamProfileGenerator",
    homeGym: "gates of the bifrost",
    img: "https://firebasestorage.googleapis.com/v0/b/project-images-5c20b.appspot.com/o/heimdall.jpeg?alt=media&token=c21c8726-2c5c-4b9f-823a-6705ffd17048",
    TimesAvailable: "when the realm is at peace",
    city: "Chicago",
  },
];
function LandingPageComponent() {
  const [allUserProfileData, setAllUserProfileData] = useState([]);
  useEffect(() => {
    fetch("/api/userprofile/")
      .then((response) => response.json())
      .then((allData) => {
        setAllUserProfileData(allData);
        console.log(allUserProfileData);
        //console.log(allData.results);
        // setEmployeeArrayFiltered(fetchData.results);
      });
  }, []);

  {
    /* create state in this  that contains both sides of my screen */
  }
  return (
    <div>
      {/* 40% page space userprofilecomponent */}

      <div className="h-screen mt-4 ml-2 grid grid-cols-5 gap-4 ">
        <div className="col-span-2">
          {/* pass state to userprofilefcomponent */}
          <UserProfileComponent />
        </div>

        {/* in bottom portion/right side. we set state directly */}
        <div className=" mr-2 col-span-3 border-2 overflow-scroll">
          <div className="bg-red-400 rounded border-solid  grid grid-cols-4 gap-4">
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
                className="bg-red-400 rounded border-b-2 border-black"
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
    </div>
  );
}

export default LandingPageComponent;
