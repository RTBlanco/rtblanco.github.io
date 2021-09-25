import './Resume.css';
import resume from '../../ images/resume.png';


const Resume = () => {
  return (
    <div id="resume">
      <img src={resume} alt="resume" />
      <div id="resume-content">
        <h1>RESUME</h1>
        <button>Download</button>
      </div>
    </div>
  )
}

export default Resume; 