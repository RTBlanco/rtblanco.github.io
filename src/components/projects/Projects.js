import './Projects.css';
import Project from './Project';
import github from '../../images/github.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Projects = () => {
  // could connect this with the github api and add the data 
  // TODO: Look up the Github api 
  // Webscrape? 

  // on mobile turn this into a slide feature, either create you own or use the downloaded libray
  // https://docs.github.com/en/rest/reference/repos
  // if i do use the api i will not have the ability to grab and image (so far)
  // Going to implement a framer module to use for swiping through projects
  const projects = [
    {desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla labore et molestiae laborum repudiandae, suscipit doloribus sequi recusandae laboriosam adipisci alias vitae rerum quidem sit. Molestias, odio! Accusamus quo est vero repellat autem sed cum voluptates amet, maxime inventore nam magnam atque commodi dolor voluptatum fugit necessitatibus? Quibusdam, iste delectus."},
    {desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla labore et molestiae laborum repudiandae, suscipit doloribus sequi recusandae laboriosam adipisci alias vitae rerum quidem sit. Molestias, odio! Accusamus quo est vero repellat autem sed cum voluptates amet, maxime inventore nam magnam atque commodi dolor voluptatum fugit necessitatibus? Quibusdam, iste delectus."},
    {desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla labore et molestiae laborum repudiandae, suscipit doloribus sequi recusandae laboriosam adipisci alias vitae rerum quidem sit. Molestias, odio! Accusamus quo est vero repellat autem sed cum voluptates amet, maxime inventore nam magnam atque commodi dolor voluptatum fugit necessitatibus? Quibusdam, iste delectus."},
    {desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla labore et molestiae laborum repudiandae, suscipit doloribus sequi recusandae laboriosam adipisci alias vitae rerum quidem sit. Molestias, odio! Accusamus quo est vero repellat autem sed cum voluptates amet, maxime inventore nam magnam atque commodi dolor voluptatum fugit necessitatibus? Quibusdam, iste delectus."},
    {desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla labore et molestiae laborum repudiandae, suscipit doloribus sequi recusandae laboriosam adipisci alias vitae rerum quidem sit. Molestias, odio! Accusamus quo est vero repellat autem sed cum voluptates amet, maxime inventore nam magnam atque commodi dolor voluptatum fugit necessitatibus? Quibusdam, iste delectus."},
    {desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla labore et molestiae laborum repudiandae, suscipit doloribus sequi recusandae laboriosam adipisci alias vitae rerum quidem sit. Molestias, odio! Accusamus quo est vero repellat autem sed cum voluptates amet, maxime inventore nam magnam atque commodi dolor voluptatum fugit necessitatibus? Quibusdam, iste delectus."},
  ]

  const renderProjects = () => {
    return projects.map((project, index) => <Project key={index} project={project} /> )
  }

  return (
    <div id="projects-container">
      <h1>PROJECTS</h1>
      <div id="projects">
        <Carousel>
          {renderProjects()}
        </Carousel>
      </div>
      <a id="github-link" href="http://github.com/RTBlanco" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="link to github" />
      </a>
    </div>
  );
};

export default Projects;