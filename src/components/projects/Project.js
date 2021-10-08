import './Project.css';

const Project = ({project}) => {
  return (
    // Make this flip to show the detail and make it linked to the github repo
    <div tabIndex="0" className="project">
      <div className="project-inner">
        <div className="front">
          <h1>{project.repo}</h1>
        </div>
        
        <div className="back">
          <div className="project-desc">
            {project.description}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Project;