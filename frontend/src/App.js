import { useState,useEffect } from "react"; 
import Loading from "./pages/Loading";
import Main from "./pages/Main";
import {Route,Routes} from "react-router-dom"
import "./app.css"
import Prediction from "./pages/Prediction";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import About from "./pages/About";
function App() {
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false);
    },6000)
  },[])
  return (
    <div className="App">
      {
        loading ?
        <Loading/>
        :
        <Routes>
         <Route exact path="/" element={<Main/>}>
          <Route path="" element={<Signup/>}></Route>
          <Route path="prediction" element={<Prediction/>}></Route>
          <Route path="signin" element={<Signin/>}></Route>
          <Route path="about" element={<About/>}></Route>
         </Route>
        </Routes>
      }
    </div>
  );
}

export default App;
