import { useState } from "react"
function LoginOnly() {
  const [inputsObj, setInputsObj] = useState({});
  const handleInputs = (e) => {
    const clone = inputsObj;
    clone[e.target.name] = e.target.value;
    setInputsObj(clone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify(inputsObj),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        window.location.href = "/userprofile"    
      });
  };
  return (
    <div className="z-30 relative items-center justify-center w-full h-full overflow-auto">
      <div className="inset-0 h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://firebasestorage.googleapis.com/v0/b/portfoliopix-7a60a.appspot.com/o/tim-trad-tkxqguCmofw-unsplash.jpg?alt=media&token=e0f8e0e4-3641-4d8b-a7f5-7b6cde6a9459')"
        }}
      >
      </div>
      <div className="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75"></div>
      <div className="absolute inset-0  z-30  flex flex-col items-center justify-center">
        <div className="shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://firebasestorage.googleapis.com/v0/b/portfoliopix-7a60a.appspot.com/o/tim-trad-tkxqguCmofw-unsplash.jpg?alt=media&token=e0f8e0e4-3641-4d8b-a7f5-7b6cde6a9459')"
          }}>
          <div className="grid grid-cols-12 gap-1">
            <div className="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
              <div className="border-l-4 border-gray-400 py-20 px-5 mx-2">
                <p className="italic text-white text-xl md:text-4xl lg:text-6xl uppercase text-center  font-semibold ">
                  Login to Belay Buddy Here!
                        </p>
              </div>
              <div className="text-gray-400 font-semibold text-xl mb-4">Belay Buddy</div>
              <div className="absolute border-gray-400 border-t-4 bottom-0 py-1 px-4 w-4/5"></div>
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
              <div style={{backgroundColor:"#ECAB3E", opacity:"0.75"}} className="relative  h-full md:h-96 w-full bg-opacity-50 rounded-tr-lg rounded-br-lg">
                <div className="p-8">
                  <p className="text-white text-xs md:text-sm lg:text-xl mb-4">
                    insert inspirational quote here... 
                  </p>
                            <form onSubmit={handleSubmit}>
                  <label

                    for="username"
                  >
                    <input required
                      onChange={handleInputs}
                      placeholder="User Name"
                      className="placeholder-white"
                      type="text"
                      id="username"
                      name="username"
                    />
                  </label>
                  <label
                    for="password"
                  >
                    <input required
                      onChange={handleInputs}
                      className="placeholder-white"
                      placeholder="Password"
                      type="password"
                      id="password"
                      name="password"
                    />
                  </label>
                  <div className="bottom-0 absolute p-2 right-0">
                    <button
                     type="submit"
                     className="opacity-75 bg-gray-100 hover:bg-blue-400  hover:text-white text-sm font-bold py-2 px-4 rounded inline-flex items-center">
                      Sign In
                    </button>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginOnly

