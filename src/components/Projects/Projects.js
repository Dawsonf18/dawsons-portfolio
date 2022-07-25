import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import budgeIt from "../../Assets/Projects/1.jpeg";
import techBlog from "../../Assets/Projects/3.jpeg";
import scrypto from "../../Assets/Projects/2.jpeg";
import photoPort from "../../Assets/Projects/4.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budgeIt}
              isBlog={false}
              title="Budge-It"
              description="Budge-It is a simplistic full stack program using an MVC standard to help you figure out your budget."
              ghLink="https://github.com/Dawsonf18/budge-it/tree/main"
              demoLink="https://budge--it.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techBlog}
              isBlog={false}
              title="Tech Blog"
              description="Tech Blog is used as an entertainment platform where anybody can post info or their knowledge about tech. It uses Handlebars Node.Js, Express, and Sequelize."
              ghLink="https://github.com/Dawsonf18/tech-blog"
              demoLink="https://stark-hollows-36066.herokuapp.com/ "
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scrypto}
              isBlog={false}
              title="Scrypto"
              description="Scrypto is a user friendly interface created with javascript, to allow users to search any stock or cryptocurrency they like."
              ghLink="https://github.com/Dawsonf18/Scrypto"
              demoLink="https://dawsonf18.github.io/Scrypto/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={photoPort}
              isBlog={false}
              title="Photo Port"
              description="Photo Port was a project built using React for a photographer in order for her to display her work to her clients."
              ghLink="https://github.com/Dawsonf18/photo-port"
              demoLink="https://dawsonf18.github.io/photo-port/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
