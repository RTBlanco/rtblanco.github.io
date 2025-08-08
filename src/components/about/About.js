import './About.css'
import image from '../../images/photo_of_me.jpg';
import github from '../../images/links/github.png';

const About = () => {
  return (
    <div id="about">
      <div id="about-content">
        <h1>ABOUT ME</h1>
        <p>
          I’m a full-stack software engineer who’s been building cool, scalable web apps for over 3 years with Ruby on Rails, React.js, and Python. I’m all about clean code, smooth user experiences, and turning ideas into real, working things people actually enjoy using.
          When I’m not deep in code, I’m probably in CAD designing custom car mods, posting random 3D creations online for anyone to download, or messing with whatever side project I’m into that week.
          Away from the screen? You’ll catch me on the basketball court, out fishing, riding my bike, or just hanging out with friends and family. Basically, if it’s hands on, creative, or just plain fun, I’m in. 
        </p>
      </div>
      <div className="links">
        <a href="">X</a>
        <a href="http://github.com/RTBlanco" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="link to github" />
        </a>
        <a href="">Email</a>
        <a href="">linkedin</a>
      </div>
    </div>
  )
}; 

export default About;