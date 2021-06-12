import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
function CreateOrLoginComponent() {
  const [inputsObj, setInputsObj] = useState({});
  const handleInputs = (e) => {
    const clone = inputsObj;
    clone[e.target.name] = e.target.value;
    setInputsObj(clone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        window.localStorage.setItem("uid", data._id)
        window.location.href = "/createprofile"    
      });
  };

  return (
    <div className=" min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center  px-2">
        <div className=" px-6 py-8 rounded text-black w-full">
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
            <input
              style={{ backgroundColor: "#ECAB3E" }}
              onChange={handleInputs}
              type="text"
              className="hover:opacity-100 placeholder-black opacity-75 font-bold text-xl block w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />
            <input
              style={{ backgroundColor: "#ECAB3E" }}
              onChange={handleInputs}
              type="text"
              className="hover:opacity-100 opacity-75 font-bold text-xl placeholder-black font-bold block w-full p-3 rounded mb-4"
              name="username"
              placeholder="Create a username"
            />
            <input
              style={{ backgroundColor: "#ECAB3E" }}
              onChange={handleInputs}
              type="text"
              className="hover:opacity-100 font-bold text-xl placeholder-black opacity-75 font-bold block w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />
            <input
              style={{ backgroundColor: "#ECAB3E" }}
              onChange={handleInputs}
              type="password"
              className="hover:opacity-100 font-bold text-xl placeholder-black opacity-75 font-bold block  w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
              style={{ backgroundColor: "#ECAB3E" }}
              onChange={handleInputs}
              type="password"
              className="hover:opacity-100 font-bold text-xl placeholder-black opacity-75 font-bold block  w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />
            <button
              style={{ backgroundColor: "#ECAB3E" }}
              type="submit"
              className="font-bold text-xl opacity-75 bg w-full text-center py-3 rounded text-black font-bold hover:opacity-100 focus:outline-none my-1"
            >
              Create Account
              </button>
          </form>
          <div style={{ backgroundColor: "#ECAB3E" }}
            className="rounded opacity-75 text-center text-lg text-black font-bold mt-4">
            By signing up, you agree to the
              <button
              className="font-bold"
              href="#"
            >
              Terms of Service
              </button>{" "}
              and {""}
              <button
              className="font-bold"
              href="#"
            >
              Privacy Policy
              </button>
              Already have an account?
            <Link to="login">
              <span className="hover:bg-white ">
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
