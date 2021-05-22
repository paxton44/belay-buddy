import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function CreateOrLoginComponent(){
    return(
    <>

<div class=" min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class=" px-6 py-8 rounded text-black w-full">
                    <h1 class="mb-8 text-3xl text-white text-center">Sign up</h1>
                    <input 
                        type="text"
                        class="border border-grey-light bg-gradient-to-r from-gray-700  block w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        class="border border-grey-light bg-gradient-to-r from-gray-700 block w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="bg-gradient-to-r from-gray-700 block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        class="bg-gradient-to-r from-gray-700 block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green text-red-700 hover:bg-green-200 focus:outline-none my-1"
                    >Create Account</button>

                    <div class="text-center text-lg text-red-700 mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div class="text-red-700 text-lg  mt-6">
                    
                    Already have an account? 
                    <Link to="login">
                    <span class="no-underline border-b border-blue text-blue">
                        Log in
                    </span>.
                    </Link>
                </div>
            </div>
        </div>
    </>
    );
}


export default CreateOrLoginComponent;