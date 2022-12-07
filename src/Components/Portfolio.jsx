import React from "react";
import Header from "./Header";
import Title from "./Title";
import { Card, Col, Container, Row } from "react-bootstrap";

const Portfolio = () => {
  return (
    <section id='portfolio' className="portfolio" >
      <Header />
      <Container>
        <Title title={"Portfolio"} />
        <Row>
        
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;