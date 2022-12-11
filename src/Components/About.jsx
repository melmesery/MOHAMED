import "../Styles/About.css";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import {
  FaGraduationCap,
  FaLandmark,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaUserAlt,
} from "react-icons/fa";

const About = () => {
  const details = [
    {
      open: <FaUserAlt />,
      des: "Mohamed El-Desouky El-Sayed El-Mesery",
    },
    {
      open: <FaRegCalendarAlt />,
      des: "09/11/1994",
    },
    {
      open: <FaMapMarkerAlt />,
      des: "Al-Mahallah Al-Kubra, Egypt 31962",
    },
    {
      open: <FaGraduationCap />,
      des: "Bachelor of Communication Engineering",
    },
    {
      open: <FaLandmark />,
      des: "Canadian International College",
    },
  ];

  return (
    <section id="about" className="about">
      <Container>
        <Title title={"A little bit about me"} />
        <Row className="about-row d-flex justify-content-center">
          <Col
            md={{ span: 6 }}
            className="
          animate__animated animate__fadeInLeftBig"
          >
            <p className="text-warning fw-bold fs-4 mb-0">About Me</p>
            <div className="about-underline mb-4 rounded-5" />
            <p className="about-me mb-1">
              I'm a Front End Engineer based in Egypt. I describe myself as a
              passionate developer who loves coding, open source, and the web
              platform.
            </p>{" "}
            <br />
            <p className="about-me mb-0">
              Aside from my job, I like to create and contribute to open source
              projects. That helps me to learn a ton of new stuff, grow as a
              developer and support other open source projects.
            </p>
          </Col>
          <Col
            md={{ span: 5 }}
            className="
          animate__animated animate__fadeInRightBig"
          >
            <p className="text-warning fw-bold fs-4 mb-0">Personal Info</p>
            <div className="about-underline mb-4 rounded-5" />

            {details.map((detail) => {
              return (
                <div className="info-card d-flex gap-3 align-items-center mb-2">
                  <span>{detail.open}</span>
                  <p className="mb-0">{detail.des}</p>
                </div>
              );
            })}
            <a
              href="https://drive.google.com/file/d/1JB2nKMplgAt1sHrouHGMcrGLaWKIX7g3/view?usp=share_link"
              target={"_blank"}
              rel={"noreferrer"}
              className="cv p-1 fw-bold mb-0 rounded-5"
            >
              Download CV
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
