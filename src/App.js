import './App.css';
import Navbar from './components/navbar/Navbar';
import Title from './components/title/Title';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Maintenance from './Maintenance';

function App() {
  return (
    <>
      {/* <Maintenance /> */}
      {/* remove Maintence banner once its ready for full deployment */}
      <Navbar />
      <Title />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
