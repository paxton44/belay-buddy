
function LoginOnly(){




    return(
      <> 
<div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 my-10">
    <div className="mb-4">
      <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input className="border border-grey-light bg-gradient-to-r from-gray-700 border border-grey-light rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username" />
    </div>
    <div className="mb-6">
      <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="bg-gradient-to-r from-gray-700 border-grey-light shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />
      <p className="text-xs italic bg-gradient-to-r from-gray-700 rounded text-center">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
        Sign In
      </button>
      <a className=" rounded bg-gradient-to-r from-gray-700 inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker  text-center" href="#" >
        Forgot Password?
      </a>
    </div>
    </div>


        </>
    )
}

export default LoginOnly

