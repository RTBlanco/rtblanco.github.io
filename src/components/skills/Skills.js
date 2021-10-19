import './Skills.css';
import Skill from './Skill';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


// Imports all the images
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../images/skills', false, /\.(png|jpe?g|svg)$/));

const Skills = () => {
  const renderSkill = () => {
    return Object.entries(images).map(([keys, value], index) => <Skill image={images[keys].default} key={index}   />)
  }
  

  return (
    <div id="skills-container">
      <h1>SKILLS</h1>
      <Carousel autoPlay infiniteLoop={true} showThumbs={false}>
        {renderSkill()}
      </Carousel>
    </div>
  );
};

export default Skills;