import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsTools, BsCpu, BsPeople } from "react-icons/bs";
import { GiElectric } from "react-icons/gi";
import Techstack from "./TechstackElectronicDifferential";
import heroImg from "../../Assets/Projects/SGT/FormulaCarTitle.png";
import amkImg from "../../Assets/Projects/SGT/AMK.png";
import carImg from "../../Assets/Projects/SGT/FormulaCar.png";
import unitImg from "../../Assets/Projects/SGT/FrontUnit2.png";

/* ─── CONTENT ────────────────────────────────────────────────────────────── */
const overviewPara1 =
  "Formula Student is one of the closest environments to professional motorsport engineering. Every subsystem must work reliably under extreme conditions while satisfying strict technical regulations and integrating with every other part of the vehicle.";

const overviewPara2 =
  "As part of the electrical division, I worked on the complete electrical integration of the race car — from PCB design and wiring infrastructure to firmware adjustments and vehicle communication. My primary responsibility was supporting the development of an electronic differential (torque vectoring) system built around the AMK Racing Kit v2.";

const overviewPara3 =
  "Unlike a mechanical differential, an electronic differential continuously controls the torque delivered to each rear motor based on steering input and vehicle dynamics. This allows the car to corner faster, improve stability, and maximize traction without compromising driver control.";

const overviewCallout =
  "💡 In Formula Student, reliability is just as important as performance — one electrical fault can end an entire competition.";

const architectureText =
  "The race car used the AMK Racing Kit v2, where each wheel motor is controlled by its own inverter. Communication between controllers, safety systems, and vehicle electronics is performed through a standard CAN network. My work focused on ensuring that every electrical component communicated reliably while remaining serviceable and compliant with Formula Student regulations.";

const architectureList = [
  "PCB design for custom electronic modules",
  "3D CAD modeling of electrical components and mounting solutions",
  "Wiring harness planning and documentation",
  "CAN bus integration and debugging",
  "Firmware configuration and adjustments",
  "Electrical system testing and validation",
];

const diffText =
  "The main technical challenge was the development and integration of an electronic differential (vector control) system. Instead of mechanically distributing torque between wheels, the controller calculates the desired torque for each motor independently using vehicle inputs such as steering angle and driver throttle commands. The system communicates with the AMK motor controllers through CAN, allowing precise real-time torque distribution between the left and right rear wheels.";

const diffList = [
  "AMK motor controller behaviour and limitations",
  "Launch start control",
  "Driver specific configuration",
];

const cadText =
  "Beyond electronics, I completed most of the CAD work for the electrical division. This included designing mounting brackets, enclosures, PCB housings, cable routing solutions, and electrical packaging that fit within the vehicle while remaining easy to assemble and maintain. The focus was not only on functionality but also on manufacturability and accessibility during competition, where components often need to be serviced under significant time pressure.";

const embeddedText =
  "The electrical system consisted of multiple custom-designed PCBs integrated with commercially available controllers. Firmware adjustments were performed to ensure compatibility between custom electronics and the AMK motor controllers while maintaining reliable communication across the CAN network.";

const embeddedList = [
  "Schematic capture",
  "PCB layout", //added
  "Connector selection",
  "Signal routing",
  "Power distribution",
  "Electrical validation",
];

const teamText =
  "In addition to technical development, I gained experience leading parts of the electrical division. Working within a multidisciplinary engineering team taught me how to balance technical decisions with project deadlines, manufacturing constraints, and competition requirements.";

const teamList = [
  "Coordinating development tasks",
  "Reviewing electrical designs",
  "Planning subsystem integration",
  "Supporting newer team members"
];

const takeawayText =
  "The project provided practical experience in building a complete motorsport electrical system rather than isolated electronic components. Perhaps the biggest takeaway was understanding how every subsystem — from a PCB trace to a CAN message — directly affects vehicle performance. Designing electronics for a race car requires not only technical knowledge but also reliability, teamwork, and attention to detail under tight engineering constraints.";

const takeawayList = [
  "Electrical architecture of a Formula Student race car",
  "Custom PCB development",
  "Extensive electrical CAD design",
  "CAN-based communication between vehicle systems",
  "Firmware integration with the AMK Racing Kit v2",
  "Wiring harness design and documentation",
  "Electronic differential (torque vectoring) system",
  "Cross-functional collaboration across electrical, software, and mechanical teams",
];

/* ─────────────────────────────────────────────────────────────────────────── */

