import { useState } from "react";
import API from "../utils/API";

function CreateProfileForm() {
  const [inputsObj, setInputsObj] = useState({});

  const handleInputs = (e) => {
    const clone = inputsObj;
    clone[e.target.name] = e.target.value;
    setInputsObj(clone);
    // console.log(e)
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputsObj);
    alert("form submitted");

    let userProfileData = inputsObj
    userProfileData.user_id = window.localStorage.getItem("uid")

    // need to verify that this userprofiledata is logging all the form data, but also is adding the key of user_id 
    console.log("forminfo",userProfileData)
    console.log("uid", window.localStorage.getItem("uid"))
    fetch("/api/userprofile", {
      method: "POST",
      body: JSON.stringify(userProfileData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        window.location.href = "/userprofile"
      });
  };

  const dayOfWeek = (day) => {
    return (
      <div>
        <p
          className="day"
        // className="text-lg daytext"
        >What is your availability on {day}</p>
        <select className="checkboxcolor bg-transparent hover:bg-gray-500"
          // className="dropdown shadow-md mt-1 block sm:text-sm border-gray-900"
          name={`${day}Time`}
          onChange={handleInputs}
        >
          <option>6am</option>
          <option>7am</option>
          <option>8am</option>
          <option>9am</option>
          <option>10am</option>
          <option>11am</option>
          <option>12pm</option>
          <option>1pm</option>
          <option>2pm</option>
          <option>3pm</option>
          <option>4pm</option>
          <option>5pm</option>
          <option>6pm</option>
          <option>7pm</option>
          <option>8pm</option>
          <option>9pm</option>
        </select>
      </div>
    );
  };
  return (
    <>
      <div
        className="maincontainer overflow-scroll "
      // className="flex"
      >
        <form
          onSubmit={handleSubmit}
          onChange={handleInputs}
        // className="my-20 p-10 max-w-xl mx-auto shadow-md sm:border-0 md:border md:border-gray-900 text-gray-900 "
        >
          <label
            // className="text-lg flex justify-between items-end"
            for="username"
          >
            <input required
              // className="shadow-md mt-1 block w-full sm:text-sm"
              type="text"
              id="username"
              name="username"
            />
            <div className="label-text">
              Enter User Name:
            </div>
          </label>
          <br />
          {/* <input
            className="shadow-md mt-1 block w-full sm:text-sm"
            type="text"
            id="username"
            name="username"
          /> */}
          <br />

          <label
            // className="text-lg flex justify-between items-end"
            for="firstname"
          >
            <input required
              // className="shadow-md mt-1 block w-full sm:text-sm"
              type="text"
              id="firstname"
              name="firstname"
            />
            <div className="label-text">
              First name:
          </div>

          </label>
          <br />
          {/* <input
            className="shadow-md mt-1 block w-full sm:text-sm"
            type="text"
            id="firstname"
            name="firstname"
          /> */}
          <br />

          <label
            // className="text-lg flex justify-between items-end"
            for="City">
            <input required
              // className="shadow-md mt-1 block w-full sm:text-sm bg-white"
              type="text"
              id="City"
              name="City"
            />
            <div className="label-text">
              Enter City:
          </div>

          </label>
          <br />
          {/* <input
            className="shadow-md mt-1 block w-full sm:text-sm bg-white"
            type="text"
            id="City"
            name="City"
          /> */}
          <br />

          <label
            // className="text-lg flex justify-between items-end"
            for="HomeGym"
          >
            <input required
              // className="shadow-md mt-1 block w-full sm:text-sm"
              type="text"
              id="HomeGym"
              name="HomeGym"
            />
            <div className="label-text">
              Enter Home Gym:
          </div>

          </label>
          <br />
          {/* <input
            // className="shadow-md mt-1 block w-full sm:text-sm"
            type="text"
            id="HomeGym"
            name="HomeGym"
          /> */}
          <br />

          {/* <input
            className="mt-1"
            type="checkbox"
            id="skillLevel"
            name="skillLevel"
            value="Beginner"
          /> */}
          <label className="checkboxcolor" for="skillLevel">
            <input
              className="mt-1"
              type="checkbox"
              id="skillLevel"
              name="skillLevel"
              value="Beginner"
            />
            <div className="label-text">
              I am a beginner! Help me learn please.
            </div>
          </label>
          <br />

          {/* <input
            type="checkbox"
            id="skillLevel"
            name="skillLevel"
            value="Intermediate"
          /> */}
          <label className="checkboxcolor" for="skillLevel">
            <input
              type="checkbox"
              id="skillLevel"
              name="skillLevel"
              value="Intermediate"
            />
            <div className="label-text">
              I am at an intermediate skill level
            </div>
          </label>
          <br />

          {/* <input
            type="checkbox"
            id="skillLevel"
            name="skillLevel"
            value="Advanced"
          /> */}
          <label className="checkboxcolor" for="skillLevel">
            <input
              type="checkbox"
              id="skillLevel"
              name="skillLevel"
              value="Advanced"
            />
            <div className="label-text">
              I am at an advanced skill level
          </div>
          </label>
          <br />

          <label
            className=""
            for="funfact">
            <input required
              className=""
              type="text"
              id="funfact"
              name="funfact"
            />
            <div className="label-text height ">
              Enter a fun fact about yourself:
          </div>
          </label>
          <br />
          {/* <input
            className="shadow-md block w-full sm:text-sm"
            type="text"
            id="funfact"
            name="funfact"
          /> */}
          <br />

          {dayOfWeek("Monday")}
          {dayOfWeek("Tuesday")}
          {dayOfWeek("Wednesday")}
          {dayOfWeek("Thursday")}
          {dayOfWeek("Friday")}
          {dayOfWeek("Saturday")}
          {dayOfWeek("Sunday")}


          <button
          //  className="submitForm border rounded hover:bg-gray-500 hover:text-white mt-2"
          >
            Submit Form
            </button>


        </form>
      </div>
    </>
  );
}

export default CreateProfileForm;
