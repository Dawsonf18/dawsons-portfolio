import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <h2>JavaScript</h2>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h2>Node.JS</h2>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h2>React</h2>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h2>MongoDB</h2>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h2>Next.JS</h2>
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h2>Git</h2>
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
