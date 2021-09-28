import './Skill.css';

const Skill = ({image}) => {
  return (
    <div className="skill">
      <img src={image} alt="skill" />
    </div>
  );
};

export default Skill;