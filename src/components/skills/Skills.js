import './Skills.css';
import Skill from './Skill';



function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../images/skills', false, /\.(png|jpe?g|svg)$/));

const Skills = () => {
  console.log(images)
  const renderSkill = () => {
    return Object.entries(images).map(([keys, value], index) => <Skill image={images[keys].default} key={index}   />)
  }
  

  return (
    <div id="skills-container">
      {/* <h1>SKILLS</h1> */}
      {/* {renderSkill()} */}
    </div>
  );
};

export default Skills;