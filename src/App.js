import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import SkillAnimated from './components/SkillAnimated/SkillAnimated';
import Certification from './components/Certification'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
 <Certification/>
      <Projects />
       
      <Contact />
   
    </div>
  );
}

export default App;
