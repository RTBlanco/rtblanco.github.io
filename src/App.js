import './App.css';
import Title from './components/title/Title';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';
import Maintenance from './Maintenance';

function App() {
  return (
    <>
      <Maintenance />
      {/* remove Maintence banner once its ready for full deployment */}
      <Title />
      <About />
      <Resume />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default App;
