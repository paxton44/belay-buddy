import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function UserProfileComponent() {
      
    return (
        <>
            <p>userprofile</p>
            <div className="card">
                <div className="card-top">
                    <img src={"https://place-puppy.com/100x100"}
                        alt={""} className="" />
                    <h1>Belay Buddy</h1>
                    <p>future dev- "belay buddy email contact goes here</p>
                    <p>future dev- phone number goes here</p>
                </div>
                <div className="card-details">
{/* <p>
{`City:${props.inputsobj.city}`}
</p> */}
{/* <p>
{`Home Gym:${props.inputsobj.homegym}`}
</p> */}
{/* <p>
{`Skill Level:${props.inputsobj.skillLevel}`}
</p> */}
{/* <p>
{`Fun Fact:${props.inputsobj.funfact}`}
</p> */}
{/* make an or statement that says if no info add placeholder or something */}
{/* <p>Times Available:</p>
<p>{`Monday:${props.inputsobj.Mondaytime}`}</p>
<p>{`Tuesday:${props.inputsobj.Tuesdaytime}`}</p>
<p>{`Wednesday:${props.inputsobj.Wednesdaytime}`}</p>
<p>{`Thursday:${props.inputsobj.Thursdaytime}`}</p>
<p>{`Friday:${props.inputsobj.Fridaytime}`}</p>
<p>{`Saturday:${props.inputsobj.Saturdaytime}`}</p>
<p>{`Sunday:${props.inputsobj.Sundaytime}`}</p> */}
                </div>
            </div>
            {/* add an image background to this button */}
            <Link to="landingpage">
            <button>Enter BelayBuddy</button>
            </Link>
        </>
    )
}

export default UserProfileComponent