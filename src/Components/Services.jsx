import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import "../Styles/Services.css";

const Services = () => {
  const services = [
    {
      num: "1",
      des: "Optimizing the user experience.",
    },
    {
      num: "2",
      des: "Using HTML, JavaScript and CSS to bring concepts to life.",
    },
    {
      num: "3",
      des: "Responsive designs on mobile websites.",
    },
    {
      num: "4",
      des: "Creating tools that improve site interaction regardless of the browser.",
    },
    {
      num: "5",
      des: "Following SEO best practices.",
    },
    {
      num: "6",
      des: "Fixing bugs and testing for usability.",
    },
  ];

  return (
    <section id="services" className="services">
      <Container>
        <Title title={"My Services"} />
        <Row className="services-row d-flex justify-content-center">
          {services.map((service) => {
            return (
              <Col md={{ span: 5 }}>
                <div className="services-card gap-2 mb-2 p-1">
                  <div className="number w-25 fw-bold">{service.num}</div>
                  <div className="words w-75">{service.des}</div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
