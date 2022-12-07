import "../Styles/About.css";
import Header from "./Header";
import { Card, Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import {
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiRedux,
  SiGithub,
  SiGit,
} from "react-icons/si";

const About = () => {
  const details = [
    {
      open: "Full-Name:",
      des: "Mohamed El-Desouky El-Sayed El-Mesery",
    },
    {
      open: "Birth Date:",
      des: "09/11/1994",
    },
    {
      open: "Address:",
      des: "Al-Mahallah Al-Kubra, Egypt 31962",
    },
    {
      open: "Education:",
      des: "Bacholer of Communication & Electronics Engineering",
    },
    {
      open: "University:",
      des: "Canadian International College",
    },
    {
      open: "Job Title:",
      des: "Frontend Web Developer",
    },
    {
      open: "Freelance:",
      des: "Available",
    },
  ];

  const skills = [
    {
      icon: <SiHtml5 />,
      name: "HTML",
      per: "85%",
    },
    {
      icon: <SiCss3 />,
      name: "CSS",
      per: "80%",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
      per: "70%",
    },
    {
      icon: <SiBootstrap />,
      name: "Bootstrap",
      per: "80%",
    },
    {
      icon: <SiReact />,
      name: "React",
      per: "60%",
    },
    {
      icon: <SiRedux />,
      name: "Redux Toolkit",
      per: "70%",
    },
    {
      icon: <SiGithub />,
      name: "GitHub",
      per: "70%",
    },
    {
      icon: <SiGit />,
      name: "Git",
      per: "50%",
    },
  ];

  return (
    <section id="about" className="about">
      <Header />

      <Container>
        <Title title={"Info"} />
        <Row className="" style={{ marginTop: "60px" }}>
          <Col
            md={{ span: 6 }}
            className="
          animate__animated animate__fadeInLeftBig"
          >
            <p className="text-warning fw-bold fs-4 mb-0">Personal Info</p>
            <div className="about-underline mb-4 rounded-5" />

            {details.map((detail) => {
              return (
                <div className="info-card d-flex gap-2 align-items-baseline mb-2">
                  <span>{detail.open}</span>
                  <p className="mb-0">{detail.des}</p>
                </div>
              );
            })}
            <a
              href="https://drive.google.com/file/d/1JB2nKMplgAt1sHrouHGMcrGLaWKIX7g3/view?usp=share_link"
              target={"_blank"}
              rel={"noreferrer"}
              className="cv p-1 fw-bold fs-5 mb-0"
            >
              Download CV
            </a>
          </Col>

          <Col
            md={{ span: 6 }}
            className="
          animate__animated animate__zoomInRight"
          >
            <p className="text-warning fw-bold fs-4 mb-0">Technologies</p>
            <div className="about-underline mb-4 rounded-5" />

            <Row className="text-center">
              {skills.map((skill) => {
                return (
                  <Col md={{ span: 3 }}>
                    <Card className="skill-card mb-3 p-1">
                      <p className="icon">{skill.icon}</p>
                      <p className="name fw-bold mb-0 fs-4">{skill.name}</p>
                      <p className="percent mb-0 mt-2 fw-bold text-warning">
                        {skill.per}
                      </p>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;