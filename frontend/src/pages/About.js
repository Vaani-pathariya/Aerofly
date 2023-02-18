import "./about.css"
import abt1 from "../abt1.webp"
import abt2 from "../abt2.webp"
const About=()=>{
    return (
        <div className="About_us">
            <div className="About-wrapper">
            <h1>Hello !</h1>
            <h3>I try to solve the problem of aeroplane delays through the use of Machine Learning.</h3>
            <img src={abt1}></img>
            <h3>Upon research , I found that their are four to five main reasons for Flight delays :
            Plane servicing, Weather(yup, weather is not the most prominant reason),connecting flights ,etc.</h3>
            <img src={abt2}></img>
            <h3>Taking into account the precious time of the passangers that gets wasted because of waiting for the flights, I thought of coming up with a solution to the problem using machine learning.The various factors of weather ,plane age,air traffic,food supplies,air mails,locations of the aitports, timing , and many more need to be taken care of.Though I am short of data related to all the required parameters.<h2>Vision</h2> is to make the project achieve the highest possible accuracy while taking all the required parameters in mind. </h3>
            <button className="signup-final-button">Want to share your flight experience?</button>
            </div>
        </div>
    )
}
export default About;