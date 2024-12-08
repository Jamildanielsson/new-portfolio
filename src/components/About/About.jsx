import "./about.css";
import profile from "../../assets/profile.png";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { IoAccessibilityOutline } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-wrapper" id="about">
      <div className="about">
        <div className="about-col-1">
          <h1>About me</h1>

          <br></br>
          <p>
            Hello everybody! A big thank you for reaching this far! I'm a tech
            entusiast, a problem-solving supernerd with a freakish design-interest. My
            name is Jamil Danielsson and I am a developer mainly within the
            frontend-area but looking to expand my competences into becoming a
            fullstack developer. I graduated as a Frontend Developer from
            Jensen’s Higher Vocational School in June 2024.
            <br></br>
            <br></br>
            When I am not doing code or solving problems, I do and have been
            doing skateboarding for over 25 years and some years even
            professionally traveling the world to create articles, interviews,
            photography and videography. I love videogames, comics and tv-shows!
            Feel free to hit me up with recommendations for any of the above!
          </p>
        </div>
        <div className="about-col-2">
          <img src={profile} className="image-boxy" alt="Profile picture" />
        </div>
        <div className="about-col-3">
          <h1 className="skills-headline">My skills and tools:</h1>
          <div className="skills-icons">
            <ul className="skills-list">
              <li className="icons-list">
                <FaHtml5 className="icons" />
                <p>HTML5</p>
              </li>
              <li className="icons-list">
                <FaCss3Alt className="icons" />
                <p>CSS3</p>
              </li>
              <li className="icons-list">
                <RiTailwindCssFill className="icons" />
                <p>TailwindCSS</p>
              </li>
              <li className="icons-list">
                <IoLogoJavascript className="icons" />
                <p>Javascript</p>
              </li>
              <li className="icons-list">
                <SiTypescript className="icons" />
                <p>Typescript</p>
              </li>
              <li className="icons-list">
                <FaReact className="icons" />
                <p>React.js</p>
              </li>
              <li className="icons-list">
                <IoAccessibilityOutline className="icons" />
                <p>Accessibility</p>
              </li>
              <li className="icons-list">
                <SiMongodb className="icons" />
                <p>MongoDB</p>
              </li>
              <li className="icons-list">
                <FaFigma className="icons" />
                <p>Figma</p>
              </li>
              <li className="icons-list">
                <FaGithub className="icons" />
                <p>Github</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
