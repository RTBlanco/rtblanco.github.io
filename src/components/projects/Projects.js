import './Projects.css';
import Project from './Project';
// import github from '../../images/github.png';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
// import "./styles.css";



const Projects = () => {
  
  const isMobile = useMediaQuery({query: '(max-width: 600px'})
  
  const [repos, setRepos] = useState([])

  useEffect( ()=> {
    fetchProjects();
  }, []);


  const fetchProjects = async () => {
    try {
      const resp = await fetch('https://gh-pinned-repos-tsj7ta5xfhep.deno.dev/?username=RTBlanco');
      const data = await resp.json();
      setRepos(data);
    } catch (error) {
      console.log(error);
    }
  }

  
  const renderProjects = () => {
    return repos.map((project, index) => {
      if (isMobile) {
        return (
          <SwiperSlide key={index}>
            <Project project={project} isMobile={isMobile}/>
          </SwiperSlide>
        );
      } else {
        return (
          <Project key={index} project={project} isMobile={isMobile}/>
        );
      }
    });
  }

  return (
    <div id="projects-container">
      <h1>PROJECTS</h1>
      <div id="projects">
        {isMobile ? (
          <Swiper>
            {renderProjects()}
          </Swiper>
        ) : (
          renderProjects()
        )}
      </div>
    </div>
  )
};

export default Projects;