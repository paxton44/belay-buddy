function CreateProfileForm(props) {
    const dayOfWeek = (day) => {
        return (
            <>
                <p>What is your availability on {day}</p>
                {/* <input type="text" required name={`${day}trainers-name`} onChange={props.handleInputs} /> */}
                <select name={`${day}Time`} onChange={props.handleInputs}>
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
        )
    }
    return (
        <>
            <div className=" container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 my-10">
            <form onSubmit={props.handleSubmit} onChange={props.handleInputs}>
                    {/* input fields and labels for the data we recieve for our form. we want to store all of this to an array to be used later(useState) */}
                    <label className="text-white" for="username">Enter User Name:</label><br />
                    <input type="text" id="username" name="username" /><br />

                    <label className="text-white" for="firstname">First name:</label><br />
                    <input type="text" id="firstname" name="firstname" /><br />

                    <label className="text-white" for="city">Enter City:</label><br />
                    <input type="text" id="city" name="city" /><br />

                    <label className="text-white" for="homegym">Enter Home Gym:</label><br />
                    <input type="text" id="homegym" name="homegym" /><br />

                    <input type="checkbox" id="skillbegin" name="skillbegin" value="Beginner" />
                    <label className="text-white" for="skillbegin"> I am a beginner! Help me learn please.</label><br />

                    <input type="checkbox" id="skillintermediate" name="skillintermediate" value="Intermediate" />
                    <label className="text-white" for="skillintermediate"> I am at an intermediate skill level</label><br />
                    
                    <input type="checkbox" id="skilladvanced" name="skilladvanced" value="Advanced" />
                    <label className="text-white" for="skilladvanced"> I am at an advanced skill level</label><br />

                    <label className="text-white" for="funfact">Enter a fun fact about yourself:</label><br />
                    <input type="text" id="funfact" name="funfact" /><br />

                {/* <form onSubmit={props.handleSubmit}> */}
                        {dayOfWeek('Monday')}
                        {dayOfWeek('Tuesday')}
                        {dayOfWeek('Wednesday')}
                        {dayOfWeek('Thursday')}
                        {dayOfWeek('Friday')}
                        {dayOfWeek('Saturday')}
                        {dayOfWeek('Sunday')}

                        <button>Click Me </button>

                    </form>
                    
            </div>
            
        </>
    )
}

export default CreateProfileForm;