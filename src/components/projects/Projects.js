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
  const [test, setTest] = useState(-371)
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
    
    if (parseInt(projects.current.style.left) > 0 ) {
      projects.current.style.left = '0px'
    } else if (inner.right < outer.right) {
      
      projects.current.style.left = `-${inner.width - outer.width}px`
    }
  }

  const handleStart = e => {
    setStartx(e.touches[0].clientX - projects.current.offsetLeft)
  }

  const handleEnd = e => {
    // if touch end at -100px transition to -365px and so on
    // projects.current.style.left = startx
    let touchEnd = e.changedTouches[0].clientX
    let outer = container.current.getBoundingClientRect()
    let inner = projects.current.getBoundingClientRect()


    // console.log("start =>",startx)
    // console.log("end =>", touchEnd)

    
    if (startx > touchEnd) {
      swipeLeft()
    } else if (startx < touchEnd) {
      swipeRight()
    }


    // if ((inner.right  < (outer.right + 371))) {
    //   // setTest(`-${inner.width - outer.width}`)
    // } else if (startx > touchEnd) {
    //   swipeLeft()
    // } else if (startx < touchEnd) {
    //   swipeRight()
    // }


    console.log("test ->",test)
    // console.log('inner => ', inner)
    // console.log('outer => ', outer)
    // console.log("added 371 =>", outer.right + 371)
  }

  const swipeLeft = () => {
    let outer = container.current.getBoundingClientRect()
    let inner = projects.current.getBoundingClientRect()

    console.log('swipe left')
    if ((inner.right  < (outer.right + 371))) {
      return false
    } else {
      setTest(prev => prev + -371)
      projects.current.style.transform = `translateX(${test}px)`
      projects.current.style.transition = `transform .5s ease-in-out`
    }
  }

  const swipeRight = () => {
    let outer = container.current.getBoundingClientRect()
    let inner = projects.current.getBoundingClientRect()


    setTest(prev => prev  - -371)
    projects.current.style.transform = `translateX(${test}px)`
    projects.current.style.transition = `transform .5s ease-in-out`
    console.log('swipe right')
  }

  const renderProjects = () => {
    return repos.map((project, index) => <Project key={index} project={project} /> )
  }

  return (
    <div id="projects-container">
      <h1>PROJECTS</h1>
      {/*  onTouchMove={handleMove} onTouchStart={handleStart} */}
      <div id="outer" ref={container}  onTouchStart={handleStart} onTouchEnd={handleEnd}>
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