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
      <Container>
        <Title title={"Keep in touch"} />
        <Row className=" contact-row text-white d-flex justify-content-center">
          <Col md={{ span: 6 }} xs={{ span: 10 }}>
            <div className="contact-cards gap-3">
              <Card className="contact-card p-3">
                <h3 className="fw-bold">Email</h3>
                <div className="about-underline mb-4 rounded-5" />
                <p className="mb-0">melmesery@outlook.com</p>
                <p className="mb-0">mohamed_eldesouky@cic-cairo.com</p>
              </Card>
              <Card className="contact-card p-3">
                <h3 className="fw-bold">Phone</h3>
                <div className="about-underline mb-4 rounded-5" />
                <p className="mb-0">(+20) 127-027-8442</p>
                <p className="mb-0">(040) 2130092</p>
              </Card>
            </div>

            <div className="d-flex gap-1 justify-content-center mt-5">
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
      </Container>
    </section>
  );
};

export default Contact;
