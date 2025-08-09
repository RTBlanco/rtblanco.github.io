import './Navbar.css'
import resume from '../../Resume.pdf'

const Navbar = () => {

  return (
    <div className="navbar">
      <h1>Ronny</h1>
      <div className='section-select'> 
        <a href="#about">About Me</a>
        <a href="#projects-container">Projects</a>
        <a href={resume} target="_blank" rel="noreferrer" download>Resume</a>
        <a href="">Contact me</a>
      </div>
    </div>
  )
}

export default Navbar;