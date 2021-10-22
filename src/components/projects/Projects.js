import './Projects.css';
import Project from './Project';
import github from '../../images/github.png';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';



const Projects = () => {
  
  const isMobile = useMediaQuery({query: '(max-width: 600px'})
  
  const [repos, setRepos] = useState([])

  useEffect( ()=> {
    fetchProjects();
  }, []);


  const fetchProjects = () => {
    // convert to async await in the future 
    return fetch('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=rtblanco')
      .then(resp => resp.json())
      .then(data => setRepos(data))
      .catch(error => console.log(error))
  }

  
  const renderProjects = () => {
    return repos.map((project, index) => <Project key={index} project={project} isMobile={isMobile}/> )
  }

  return (
    <div id="projects-container">
      <h1>PROJECTS</h1>
      <div id="outer" >
        <div id="projects" >
          {renderProjects()}
        </div>
      </div>
      <a id="github-link" href="http://github.com/RTBlanco" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="link to github" />
      </a>
    </div>
  )
};

export default Projects;