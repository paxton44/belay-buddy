import UserProfileComponent from "../components/UserProfileComponent"

let gymUsers = [
    {
        userName: "AllFather",
        skillLevel: "main boss",
        homeGym: "valhalla",
        img: "https://firebasestorage.googleapis.com/v0/b/project-images-5c20b.appspot.com/o/reactDirScaled2.jpg?alt=media&token=e704d7ed-9068-481e-b409-e2fe44b3874f",
        TimesAvailable:
            "all day",
            city:"Denver"
    },
    {
        userName: "Loki",
        skillLevel: "Mischievous",
        homeGym: "Jotunheim",
        img: "https://firebasestorage.googleapis.com/v0/b/project-images-5c20b.appspot.com/o/wdb3fb.jpg?alt=media&token=aeadc92a-972f-4203-9068-a24ef70602c2",
        //!   times available needs to be its own object? or its own div with 7 key value pairs?
        TimesAvailable:
            "monday",
            city:"oakland"
    },
    {
        userName: "Odinson",
        skillLevel: "Thunderous",
        homeGym: "Azgard",
        img: "https://firebasestorage.googleapis.com/v0/b/project-images-5c20b.appspot.com/o/better%20copy.jpg?alt=media&token=0d96e8e2-a5d1-4446-a325-52624fef95d1",
        TimesAvailable:
            "wednesday",
            city:"NewYork"
    },
    {
        userName: "Heimdall",
        gitHub: "https://github.com/iigonzoii/TeamProfileGenerator",
        homeGym:
            "gates of the bifrost",
        img: "https://firebasestorage.googleapis.com/v0/b/project-images-5c20b.appspot.com/o/tpg2.jpg?alt=media&token=6caa525d-6722-4986-a309-1ce65924f375",
        TimesAvailable:
            "when the realm is at peace",
            city:"Chicago"
    },
];
function LandingPageComponent() {
    return (
        <>
            {/* 40% page space userprofilecomponent */}
            <div className="ml-2 grid grid-cols-5 gap-4 ">
                <div className="col-span-2">
                    <UserProfileComponent />
                </div>
{/* grid with four columns inside each row */}
                {/* 60% page space mapped out rows from db */}
                <div className="h-20 mr-2 col-span-3 border-2 overflow-scroll">
                    content2 housing our mapped out rows at 60 % screen fill.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, commodi earum harum dolorem, possimus debitis nulla ut dolorum incidunt atque dolores! Officiis molestiae optio asperiores? Voluptatibus, modi. Pariatur, debitis suscipit.
                    
                </div>
            </div>
        </>
    )
}

export default LandingPageComponent