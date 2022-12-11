import "../Styles/Header.css";
import { TfiAlignRight, TfiClose } from "react-icons/tfi";
import { Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const showMenu = () => {
    document.querySelector(".mobile-nav-container").classList.add("show");
  };
  const closeMenu = () => {
    document.querySelector(".mobile-nav-container").classList.remove("show");
  };
  const showBlur = () => {
    document.querySelector(".blur").classList.add("show");
  };
  const closeBlur = () => {
    document.querySelector(".blur").classList.remove("show");
  };

  return (
    <header className="header fixed-top">
      <Container>
        <div className="d-flex align-items-center justify-content-between py-2">
          <HashLink smooth to="#hero" className="title mb-0 fs-4">
            Mohamed El-Mesery{" "}
          </HashLink>
          <div className="main-nav gap-3">
            <HashLink smooth to="#hero">
              Home{" "}
            </HashLink>
            <HashLink smooth to="#about">
              About
            </HashLink>
            <HashLink smooth to="#skills">
              Experties
            </HashLink>
            <HashLink smooth to="#portfolio">
              Portfolio
            </HashLink>
            <HashLink smooth to="#services">
              Services
            </HashLink>
            <HashLink smooth to="#contact">
              Contact
            </HashLink>
          </div>
          <div
            className="mobile-nav-container  animate__animated animate__heartBeat"
            onClick={() => {
              closeMenu();
              closeBlur();
            }}
          >
            <Container>
              <span
                className="close-menu fw-bold"
                onClick={() => {
                  closeMenu();
                  closeBlur();
                }}
              >
                <TfiClose />
              </span>
              <div className="mobile-nav gap-4 text-center">
                <HashLink smooth to="#hero">
                  Home
                </HashLink>
                <HashLink smooth to="#about">
                  About
                </HashLink>
                <HashLink smooth to="#skills">
                  Experties
                </HashLink>
                <HashLink smooth to="#portfolio">
                  Portfolio
                </HashLink>
                <HashLink smooth to="#services">
                  Services
                </HashLink>
                <HashLink smooth to="#contact">
                  Contact
                </HashLink>
              </div>
            </Container>
          </div>
          <span
            className="mobile-btn fw-bold"
            onClick={() => {
              showMenu();
              showBlur();
            }}
          >
            <TfiAlignRight />
          </span>
        </div>
        <div className="blur"></div>
      </Container>
    </header>
  );
};

export default Header;
