import './Projects.css';
import Project from './Project';
import github from '../../images/github.png';
// import FakeProjects from '../../projects';
import { BrowserView, MobileView, isMobile  } from 'react-device-detect';
import { useState, useRef, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';



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

  const [test, setTest] = useState(0)
  const [startx, setStartx] = useState(0);
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
    // projects.current.style.left = `${x - startx}px`

    let outer = container.current.getBoundingClientRect()
    let inner = projects.current.getBoundingClientRect()
    
    
    // console.log('inner => ', inner)
    // console.log('outer => ', outer)

    if (parseInt(projects.current.style.left) > 0 ) {
      projects.current.style.left = '0px'
    } else if (  ((test/ window.innerWidth) + -1) == `-${repos.length }`  ) {
      //   console.log("at the end")
      projects.current.style.transform = `translateX(${test - parseInt(projects.current.style.left)}px)`
      projects.current.style.transition = `transform .1s ease-in-out`
    }
    // console.log(projects.current.style.left)
    console.log(inner.width - outer.width)
  }

  const handleStart = e => {
    setStartx(e.touches[0].clientX - projects.current.offsetLeft)
  }

  const handleEnd = e => {
    // if touch end at -100px transition to -365px and so on
    projects.current.style.left = '0px'
    
    let touchEnd = e.changedTouches[0].clientX
    let outer = container.current.getBoundingClientRect()
    let inner = projects.current.getBoundingClientRect()


    // console.log("start =>",startx)
    // console.log("end =>", touchEnd)

    

    if (startx > touchEnd) {
      swipeLeft()
    } 
    
    if (startx < touchEnd) {
      swipeRight()
    }


    // if ((inner.right  < (outer.right + 371))) {
    //   // setTest(`-${inner.width - outer.width}`)
    // } else if (startx > touchEnd) {
    //   swipeLeft()
    // } else if (startx < touchEnd) {
    //   swipeRight()
    // }


    // console.log("test ->",test)
    // console.log('inner => ', inner)
    // console.log('outer => ', outer)
    // console.log("added 371 =>", outer.right + 371)
  }

  const swipeLeft = () => {
    let outer = container.current.getBoundingClientRect()
    let inner = projects.current.getBoundingClientRect()

    if ( ((test/ window.innerWidth) + -1) != `-${repos.length}`) { 
      setTest(prev => {
        // since setting state is async 
        // i need to change state first then animate
        let newState = prev + -window.innerWidth 
        projects.current.style.transform = `translateX(${newState - parseInt(projects.current.style.left)}px)`
        projects.current.style.transition = `transform .5s ease-in-out`
        return newState
      })
    }
  }

  const swipeRight = () => {
    let outer = container.current.getBoundingClientRect()
    let inner = projects.current.getBoundingClientRect()

    if ( test !== 0 ) {
      setTest(prev => {
        let newState = prev - -window.innerWidth
        projects.current.style.transform = `translateX(${newState - parseInt(projects.current.style.left)}px)`
        projects.current.style.transition = `transform .5s ease-in-out`
        return newState
      })
    }
  }

  const renderProjects = () => {
    return repos.map((project, index) => <Project key={index} project={project} /> )
  }


  // if (window.innerWidth <= 600 || isMobile) {
  //   console.log(window.innerWidth)
  // return (
  //   <div id="projects-container">
  //     <h1>PROJECTS</h1>
  //     {/*  onTouchMove={handleMove} onTouchStart={handleStart} */}
  //     <div id="outer" ref={container}>
  //       {/* <div ref={projects} id="projects" > */}
  //         <SwipeableViews id="swipeable">
  //           {renderProjects()}
  //         </SwipeableViews>
  //       {/* </div> */}
  //     </div>
  //     <a id="github-link" href="http://github.com/RTBlanco" target="_blank" rel="noopener noreferrer">
  //       <img src={github} alt="link to github" />
  //     </a>
  //   </div>
  // )
  // } else {
  // } 

  return (
    <div id="projects-container">
      <h1>PROJECTS</h1>
      {/*  onTouchMove={handleMove} onTouchStart={handleStart} */}
      <div id="outer" ref={container} onTouchMove={handleMove}  onTouchStart={handleStart} onTouchEnd={handleEnd}>
        <div ref={projects} id="projects" >
          {renderProjects()}
          {console.log(window.innerWidth)}
        </div>
      </div>
      <a id="github-link" href="http://github.com/RTBlanco" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="link to github" />
      </a>
    </div>
      
  )
  
  
};

export default Projects;