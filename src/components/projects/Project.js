import './Project.css';
// import github from '../../images/github.png';

const Project = ({project, isMobile}) => {

  
  return (
    <div tabIndex="0" className="project">
      <div className="project-inner">
        <div className="front">
          <h1>{project.repo}</h1>
        </div>
        
        <div className="back">
          <div className="project-desc">
            <p>{project.description}</p>
            {/* <a href={project.link} target="_blank" rel="noreferrer"><img src={github} alt="link to repo" /></a> */}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Project;