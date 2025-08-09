import './Project.css';
import githubWhite from '../../images/links/github-mark-white.png';
import githubBlack from '../../images/links/github-mark.png'
import folderWhite from '../../images/folder-white.png'
import folderBlack from '../../images/folder-black.png'

const Project = ({project, isMobile}) => {

  
  return (
    <div tabIndex="0" className="project">
      {/* <div className="project-inner">
        <div className="front">
          <h1>{project.repo}</h1>
        </div>
        
        <div className="back">
          <div className="project-desc">
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer"><img src={githubBlack} alt="link to repo" /></a>
          </div>
        </div>
        
      </div> */}

      <div className="icons">
        <img src={folderWhite} alt="" />
        <a href={project.link}>
          <img src={githubWhite} alt="github" />
        </a>
      </div>
      <div className="description">
        <h2>{project.repo}</h2>
        <br />
        {project.description}
      </div>
      <div className="skills"></div> 
    </div>
  )
}

export default Project;