import './Title.css';

const Title = () => {

  const handleClick = () => {
    document.getElementById("about").scrollIntoView({behavior: "smooth"})
  }

  return (
    <div id='title'>
      <button onClick={handleClick}>SOFTWARE ENGINEER</button>
    </div>
  )
}

export default Title;