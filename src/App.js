import './App.css';
import Title from './components/title/Title';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';

function App() {
  return (
    <>
      <Title />
      <About />
      <Resume />
      {/* Need to better fit project for mobile */}
      <Projects />
      {/* <Skills /> */}
      <Contact />
    </>
  );
};

export default App;
