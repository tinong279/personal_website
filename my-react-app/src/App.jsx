import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Career from "./components/Career";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Skills />
      <Career />
      <ProjectList />
      <Footer />
    </div>
  );
}

export default App;
