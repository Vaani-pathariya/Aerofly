import { useState,useEffect } from "react"; 
import Loading from "./pages/Loading";
import Main from "./pages/Main";
import {Route,Routes} from "react-router-dom"
import "./app.css"
import Prediction from "./pages/Prediction";
import Signup from "./pages/Signup";
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
         </Route>
        </Routes>
      }
    </div>
  );
}

export default App;
