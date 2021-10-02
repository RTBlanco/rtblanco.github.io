import './Projects.css';
import Project from './Project';
import github from '../../images/github.png';
import FakeProjects from '../../projects';
import { BrowserView, MobileView } from 'react-device-detect';
import { useState, useRef } from 'react';



const Projects = () => {
  // could connect this with the github api and add the data 
  // TODO: Look up the Github api 
  // Webscrape? 

  // on mobile turn this into a slide feature, either create you own or use the downloaded libray
  // https://docs.github.com/en/rest/reference/repos
  // if i do use the api i will not have the ability to grab and image (so far)
  // Going to implement a framer module to use for swiping through projects
  const projects = useRef(null)
  const container = useRef(null)

  const [startx, setStartx] = useState('');

  const handleMove = e => {
    // console.log(e)
    

    console.log('moving -> ',e.touches[0].clientX)
    let x = e.touches[0].clientX
    projects.current.style.left = `${x - startx}px`

    let outer = container.current.getBoundingClientRect()
    let inner = projects.current.getBoundingClientRect()

    if (parseInt(projects.current.style.left) > 0 ) {
      projects.current.style.left = '0px'
    } else if (inner.right < outer.right) {
      projects.current.style.left = `-${inner.width - outer.width}px`
    }
  }

  const handleStart = e => {
    
    console.log(projects.current.offsetLeft)
    console.log('start -> ', e.touches[0].clientX)

    setStartx(e.touches[0].clientX - projects.current.offsetLeft)

    
  }

  const renderProjects = () => {
    return FakeProjects.map((project, index) => <Project key={index} project={project} /> )
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

  // return (
  //   <div id="projects-container" >
  //     <h1>PROJECTS</h1>
  //     <div id="projects">
  //       <Carousel>
  //         {renderProjects()}
  //       </Carousel>
  //     </div>
  //     <a id="github-link" href="http://github.com/RTBlanco" target="_blank" rel="noopener noreferrer">
  //       <img src={github} alt="link to github" />
  //     </a>
  //   </div>
  // );
};

export default Projects;