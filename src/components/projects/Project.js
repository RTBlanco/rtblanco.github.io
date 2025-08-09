import './Project.css';
import githubWhite from '../../images/links/github-mark-white.png';
import githubBlack from '../../images/links/github-mark.png'
import folderWhite from '../../images/folder-white.png'
import folderBlack from '../../images/folder-black.png'

const Project = ({project, isMobile}) => {

  
  return (

    <div tabIndex="0" className="project">
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