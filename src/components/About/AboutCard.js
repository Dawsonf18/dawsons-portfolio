import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="light-blue">Dawson Filion </span>
            from <span className="purple"> Orlando, Florida.</span>
            <br />I am a UCF Engineering bootcamp graduate 
            pursuing my dream of becoming a professional software engineer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Time with friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Surfing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to continue learning everyday"{" "}
          </p>
          <footer className="blockquote-footer">Dawson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
