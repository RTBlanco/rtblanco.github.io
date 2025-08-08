import './Title.css';
import image from '../../images/photo_of_me.jpg';
import resume from './Resume.pdf'

const Title = () => {

  // const handleClick = () => {
  //   document.getElementById("about").scrollIntoView({behavior: "smooth"})
  // }

  return (
    <div id='title'>
      {/* <button onClick={handleClick}>RONNY TORIBIO BLANCO</button> */}
      <div className="title-area">
        <div className="name">
          <h1>
            Hi, I am<br />
            Ronny Toribio Blanco
          </h1>
          <p>Software Engineer</p>
          <div className="buttons">
            <a href={resume} id="resume-download" target="_blank" rel="noreferrer" download>Download Resume</a>
            <a href="#about">Learn More</a>
          </div>
        </div>
        <div className="picture">
          <img id="photo-me" src={image} alt="ronny" />
        </div>
      </div>
    </div>
  )
}

export default Title;