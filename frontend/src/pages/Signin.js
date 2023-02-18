import { useState } from "react"
import { Link } from "react-router-dom"
const Signin=()=>{
    
    const [email_,setEmail_]=useState("")
   
    const [password_,setPassword_]=useState("")
    
    const handle_email_=(event)=>{
        setEmail_(event.target.value);
    }
    
    const handle_pass_=(event)=>{
        setPassword_(event.target.value);
    }
    
    const handle_click_=(event)=>{
        event.preventDefault();
    };
    return (
        <div className="signup">
                <div className="wrapper-signup">
                <h2>Sign In</h2>
            <input className="entry" type="email" placeholder="Email" onChange={handle_email_} value={email_}>
            </input>
            <input className="entry" type="password" placeholder="Password" onChange={handle_pass_} value={password_}></input><br>
            </br>
            <button className="signup-final-button" onClick={handle_click_}>Go</button>
                </div>
        </div>
    )
}
export default Signin;