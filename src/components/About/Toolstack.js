import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <h2>VS Code</h2>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h2>Postman</h2>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h2>Heroku</h2>
        <SiHeroku />
      </Col>
    </Row>
  );
}

export default Toolstack;
