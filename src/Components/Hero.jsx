import { Col, Container, Row } from "react-bootstrap";
import "../Styles/Hero.css";
import Header from "./Header";
import profile from "../Images/profile.jpg";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <Header />

      <Container>
        <Row
          className="d-flex align-items-center"
          style={{ marginTop: "80px" }}
        >
          <Col md={{ span: 4 }} className='animate__animated animate__backInLeft'>
            <img
              src={profile}
              alt="Mohamed El-Mesery"
              className="profile w-100"
            />
          </Col>
          <Col md={{ span: 8 }} className='animate__animated animate__bounceInDown'>
            <div className="hero-content text-center">
              <h1>
                Frontend Web Developer <br />
                <span className="name">Mohamed El-Mesery</span>
              </h1>
              <h3 className="my-4">
                I <span className="design">Design,</span> <span className="develope">Develope</span> & <span className="test">Test</span>
              </h3>
              <p className="my-4 fs-5">
                High level experience in web design and development knowledege,
                producing quality work.
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <button className="contact-me">
                  <a
                    href="https://emailto:melmesery@outlook.com"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    Contact Me
                  </a>
                </button>
                <button className="resume">
                  <a
                    href="https://drive.google.com/file/d/1JB2nKMplgAt1sHrouHGMcrGLaWKIX7g3/view?usp=share_link"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    Resume
                  </a>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;