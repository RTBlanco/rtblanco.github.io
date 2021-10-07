import './About.css'
import image from '../../images/photo_of_me.jpg';

const About = () => {
  return (
    <div id="about">
      <div id="about-content">
        <h1>ABOUT ME</h1>
        <p>I am a Full Stack Web Developer, with a passion for learning new and exciting programs and be able to utilize them in my day-to-day coding.
I have experience building applications with Ruby on Rails, Python Flask, and JavaScript Express, as well as React and Redux. I am comfortable working in a Full Stack environment and can easily transition from coding in the back end to the front end with ease. Unlike the traditional route, that most Software Engineers undergo I first taught myself to program in python and later decided to join a Bootcamp to learn things that I might've missed when teaching myself to code. When not trying to create the next best thing, I’m usually working on cars, playing basketball, or improving on my photography!</p>
      </div>
      {/* This is the reall photo that is going to be used */}
      <img id="photo-me" src={image} alt="ronny" />
    </div>
  )
}; 

export default About;