import React from "react";
import Title from "./Title";
import { Card, Col, Container, Row } from "react-bootstrap";
// import a from "../Images/1.jpg";
// import b from "../Images/2.jpg";
// import c from "../Images/3.jpg";
// import d from "../Images/4.jpg";
// import e from "../Images/5.jpg";
// import f from "../Images/6.jpg";
// import g from "../Images/7.jpg";
// import h from "../Images/8.jpg";
import "../Styles/Portfolio.css";

const Portfolio = () => {
  const showDetails = () => {
    document.querySelector(".project-details").classList.add("show");
  };
  const projects = [
    {
      name: "project 1",
      // img: a,
      img: "fgafdgfdhgshsgjhjhjdhkjdkjhkhjlfkhlkfhlkljkljljg.jklljhkjkhgjdfjgbzbzvcnhmhgjkdkuykjdghdfagfgahga",
    },
    {
      name: "project 2",
      // img: b,
      img: "fgafdgfdhgshsgjhjhjdhkjdkjhkhjlfkhlkfhlkljkljljg.jklljhkjkhgjdfjgbzbzvcnhmhgjkdkuykjdghdfagfgahga",
    },
    {
      name: "project 3",
      // img: c,
      img: "fgafdgfdhgshsgjhjhjdhkjdkjhkhjlfkhlkfhlkljkljljg.jklljhkjkhgjdfjgbzbzvcnhmhgjkdkuykjdghdfagfgahga",
    },
    {
      name: "project 4",
      // img: d,
      img: "fgafdgfdhgshsgjhjhjdhkjdkjhkhjlfkhlkfhlkljkljljg.jklljhkjkhgjdfjgbzbzvcnhmhgjkdkuykjdghdfagfgahga",
    },
    {
      name: "project 5",
      // img: e,
      img: "fgafdgfdhgshsgjhjhjdhkjdkjhkhjlfkhlkfhlkljkljljg.jklljhkjkhgjdfjgbzbzvcnhmhgjkdkuykjdghdfagfgahga",
    },
    {
      name: "project 6",
      // img: f,
      img: "fgafdgfdhgshsgjhjhjdhkjdkjhkhjlfkhlkfhlkljkljljg.jklljhkjkhgjdfjgbzbzvcnhmhgjkdkuykjdghdfagfgahga",
    },
    {
      name: "project 7",
      // img: g,
      img: "fgafdgfdhgshsgjhjhjdhkjdkjhkhjlfkhlkfhlkljkljljg.jklljhkjkhgjdfjgbzbzvcnhmhgjkdkuykjdghdfagfgahga",
    },
    {
      name: "project 8",
      // img: h,
      img: "fgafdgfdhgshsgjhjhjdhkjdkjhkhjlfkhlkfhlkljkljljg.jklljhkjkhgjdfjgbzbzvcnhmhgjkdkuykjdghdfagfgahga",
    },
  ];
  return (
    <section id="portfolio" className="portfolio">
      <Container>
        <Title title={"Portfolio"} />
        <Row className="portfolio-row">
          {projects.map((project) => {
            return (
              <Col md={{ span: 3 }}>
                <Card
                  className="project-card p-2"
                  onClick={() => showDetails()}
                >
                  <img src={project.img} className="project-img" alt="" />
                  <p>{project.img}</p>
                  <p className="mb-0 mt-2 text-white fw-bold text-center text-capitalize">
                    {project.name}
                  </p>
                  <Card className="project-details">
                    {project.name}
                  </Card>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
