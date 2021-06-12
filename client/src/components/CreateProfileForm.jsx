import { useState } from "react";

function CreateProfileForm() {
  const [inputsObj, setInputsObj] = useState({});
  const handleInputs = (e) => {
    const clone = inputsObj;
    clone[e.target.name] = e.target.value;
    setInputsObj(clone);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("form submitted");
    let userProfileData = inputsObj;
    userProfileData.user_id = window.localStorage.getItem("uid");
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
        window.location.href = "/userprofile";
      });
  };
  const dayOfWeek = (day) => {
    return (
      <div>
        <p
          className="day"
        >
          What is your availability on {day}
        </p>
        <select
          className="checkboxcolor bg-transparent hover:bg-gray-500"
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
        className="maincontainer overflow-scroll">
        <form style={{backgroundColor:"#468097"}}
          onSubmit={handleSubmit}
          onChange={handleInputs}>
          <label for="username">
            <input
              required
              // className="shadow-md mt-1 block w-full sm:text-sm"
              type="text"
              id="username"
              name="username" />
            <div className="label-text">Enter User Name:</div>
          </label>
          <br />
          <br />
          <label for="firstname">
            <input
              required
              type="text"
              id="firstname"
              name="firstname"
            />
            <div className="label-text">First name:</div>
          </label>
          <br />
          <br />
          <label
            for="City">
            <input
              required
              type="text"
              id="City"
              name="City"
            />
            <div className="label-text">Enter City:</div>
          </label>
          <br />
          <br />
          <label
            for="HomeGym">
            <input
              required
              type="text"
              id="HomeGym"
              name="HomeGym"/>
            <div className="label-text">Enter Home Gym:</div>
          </label>
          <br />
          <br />
          <label className="checkboxcolor" for="skillLevel">
            <input
              className="mt-1"
              type="checkbox"
              id="skillLevel"
              name="skillLevel"
              value="Beginner"/>
            <div className="label-text">
              I am a beginner! Help me learn please.
            </div>
          </label>
          <br />
          <label className="checkboxcolor" for="skillLevel">
            <input
              type="checkbox"
              id="skillLevel"
              name="skillLevel"
              value="Intermediate"/>
            <div className="label-text">
              I am at an intermediate skill level
            </div>
          </label>
          <br />
          <label className="checkboxcolor" for="skillLevel">
            <input
              type="checkbox"
              id="skillLevel"
              name="skillLevel"
              value="Advanced"
            />
            <div className="label-text">I am at an advanced skill level</div>
          </label>
          <br />
          <label className="" for="funfact">
            <input
              required
              className=""
              type="text"
              id="funfact"
              name="funfact"
            />
            <div className="label-text height ">
            Are you comfortable climbing with other genders?
            </div>
          </label>
          <br />
          <br />
          {dayOfWeek("Monday")}
          {dayOfWeek("Tuesday")}
          {dayOfWeek("Wednesday")}
          {dayOfWeek("Thursday")}
          {dayOfWeek("Friday")}
          {dayOfWeek("Saturday")}
          {dayOfWeek("Sunday")}

          <button>
            Submit Form
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateProfileForm;
