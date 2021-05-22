function LoginOnly(){
    return(
      <> 
<div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 my-10">
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username" />
    </div>
    <div class="mb-6">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />
      <p class="text-xs italic bg-white text-center">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker bg-white text-center" href="#" >
        Forgot Password?
      </a>
    </div>
    </div>


        </>
    )
}

export default LoginOnly

