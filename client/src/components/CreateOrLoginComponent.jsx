import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
function CreateOrLoginComponent() {
    const [inputsObj, setInputsObj] = useState({
      });
    const testapi = () => {
        fetch('/test')
        .then(data => data.json())
        .then(data => console.log(data))
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
        //post form data to /register route
        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify(inputsObj),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(data => data.json())
        .then(data => {
            console.log(data)
            
            // window.location.href = "/" this is my redirect route for after auth, i set it where the slash is
        })
       
      };

    return (
        <>

            <div className=" min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className=" px-6 py-8 rounded text-black w-full">
                        <h1 className="mb-8 text-3xl text-white text-center">Sign up</h1>
                        <form onSubmit={handleSubmit}>
                        <input onChange={handleInputs}
                            type="text"
                            className="border border-grey-light bg-gradient-to-r from-gray-700  block w-full p-3 rounded mb-4"
                            name="fullname"
                           placeholder="Full Name" />

                        <input onChange={handleInputs}
                            type="text"
                            className="border border-grey-light bg-gradient-to-r from-gray-700 block w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />

                        <input onChange={handleInputs}
                            type="password"
                            className="bg-gradient-to-r from-gray-700 block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
                        <input onChange={handleInputs}
                            type="password"
                            className="bg-gradient-to-r from-gray-700 block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password" />


                        
                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded bg-green text-red-700 hover:bg-green-200 focus:outline-none my-1"
                            >Create Account</button>
                        
                        </form>
                        <div className="App">
		<button onClick={testapi}>Test API</button>
    </div>

                        <div className="text-center text-lg text-red-700 mt-4">
                            By signing up, you agree to the
                        <button className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                        </button> anda
                        <button className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                        </button>
                        </div>
                    </div>

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
        </>
    );
}


export default CreateOrLoginComponent;