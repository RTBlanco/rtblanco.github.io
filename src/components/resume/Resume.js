import './Resume.css';
import resumeImg from '../../images/resume.png';
import resume from './Resume.pdf'


const Resume = () => {
  return (
    <div id="resume">
      <img src={resumeImg} alt="resume" />
      <div id="resume-content">
        <h1>RESUME</h1>
        <a href={resume} target="_blank" rel="noreferrer" download>DOWNLOAD</a>
      </div>
    </div>
  )
}

export default Resume; 