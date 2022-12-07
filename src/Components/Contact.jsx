import Header from "./Header";
import { Card, Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiWhatsappFill,
  RiGithubFill,
  RiLinkedinFill,
} from "react-icons/ri";

import "../Styles/Contact.css";

const Contact = () => {
  const social = [
    {
      icon: <RiFacebookFill />,
      link: "https://www.facebook.com/e.mesery/",
    },
    {
      icon: <RiInstagramFill />,
      link: "https://www.instagram.com/mhmd_elmesery/",
    },
    {
      icon: <RiWhatsappFill />,
      link: "http://wa.link/0fabvv",
    },
    {
      icon: <RiGithubFill />,
      link: "https://github.com/melmesery/",
    },
    {
      icon: <RiLinkedinFill />,
      link: "https://www.linkedin.com/in/melmesery/",
    },
  ];
  return (
    <section id="contact" className="contact">
      <Header />
      <Container>
        <Title title={"Contact"} />
        <p className="mb-0 text-warning text-center fw-bold fs-4">
          Contact me for work or just say hi!
        </p>
        <Row
          className="text-white d-flex justify-content-center animate__animated animate__zoomInDown"
          style={{ marginTop: "40px" }}
        >
          <Col md={{ span: 3 }} xs={{ span: 8 }}>
            <Card className="contact-card p-3 mb-3">
              <h3 className="fw-bold">Email</h3>
              <div className="about-underline mb-4 rounded-5" />
              <p className="mb-0 fs-5">melmesery@outlook.com</p>
              <p className="mb-0 fs-5">mohamed_eldesouky@cic-cairo.com</p>
            </Card>
            <Card className="contact-card p-3 mb-3">
              <h3 className="fw-bold">Phone</h3>
              <div className="about-underline mb-4 rounded-5" />
              <p className="mb-0 fs-5">(+20) 127-027-8442</p>
              <p className="mb-0 fs-5">(040) 2130092</p>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center animate__animated animate__zoomInDown">
          <Col md={{ span: 3 }} xs={{ span: 8 }}>
            <div className="d-flex gap-2 justify-content-center">
              {social.map((social) => {
                return (
                  <div className="social-container">
                    <a
                      href={social.link}
                      target={"_blank"}
                      rel={"noreferrer"}
                      className="social-icon text-white"
                    >
                      {social.icon}
                    </a>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
        <p className="mt-4 text-center text-white fs-5 fixed-bottom">
          All Rights Reserved
        </p>
      </Container>
    </section>
  );
};

export default Contact;