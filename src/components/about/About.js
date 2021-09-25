import './About.css'
import image from '../../images/photo_of_me.jpg';

const About = () => {
  return (
    <div id="about">
      <div id="about-content">
        <h1>ABOUT</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias magni architecto tempora minima esse. Unde error ipsam dolor magni iusto quibusdam debitis? Sit consectetur suscipit, voluptate alias commodi consequuntur enim perspiciatis eum quisquam dolore deleniti incidunt, veniam, consequatur optio adipisci deserunt harum a? Alias at ipsa recusandae placeat maxime, cupiditate earum delectus, nam reiciendis exercitationem, harum excepturi. Similique molestias consequatur laborum voluptatum eaque exercitationem. Id sequi perferendis illo, autem nulla quaerat doloremque voluptate velit? Obcaecati totam alias corrupti dicta odio consequatur beatae velit eaque vel reprehenderit veniam aut suscipit quam repellendus eius fugiat nihil quis voluptates, modi sit, cum necessitatibus?</p>
      </div>
      {/* This is the reall photo that is going to be used */}
      <img id="photo-me" src={image} alt="ronny" />
    </div>
  )
}; 

export default About;