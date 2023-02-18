import "./main.css"
import logo from "../blue_logo.png"
import { Link, Outlet } from "react-router-dom"
const Main=()=>{
    
    return(
        <div className="main">
            <nav className="main-nav">
                <img src={logo} ></img>
                <h2><Link to="/about">About</Link></h2>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}
export default Main;