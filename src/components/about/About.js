import './About.css'
import image from '../../images/photo_of_me.jpg';
import twiiterBlack from '../../images/links/logo-black.png';
import twiiterWhite from '../../images/links/logo-white.png';
import linkedInWhite from '../../images/links/InBug-White.png';
import linkedInBlack from '../../images/links/InBug-Black.png';
import githubBlack from '../../images/links/github-mark.png';
import githubWhite from '../../images/links/github-mark-white.png'
import emailBlack from '../../images/links/email-black.png';
import emailWhite from '../../images/links/email-white.png';

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
        <a href="https://x.com/R_T_Blanco" target='_bank'>
          <img src={twiiterWhite} alt="Link to twitter" />
        </a>
        <a href="http://github.com/RTBlanco" target="_blank">
          <img src={githubWhite} alt="link to github" />
        </a>
        <a href="mailto:ronnytoribio1@hotmail.com">
          <img src={emailWhite} alt="Email ya boy!" />
        </a>
        <a href="https://www.linkedin.com/in/ronnytoribio/" target='_blank'>
          <img src={linkedInWhite} alt="link to linkedIn"/>
        </a>
      </div>
    </div>
  )
}; 

export default About;