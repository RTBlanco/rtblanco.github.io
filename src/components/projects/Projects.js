import './Projects.css';
import Project from './Project';
// import github from '../../images/github.png';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';



const Projects = () => {
  
  const isMobile = useMediaQuery({query: '(max-width: 600px'})
  
  const [repos, setRepos] = useState([])

  useEffect( ()=> {
    fetchProjects();
  }, []);


  const fetchProjects = () => {
    // convert to async await in the future 
    return fetch('https://gh-pinned-repos-tsj7ta5xfhep.deno.dev/?username=RTBlanco')
      .then(resp => resp.json())
      .then(data => setRepos(data))
      .catch(error => console.log(error))
  }

  
  // const renderProjects = () => {
  //   return repos.map((project, index) => <Project key={index} project={project} isMobile={isMobile}/> )
  // }

  return (
    <div id="projects-container">
      <h1>PROJECTS</h1>
      {/* <div id="outer" >
        <div id="projects" >
          {renderProjects()}
        </div>
      </div> */}
    </div>
  )
};

export default Projects;