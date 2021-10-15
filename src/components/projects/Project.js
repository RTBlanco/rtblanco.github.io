import './Project.css';
import github from '../../images/github.png';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';

const Project = ({project}) => {


  // return (
  //   <div className="outerproject">
  //     <div tabIndex="0" className="project">
  //       <div className="project-inner">
  //         <div className="front">
  //           <h1>{project.repo}</h1>
  //         </div>
          
  //         <div className="back">
  //           <div className="project-desc">
  //             <p>{project.description}</p>
  //             <a href={project.link} target="_blank" rel="noreferrer"><img src={github} alt="link to repo" /></a>
  //           </div>
  //         </div>
          
  //       </div>
  //     </div> 
  //   </div>
  // )
  if (window.innerWidth <= 600) {
  return (
    <div className="outerproject">
      <div tabIndex="0" className="project">
        <div className="project-inner">
          <div className="front">
            <h1>{project.repo}</h1>
          </div>
          
          <div className="back">
            <div className="project-desc">
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer"><img src={github} alt="link to repo" /></a>
            </div>
          </div>
          
        </div>
      </div> 
    </div>
  )
  } else {
    return (
      // Make this flip to show the detail and make it linked to the github repo
      <div tabIndex="0" className="project">
        <div className="project-inner">
          <div className="front">
            <h1>{project.repo}</h1>
          </div>
          
          <div className="back">
            <div className="project-desc">
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer"><img src={github} alt="link to repo" /></a>
            </div>
          </div>
          
        </div>
      </div>   
    )
  }
}

export default Project;