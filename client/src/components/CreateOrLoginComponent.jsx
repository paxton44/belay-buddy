import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
function CreateOrLoginComponent() {
  const [inputsObj, setInputsObj] = useState({});
  const testapi = () => {
    fetch("/test")
      .then((data) => data.json())
      .then((data) => console.log(data));
  };

  const handleInputs = (e) => {
    const clone = inputsObj;
    clone[e.target.name] = e.target.value;
    setInputsObj(clone);
    // console.log(e)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputsObj);
    //post form data to /register route.
    fetch("/api/users/register", {
      method: "POST",
      body: JSON.stringify(inputsObj),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        window.localStorage.setItem("uid", data._id)
        window.location.href = "/createprofile"
        // window.location.href = "/" this is my redirect route for after auth, i set it
      });
  };

  return (
    <div className=" min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center  px-2">
        <div className=" px-6 py-8 rounded text-black w-full">
          {/* Animated Sign Up Header */}
          <div className="box">
            <div className="inner">
              <span>Sign Up</span>
            </div>
            <div className="inner">
              <span>Sign Up</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
          

            <h1 className="mb-8 text-3xl text-white text-center">Sign up</h1>
            {/* <form onSubmit={handleSubmit}> */}
              <input
              style={{ backgroundColor: "#ECAB3E" }}
                onChange={handleInputs}
                type="text"
                className="placeholder-red-700  opacity-50 font-bold block w-full p-3 rounded mb-4"
                name="fullname"
                placeholder="Full Name"
              />


            <input
                style={{ backgroundColor: "#ECAB3E" }}
                onChange={handleInputs}
                type="text"
                className=" placeholder-red-700  opacity-50 font-bold block w-full p-3 rounded mb-4"
                name="username"
                placeholder="Create a username"
              />

              <input
                style={{ backgroundColor: "#ECAB3E" }}
                onChange={handleInputs}
                type="text"
                className=" placeholder-red-700  opacity-50 font-bold block w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
              />

              <input
                style={{ backgroundColor: "#ECAB3E" }}
                onChange={handleInputs}
                type="password"
                className="placeholder-red-700  opacity-50 font-bold block  w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
              />
              <input
                style={{ backgroundColor: "#ECAB3E" }}
                onChange={handleInputs}
                type="password"
                className="placeholder-red-700  opacity-50 font-bold block  w-full p-3 rounded mb-4"
                name="confirm_password"
                placeholder="Confirm Password"
              />

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green text-red-700 font-bold hover:bg-blue-500 focus:outline-none my-1"
              >
                Create Account
              </button>
            {/* </form> */}
            <div className="App">
              <button onClick={testapi}>Test API</button>
            </div>

            <div className="text-center text-lg text-red-700 mt-4">
              By signing up, you agree to the
              <button
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </button>{" "}
              anda
              <button
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </button>
            </div>
          </form>

          <div className="text-red-700 text-lg  mt-6">
            Already have an account?
            <Link to="login">
              <span className="no-underline border-b border-blue text-blue">
                Log in
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateOrLoginComponent;
