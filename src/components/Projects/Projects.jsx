import "./projects.css";
import { useState } from "react";
import weatherApp from "../../assets/weather.png";
import calculatorApp from "../../assets/calculator.png";
import todoApp from "../../assets/todo.png";
import dictionaryApp from "../../assets/dictionary.png";
import pokedexApp from "../../assets/pokedex.png"
import memoryWithCats from '../../assets/memoryWithCats.png'

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const projects = [
    {
      image: pokedexApp,
      description: "Pokedex, A library for information on the popular 90s game Pokemon",
      tags: ["React.js", "API", "HTML5", "CSS", "Typescript"],
      link: "https://90s-pokedex.netlify.app/",
    },{
      image: memoryWithCats,
      description: "A memory game with cute cats",
      tags: ["Styled components", "Typescript"],
      link: "https://memorywithcats.netlify.app/",
    },
    {
      image: weatherApp,
      description: "Weather App: An app that uses OpenWeatherAPI.",
      tags: ["React.js", "API", "HTML5", "CSS", "Javascript"],
      link: "https://weather-checkcheck.netlify.app/",
    },
    {
      image: calculatorApp,
      description: "Calculator App: Use it on the go",
      tags: ["HTML5", "Typescript", "React.js"],
      link: "https://calculator-copy.netlify.app/"
    },
    {
      image: todoApp,
      description: "To Do App: Makes your everyday easier.",
      tags: ["HTML5", "Typescript", "React.js"],
      link: 'https://what-you-need-to-do-app.netlify.app/'
    },
    {
      image: dictionaryApp,
      description: "Dictionary App: Hard word? No problem.",
      tags: ["React.js", "Typescript", "API", "SCSS"],
      link: 'https://dictionary-lexiword.netlify.app/'
    },
  ];

  return (
    <div className="projects-wrapper">
      <div className="projects-list">
        <div className="projects-headline">
          <h3>Hover over a project to learn more.</h3>
        </div>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-col project-col-${index + 1}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={project.image}
              alt="Project image"
              className="project-img"
            />
            {hovered === index && (
              <div className="projects-overlay">
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="watch-live-button">Watch live</button>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
