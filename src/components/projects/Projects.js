import './Projects.css';
import Project from './Project';
import github from '../../images/github.png';
import FakeProjects from '../../projects';
import { BrowserView, MobileView } from 'react-device-detect';


const Projects = () => {
  // could connect this with the github api and add the data 
  // TODO: Look up the Github api 
  // Webscrape? 

  // on mobile turn this into a slide feature, either create you own or use the downloaded libray
  // https://docs.github.com/en/rest/reference/repos
  // if i do use the api i will not have the ability to grab and image (so far)
  // Going to implement a framer module to use for swiping through projects
  

  const renderProjects = () => {
    return FakeProjects.map((project, index) => <Project key={index} project={project} /> )
  }

  return (
    <div id="projects-container">
      <h1>PROJECTS</h1>
      <div id="projects">
        {renderProjects()}
      </div>
      <a id="github-link" href="http://github.com/RTBlanco" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="link to github" />
      </a>
    </div>
  );
};

export default Projects;