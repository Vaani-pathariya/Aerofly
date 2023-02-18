import logo from "../blue_logo.png"
import "./loading.css"
import ReactLoading from "react-loading"
const Loading=()=>{
    return(
        <div className="loading">
            <img src={logo} className="loading-logo"></img>
            <h2>Your go to destination<br></br>for flight delay prediction</h2>
            <ReactLoading type={"bubbles"} color={"#ffcb77"} height={'10%'} width={'5%'} className="loading_bubbles"/>
        </div>
    )
}
export default Loading