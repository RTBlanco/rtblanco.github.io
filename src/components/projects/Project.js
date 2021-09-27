import './Project.css';

const Project = ({project}) => {
  return (
    // Make this flip to show the detail and make it linked to the github repo
    <div className="project">
      <div className="project-inner">
        <div className="front">
          <img className="project-image" src="" alt="" />
        </div>
        
        <div className="back">
          <div className="project-desc">
            {project.desc}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Project;