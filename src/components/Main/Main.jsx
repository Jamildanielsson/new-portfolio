import "./main.css"
import emoji from "../../assets/emoji.png"

import { IoIosArrowDown } from "react-icons/io";



const Main = () => {
  return (
    <div>
    <div className="main">
    <div className="wrapper">
      <div className="welcome">
        <h1>Hi there!</h1>
        <h1> My name is Jamil Danielsson and Im a developer.</h1>
        <br></br>
        <p>Well.. I try to be, most of the time. But Im really passionate about it.</p>
      </div>
      <div className="image-container">
      <img src={emoji} className="image-control" alt="Profile picture" />
      </div>
    </div>
    </div>
        <div className="arrow-down">
        <IoIosArrowDown id="projects" />
        </div>
        </div>
        
  )
}

export default Main