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
    // insert values from input boxes (name, city, etc)
    console.log('test')
    API.saveProfile({ inputsObj });
  };
  
  const dayOfWeek = (day) => {
    return (
      <>
        <p className="text-lg daytext">What is your availability on {day}</p>
        <select
          className="dropdown shadow-md mt-1 block sm:text-sm border-gray-900"
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
      </>
    );
  };
  return (
    <>
      <div className="flex">
        <form
          onSubmit={handleSubmit}
          onChange={handleInputs}
          className="my-20 p-10 max-w-xl mx-auto shadow-md sm:border-0 md:border md:border-gray-900 text-gray-900 "
        >
          {/* input fields and labels for the data we recieve for our form. we want to store all of this to an array to be used later(useState) */}
          <label
            className="text-lg flex justify-between items-end"
            for="username"
          >
            Enter User Name:
          </label>
          <br />
          <input
            className="shadow-md mt-1 block w-full sm:text-sm"
            type="text"
            id="username"
            name="username"
          />
          <br />

          <label
            className="text-lg flex justify-between items-end"
            for="firstname"
          >
            First name:
          </label>
          <br />
          <input
            className="shadow-md mt-1 block w-full sm:text-sm"
            type="text"
            id="firstname"
            name="firstname"
          />
          <br />

          <label className="text-lg flex justify-between items-end" for="city">
            Enter City:
          </label>
          <br />
          <input
            className="shadow-md mt-1 block w-full sm:text-sm bg-white"
            type="text"
            id="city"
            name="city"
          />
          <br />

          <label
            className="text-lg flex justify-between items-end"
            for="homegym"
          >
            Enter Home Gym:
          </label>
          <br />
          <input
            className="shadow-md mt-1 block w-full sm:text-sm"
            type="text"
            id="homegym"
            name="homegym"
          />
          <br />

          <input
            className="shadow-md mt-1"
            type="checkbox"
            id="skillLevel"
            name="skillLevel"
            value="Beginner"
          />
          <label className="" for="skillLevel">
            {" "}
            I am a beginner! Help me learn please.
          </label>
          <br />

          <input
            type="checkbox"
            id="skillLevelIntermediate"
            name="skillLevelIntermediate"
            value="Intermediate"
          />
          <label className="" for="skillLevelIntermediate">
            {" "}
            I am at an intermediate skill level
          </label>
          <br />

          <input
            type="checkbox"
            id="skillLevel"
            name="skillLevel"
            value="Advanced"
          />
          <label className="" for="skillLevel">
            {" "}
            I am at an advanced skill level
          </label>
          <br />

          <label className="text-lg flex   mt-5" for="funfact">
            Enter a fun fact about yourself:
          </label>
          <br />
          <input
            className="shadow-md block w-full sm:text-sm"
            type="text"
            id="funfact"
            name="funfact"
          />
          <br />

          {dayOfWeek("Monday")}
          {dayOfWeek("Tuesday")}
          {dayOfWeek("Wednesday")}
          {dayOfWeek("Thursday")}
          {dayOfWeek("Friday")}
          {dayOfWeek("Saturday")}
          {dayOfWeek("Sunday")}
          {/* <Link to="landingpage"> */}
          {/* center this button */}
          <div className="">
            <button className="submitForm border rounded hover:bg-gray-500 hover:text-white mt-2">
              Submit Form{" "}
            </button>
          </div>
          {/* </Link> */}
        </form>
      </div>
    </>
  );
}

export default CreateProfileForm;
