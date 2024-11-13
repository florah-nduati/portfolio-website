import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Technologies from "./components/technoogies";
import Projects from "./components/projects";
import Certifications from "./components/certifications";
import Contact from "./components/contacts";

function App() {
  return (
    <>
      <Header/>
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
}

export default App;
