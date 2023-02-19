import { useState } from "react";
const Prediction =()=>{
    const [time,settime]=useState("")
    const [length,setLength]=useState("")
    const [airline,setAirline]=useState("")
    const [from,setFrom]=useState("")
    const [to,setTo]=useState("")
    const [day,setDay]=useState("")
    const handle_time=(event)=>{
        settime(event.target.value);
    }
    const handle_length=(event)=>{
        setLength(event.target.value);
    }
    const handle_airline=(event)=>{
        setAirline(event.target.value);
    }
    const handle_from=(event)=>{
        setFrom(event.target.value);
    }
    const handle_to=(event)=>{
        setTo(event.target.value);
    }
    const handle_day=(event)=>{
        setDay(event.target.value);
    }
    const handle_click=async(event)=>{
        event.preventDefault();
        const str=time+" "+length+" "+day+" "+"Airline_"+airline.toUpperCase()+" "+"AirportFrom_"+from.toUpperCase()+" "+"AirportTo_"+to.toUpperCase();
        console.log(str)
        const add=await fetch("http://localhost:5000/predict",{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                string:str
            })
        }).then(()=>{
            console.log(add)
        })
        response()

    };
    const [display,setDisplay]=useState("");
    const [ans,setAns]=useState(true)
    const response =()=>{
        fetch("http://localhost:5000/predict",{method:"GET"})
            .then(res=>res.json())
            .then((res)=>{
                if (res==0){
                    setAns(false)
                }
                else{
                    setAns(true)
                }
                console.log(res)
            })
        if(ans){
            setDisplay("The flight will be delayed")
        }
        else {
            setDisplay("The flight will be on time")
        }
    }
    return (
        <div className="prediction">
                <div className="wrapper-prediction">
                <h2>Enter parameters:</h2>
                <input className="entry" type="text" placeholder="Enter Time in 24 hour clock time" onChange={handle_time} value={time}></input>
                <input className="entry" type="text" placeholder="Enter the length of the flight" onChange={handle_length} value={length}></input>
                <input className="entry" type="text" placeholder="Airline Name(enter the airline code)" onChange={handle_airline} value={airline}></input>
                <input className="entry" type="text" placeholder="Airline From(enter the airport code)" onChange={handle_from} value={from}></input>
                <input className="entry" type="text" placeholder="Airline To(enter the airport code)" onChange={handle_to} value={to}></input>
                <input className="entry" type="text" placeholder="Day of week (1 for Monday and so on)" onChange={handle_day} value={day}></input>
                <button className="prediction-final-button" onClick={handle_click}>Predict</button><br></br>
                <button className="prediction-final-button">{display}</button>
            </div>
            </div>
    )
}
export default Prediction;