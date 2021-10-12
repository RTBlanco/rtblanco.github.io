import './Projects.css';
import Project from './Project';
import github from '../../images/github.png';
// import FakeProjects from '../../projects';
// import { BrowserView, MobileView } from 'react-device-detect';
import { useState, useRef, useEffect } from 'react';



const Projects = () => {
  // could connect this with the github api and add the data 
  // TODO: Look up the Github api 
  // Webscrape? 

  // on mobile turn this into a slide feature, either create you own or use the downloaded libray
  // Try adding a sling shot feature, for ex if you slide to a certain distance it jumps to the next 
  // https://docs.github.com/en/rest/reference/repos
  // if i do use the api i will not have the ability to grab and image (so far)

  // instead of using the api from the github use https://gh-pinned-repos-5l2i19um3.vercel.app/?username= 
  // This is an already sorted api(but make plans to build your own)

  const projects = useRef(null)
  const container = useRef(null)

  const [startx, setStartx] = useState('');
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

  const handleMove = e => {
    let x = e.touches[0].clientX
    projects.current.style.left = `${x - startx}px`

    let outer = container.current.getBoundingClientRect()
    let inner = projects.current.getBoundingClientRect()
    console.log('inner => ', inner.right)
    console.log('outer => ', outer.right)
    if (parseInt(projects.current.style.left) > 0 ) {
      projects.current.style.left = '0px'
    } else if (inner.right < outer.right) {
      console.log(inner.width - outer.width)
      projects.current.style.left = `-${inner.width - outer.width}px`
    }
  }

  const handleStart = e => {
    setStartx(e.touches[0].clientX - projects.current.offsetLeft)
  }

  const renderProjects = () => {
    return repos.map((project, index) => <Project key={index} project={project} /> )
  }

  return (
    <div id="projects-container">
      <h1>PROJECTS</h1>
      <div id="outer" ref={container}  onTouchMove={handleMove} onTouchStart={handleStart}>
        <div ref={projects} id="projects" >
          {renderProjects()}
        </div>
      </div>
      <a id="github-link" href="http://github.com/RTBlanco" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="link to github" />
      </a>
    </div>
  );
};

export default Projects;