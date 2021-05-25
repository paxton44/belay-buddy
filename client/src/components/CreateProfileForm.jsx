function CreateProfileForm() {
    return (
        <>
            <form>
                {/* input fields and labels for the data we recieve for our form. we want to store all of this to an array to be used later(useState) */}
                <label for="uname">Enter User Name:</label><br />
                <input type="text" id="uname" name="uname" /><br />
                <label for="fname">First name:</label><br />
                <input type="text" id="fname" name="fname" /><br />
                <label for="entercity">Enter City:</label><br />
                <input type="text" id="entercity" name="entercity" /><br />
                <label for="enterhomegym">Enter Home Gym:</label><br />
                <input type="text" id="enterhomegym" name="enterhomegym" /><br />

                <input type="checkbox" id="skillbegin" name="skillbegin" value="Begginner" />
                <label for="skillbegin"> I am a beginner! Help me learn please.</label><br />
                <input type="checkbox" id="skillintermediate" name="skillintermediate" value="Intermediate" />
                <label for="skillintermediate"> I am at an intermediate skill level</label><br />
                <input type="checkbox" id="skilladvanced" name="skilladvanced" value="Advanced" />
                <label for="skilladvanced"> I am at an advanced skill level</label><br />

                <label for="funfact">Enter a fun fact about yourself:</label><br />
                <input type="text" id="funfact" name="funfact" /><br />

                {/* this was stupid.... make a div style it to be inline, put a checkbox, and a drop down in it.... thats stupid too, keep the drop down, wrap it in a div, inline it, aand add the checkbox format from above */}
                <label for="availability">Choose your availability:</label>
                <select name="availability" id="availability">
                    <option value="sixam">6 a.m.</option>
                    <option value="sevenam">7 a.m.</option>
                    <option value="eightam">8 a.m.</option>
                    <option value="nineam">9 a.m.</option>
                    <option value="tenam">10 a.m.</option>
                    <option value="elevenam">11 a.m.</option>
                    <option value="twelvepm">12 p.m.</option>
                    <option value="onepm">1 p.m.</option>
                    <option value="twopm">2 p.m.</option>
                    <option value="threepm">3 p.m.</option>
                    <option value="fourpm">4 p.m.</option>
                    <option value="fivepm">5 p.m.</option>
                    <option value="sixpm">6 p.m.</option>
                    <option value="sevenpm">7 p.m.</option>
                    <option value="eightpm">8 p.m.</option>
                    <option value="ninepm">9 p.m.</option>
                    <option value="tenpm">10 p.m.</option>
                </select>
            </form>
        </>
    )
}

export default CreateProfileForm;