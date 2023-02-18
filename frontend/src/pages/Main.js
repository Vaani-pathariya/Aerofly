import "./main.css"
import logo from "../blue_logo.png"
import { Outlet } from "react-router-dom"
const Main=()=>{
    
    return(
        <div className="main">
            <nav className="main-nav">
                <img src={logo} ></img>
                <h2>About Us</h2>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}
export default Main;