function ElectronicDifferential() {
  return (
    <Container fluid className="about-section">
      <Container>

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <div className="art-hero">
          <Row className="align-items-center" style={{ maxWidth: "820px", margin: "0 auto", textAlign: "left" }}>
            <Col md={8}>
              <h1 style={{ fontSize: "2.6em", marginBottom: "8px" }}>
                Electronic Differential &amp;{" "}
                <strong className="purple">Vehicle Control System</strong>
              </h1>
              <p className="art-slogan" style={{ marginBottom: "20px" }}>
                Designing the electrical architecture for a Formula Student race car using the AMK Racing Kit v2
              </p>
              <div className="art-meta" style={{ justifyContent: "flex-start" }}>
                <span className="article-tag">Embedded Systems</span>
                <span className="article-tag">PCB Design</span>
                <span className="article-tag">CAN Communication</span>
                <span className="article-tag">Formula Student</span>
                <span className="art-meta-sep">·</span>
                <span>~5 min read</span>
                <span className="art-meta-sep">·</span>
                <span>2023–2024</span>
              </div>
            </Col>
            <Col md={4} style={{ textAlign: "center" }}>
              <img
                src={carImg}
                alt="Formula Student race car"
                style={{ width: "100%", maxWidth: "200px", opacity: 0.88, borderRadius: "8px" }}
              />
            </Col>
          </Row>
        </div>

        <div className="art-divider" />

        {/* ── SECTION 01: WHY THIS PROJECT MATTERS ─────────────────────────── */}
        <section className="art-section">
          <div className="art-section-label">
            <span className="art-section-number">01</span>
            <h2 className="art-section-title">Why This Project Matters</h2>
          </div>
          <div className="art-body">
            <p>{overviewPara1}</p>
            <p>{overviewPara2}</p>
            <p>{overviewPara3}</p>
            <div className="art-callout">{overviewCallout}</div>
          </div>
          {/* <img
            src={heroImg}
            alt="Formula Student race car on track"
            className="art-img-full"
            style={{ marginTop: "24px" }}
          /> */}
          <p className="art-caption">Formula Student race car — electrical systems integration project</p>
        </section>

        <div className="art-divider" />

        {/* ── SECTION 02: HOW IT WORKS ──────────────────────────────────────── */}
        <section className="art-section">
          <div className="art-section-label">
            <span className="art-section-number">02</span>
            <h2 className="art-section-title">How It Works</h2>
          </div>
          <div className="art-body">
            <p>
              The project combined embedded electronics, CAD design, firmware development, and system integration into a complete vehicle control platform.
            </p>
          </div>

          {/* 2.1 Electrical Architecture */}
          <div className="art-subsection">
            <h3 className="art-subsection-title">
              <GiElectric /> Electrical Architecture
            </h3>
            <Row className="align-items-center" style={{ gap: "0" }}>
              <Col md={6}>
                <div className="art-body">
                  <p>{architectureText}</p>
                  <p style={{ marginBottom: "8px" }}>Tasks included:</p>
                  <ul className="art-list">
                    {architectureList.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col md={6} style={{ paddingLeft: "24px" }}>
                <img
                  src={amkImg}
                  alt="AMK Racing Kit v2 motor and inverter"
                  className="art-img-half"
                />
                <p className="art-caption">AMK Racing Kit v2 — motor controller and inverter unit</p>
              </Col>
            </Row>
          </div>

          {/* 2.2 Electronic Differential */}
          <div className="art-subsection">
            <h3 className="art-subsection-title">
              <BsCpu /> Electronic Differential
            </h3>
            <div className="art-body">
              <p>{diffText}</p>
              <p style={{ marginBottom: "8px" }}>Due to sophisticated topics I focused on:</p>
              <ul className="art-list">
                {diffList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2.3 Mechanical & CAD Design */}
          <div className="art-subsection">
            <h3 className="art-subsection-title">
              <BsTools /> Mechanical &amp; CAD Design
            </h3>
            <Row className="align-items-center" style={{ gap: "0" }}>
              <Col md={6}>
                <div className="art-body">
                  <p>{cadText}</p>
                </div>
              </Col>
              <Col md={6} style={{ paddingLeft: "24px" }}>
                <img
                  src={unitImg}
                  alt="Examplary CAD design of modularity of systems and components"
                  className="art-img-half"
                />
                <p className="art-caption">Examplary CAD design of modularity of systems and components</p>
              </Col>
            </Row>
          </div>

          {/* 2.4 Embedded Electronics */}
          <div className="art-subsection">
            <h3 className="art-subsection-title">
              <BsCpu /> Embedded Electronics
            </h3>
            <div className="art-body">
              <p>{embeddedText}</p>
              <p style={{ marginBottom: "8px" }}>My work included:</p>
              <ul className="art-list">
                {embeddedList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2.5 Team Leadership */}
          <div className="art-subsection">
            <h3 className="art-subsection-title">
              <BsPeople /> Team Leadership
            </h3>
            <div className="art-body">
              <p>{teamText}</p>
              <ul className="art-list">
                {teamList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="art-divider" />

        {/* ── SECTION 03: RESULTS & TAKEAWAYS ──────────────────────────────── */}
        <section className="art-section">
          <div className="art-section-label">
            <span className="art-section-number">03</span>
            <h2 className="art-section-title">Results &amp; Takeaways</h2>
          </div>
          <div className="art-body">
            <p>{takeawayText}</p>
            <p style={{ marginBottom: "8px" }}>By the end of the project, I had contributed to:</p>
            <ul className="art-list">
              {takeawayList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <div className="art-divider" />

        {/* ── SECTION 04: SKILLS USED ───────────────────────────────────────── */}
        <section className="art-section">
          <div className="art-section-label">
            <span className="art-section-number">04</span>
            <h2 className="art-section-title">Skills Used</h2>
          </div>
          <Techstack />
        </section>

      </Container>
    </Container>
  );
}

export default ElectronicDifferential;
