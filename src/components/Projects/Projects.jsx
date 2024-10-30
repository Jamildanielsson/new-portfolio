import "./projects.css";
import { useState } from 'react';
import weatherApp from '../../assets/weather.png';
import calculatorApp from '../../assets/calculator.png';
import todoApp from '../../assets/todo.png';
import dictionaryApp from '../../assets/dictionary.png';

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
    console.log('hovrar över');
    
  };

  const handleMouseLeave = () => {
    setHovered(null);
    console.log('slutar hovra')
  };

  const projects = [
    { image: weatherApp, description: 'Weather App: A cool tool to check the weather.' },
    { image: calculatorApp, description: 'Calculator App: Use it on the go to calculate hard equations' },
    { image: todoApp, description: 'To Do App: Makes your everyday easier.' },
    { image: dictionaryApp, description: 'Dictionary App: Hard word? No problem.' },
  ];

  return (
    <div className="projects-wrapper">
      <div className="projects-list">
        <div className="projects-headline"><h3>Hover over a project to learn more.</h3></div>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-col project-col-${index + 1}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={project.image} alt="Project image" className="project-img"/>
            {hovered === index && (
              <div className="projects-overlay">
                {project.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
