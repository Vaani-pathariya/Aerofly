import { useState } from "react"
import { Link } from "react-router-dom"
const Signup=()=>{
    const [first,setFirst]=useState("")
    const [last,setLast]=useState("")
    const [email,setEmail]=useState("")
    const [Language,setLanguage]=useState("")
    const [password,setPassword]=useState("")
    const [confirm,setConfirm]=useState("")
    const handle_first=(event)=>{
        setFirst(event.target.value);
    }
    const handle_second=(event)=>{
        setLast(event.target.value);
    }
    const handle_email=(event)=>{
        setEmail(event.target.value);
    }
    const handle_language=(event)=>{
        setLanguage(event.target.value);
    }
    const handle_pass=(event)=>{
        setPassword(event.target.value);
    }
    const handle_confirm=(event)=>{
        setConfirm(event.target.value);
    }
    const handle_click=async (event)=>{
        event.preventDefault();
        const add=await fetch("http://localhost:5000/",{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                first:first,
                last:last,
                email:email,
                Language:Language,
                password:password
            })
        }).then(()=>{
            console.log(add)
        })
    };
    return (
        <div className="signup">
                <div className="wrapper-signup">
                <h2>Sign Up<br></br>for a more personalized experience</h2>
                <input className="entry" type="text" placeholder="First Name" onChange={handle_first} value={first}>
            </input>
            <input className="entry" type="text" placeholder="Last Name" onChange={handle_second} value={last}>
            </input>
            <input className="entry" type="email" placeholder="Email" onChange={handle_email} value={email}>
            </input>
            <input className="entry" type="text" placeholder="Language" onChange={handle_language} value={Language}>
            </input>
            <input className="entry" type="password" placeholder="Password" onChange={handle_pass} value={password}></input>
            <input className="entry" type="password" placeholder="Confirm Password" onChange={handle_confirm} value={confirm}></input><br></br>
            <button className="signup-final-button" onClick={handle_click}>Lets go</button> OR <Link to="/signin"><button className="signup-final-button">Sign In</button></Link>
                </div>
            <h3>OR</h3>
            <Link to="/prediction"><button className="signup-final-button">Move to Predictions</button></Link>
            </div>
    )
}
export default Signup