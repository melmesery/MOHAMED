import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/portfolio" element={<Portfolio />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
  );
};

export default App;
