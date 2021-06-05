import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function UserProfileComponent() {
      
    return (
        <>
            <div className="card">
                <div className="card-top">
                    <img src={"https://place-puppy.com/100x100"}
                        alt={""} className="rounded-full" />
                    <h1>Belay Buddy</h1>
                    <p>future dev- "belay buddy email contact goes here</p>
                    <p>future dev- phone number goes here</p>
                </div>
                <div className="card-details">
<p>
City: Denver
</p>
<p>
Home gym: Some gym in denver bro, i just told you
</p>
<p>
skill level: I'm aight
</p>
<p>
fun fact: Im not actually "aight" :-P
</p>
{/* make an or statement that says if no info add placeholder or something */}
<p>Times Available:</p>
<p>Monday:7</p> 
<p>Tuesday:8</p>
<p>Wednesday:9</p>
<p>Thursday:10</p>
<p>Friday:11</p>
<p>Saturday:12</p>
<p>Sunday:1</p>
                </div>
            </div>
        </>
    )
}

export default UserProfileComponent