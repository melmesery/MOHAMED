import "../Styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="d-flex align-items-center justify-content-around py-2">
        <p className="title mb-0 fs-4">
          Mohamed El-Mesery{" "}
        </p>
        <div className="d-flex gap-3">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;