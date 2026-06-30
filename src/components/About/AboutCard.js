import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Dávid Szépvölgyi</span> — a{" "}
            <span className="purple">Robotics and Cybernetics</span> student who
            believes the most interesting problems live exactly at the boundary
            between hardware and software. If I can write the firmware{" "}
            <i>and</i> ship the app that talks to it, even better.
            <br />
            <br />
            My work spans from low-level embedded systems — sensor networks,
            microcontrollers, real-time data pipelines — all the way up to
            cross-platform mobile and web development. I reach for{" "}
            <span className="purple">C++ and Python</span> when hardware is
            involved, and <span className="purple">React Native, React</span>{" "}
            and <span className="purple">Firebase</span> when building the
            interface people actually touch.
            <br />
            <br />
            What drives me is building things with a tangible impact on daily
            life — the kind where you can point at something physical, a plant
            growing healthier or a process running smoother, and say{" "}
            <i>"that's working because of the code."</i> I'm always thinking of
            new ways to automate the tedious and make room for what matters.
            <br />
            <br />
            Outside the lab and the IDE, a few things that keep me sane:
          </p>

          <ul>
            <li className="about-activity">
              <span style={{ display: "inline-block", width: 10, height: 10, borderRadius: "50%", background: "#22c55e", marginRight: 8, flexShrink: 0 }} /> Tinkering with electronics and building things
              that shouldn't exist
            </li>
            <li className="about-activity">
              <span style={{ display: "inline-block", width: 10, height: 10, borderRadius: "50%", background: "#22c55e", marginRight: 8, flexShrink: 0 }} /> Exploring new frameworks — usually at midnight,
              always with coffee
            </li>
            <li className="about-activity">
              <span style={{ display: "inline-block", width: 10, height: 10, borderRadius: "50%", background: "#22c55e", marginRight: 8, flexShrink: 0 }} /> Sports and staying active to balance out all the
              sitting
            </li>
            <li className="about-activity">
              <span style={{ display: "inline-block", width: 10, height: 10, borderRadius: "50%", background: "#22c55e", marginRight: 8, flexShrink: 0 }} /> Travelling and collecting new perspectives (and
              airport delays)
            </li>
          </ul>

          <p style={{ color: "var(--accent)" }}>
            "Have fun while doing things — in the end, it will be worth it!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
