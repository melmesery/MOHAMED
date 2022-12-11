import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Skills from "./Components/Skills";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="#hero" element={<Hero />} />
        <Route path="#about" element={<About />} />
        <Route path="#skills" element={<Skills />} />
        <Route path="#portfolio" element={<Portfolio />} />
        <Route path="#services" element={<Services />} />
        <Route path="#contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
