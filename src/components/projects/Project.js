import './Project.css';

const Project = ({project}) => {
  return (
    <div className="project">
      <img src="" alt="" />
      <div className="project-desc">
        {project.desc}
      </div>
    </div>
  )
}

export default Project;