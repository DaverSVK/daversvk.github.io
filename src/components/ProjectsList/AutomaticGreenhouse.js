import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsTools, BsCpu, BsPhone } from "react-icons/bs";
import Techstack from "./TechstackProjects";
import heroLogo from "../../Assets/Projects/AutomaticGreenhouse/GreenHouseTitleImg.png";
import hardwareImg from "../../Assets/Projects/AutomaticGreenhouse/GreenHouseSection1Img.png";
import appImg from "../../Assets/Projects/AutomaticGreenhouse/GreenHouseSection2Img.png";

/* ─── REAL CONTENT — edit as needed ─────────────────────────────────────── */
const overviewPara1 =
  "I wanted to grow something. Not metaphorically — actual lettuce. But as an engineering student, just buying soil and a pot felt like a missed opportunity. What if the plant could tell me when it was thirsty? What if the temperature, humidity, and light were all monitored and automatically balanced? That's where this project started: a simple question that turned into a full hardware-software system.";

const overviewPara2 =
  "Leaf lettuce was the perfect test subject — short 40-day growth cycle, low maintenance requirements, and immediately edible feedback on whether the system worked. The goal was a self-contained proof of concept: a physical greenhouse with onboard sensors, firmware that reacted to readings, and a mobile app to monitor and control everything remotely.";

const overviewCallout =
  "💡 The simplest projects are rarely simple — but they're always the most instructive.";

const hardwareText =
  "The greenhouse is built around a structural enclosure with a dedicated lower compartment housing all electronics except the sensors themselves. Inside: two temperature probes (top and bottom of the chamber), a light intensity sensor, separate air and soil humidity sensors, and a barometric pressure sensor. A small heating element handles temperature regulation, and an adjustable fan at the top maintains even airflow. Every component was chosen for low power draw and compatibility with the microcontroller.";

/* ─── TODO: Replace with real firmware content ───────────────────────────── */
const firmwareText =
  "[TODO] Describe the firmware architecture here — what microcontroller runs it, how sensor data is collected and processed, how the control logic (heating, fan, watering) is triggered, and how data is sent to Firebase. Mention any key design decisions like interrupt handling, sleep modes, or OTA update support.";

/* ─── REAL CONTENT — edit as needed ─────────────────────────────────────── */
const uiPara1 =
  "The Smart Greenhouse app started life as a web dashboard — React with TypeScript on the frontend, Java on the backend — built primarily to display and manage sample data in a tabular view. It worked, but it felt clunky. After migrating the data layer to Firebase, the web app was retired in favour of something more natural to use on the go.";

const uiPara2 =
  "The current version is a React Native app running on both Android and iOS. It communicates with the greenhouse in real time through Axios HTTP requests, using async/await patterns rather than promise chains. From the app you can view live sensor readings, check historical trends, and adjust plant-mode settings — all from wherever you are.";
/* ─────────────────────────────────────────────────────────────────────────── */

function AutomaticGreenhouse() {
  return (
    <Container fluid className="about-section">
      <Container>

        {/* ── SECTION 1: HERO ─────────────────────────────────────────────── */}
        <div className="art-hero">
          <Row className="align-items-center" style={{ maxWidth: "820px", margin: "0 auto", textAlign: "left" }}>
            <Col md={8}>
              <h1 style={{ fontSize: "2.6em", marginBottom: "8px" }}>
                Automatic <strong className="purple">Greenhouse</strong>
              </h1>
              <p className="art-slogan" style={{ marginBottom: "20px" }}>
                Growing plants with code — one sensor at a time
              </p>
              <div className="art-meta" style={{ justifyContent: "flex-start" }}>
                <span className="article-tag">IoT</span>
                <span className="article-tag">Embedded</span>
                <span className="article-tag">Mobile App</span>
                <span className="art-meta-sep">·</span>
                <span>~5 min read</span>
                <span className="art-meta-sep">·</span>
                <span>Jun 2024</span>
              </div>
            </Col>
            <Col md={4} style={{ textAlign: "center" }}>
              <img src={heroLogo} alt="Greenhouse logo" style={{ width: "100%", maxWidth: "180px", opacity: 0.88 }} />
            </Col>
          </Row>
        </div>

        <div className="art-divider" />

        {/* ── SECTION 2: WHY IT HAPPENED ──────────────────────────────────── */}
        <section className="art-section">
          <div className="art-section-label">
            <span className="art-section-number">01</span>
            <h2 className="art-section-title">Why It Happened</h2>
          </div>
          <div className="art-body">
            <p>{overviewPara1}</p>
            <p>{overviewPara2}</p>
            <div className="art-callout">{overviewCallout}</div>
            {/* TODO: Replace with a photo of the completed greenhouse or early sketches */}
            {/* <div className="art-img-placeholder">
              [ Add image: completed greenhouse or early concept sketch ]
            </div>
            <p className="art-caption">
             TODO: Add caption }[ Caption — e.g. "First prototype, Jan 2024" ]
            </p> */}
          </div>
        </section>

        <div className="art-divider" />

        {/* ── SECTION 3: UNDER THE HOOD ───────────────────────────────────── */}
        <section className="art-section">
          <div className="art-section-label">
            <span className="art-section-number">02</span>
            <h2 className="art-section-title">Under the Hood</h2>
          </div>
          <div className="art-body">
            <p>
              The project touches three distinct layers: the physical hardware
              inside the greenhouse, the firmware running on the microcontroller,
              and the mobile app that ties it all together. Each layer had its
              own challenges — and its own moments of "why is the plant still
              dying."
            </p>
          </div>

          {/* 3.1 Hardware */}
          <div className="art-subsection">
            <h3 className="art-subsection-title">
              <BsTools /> Hardware
            </h3>
            <Row className="align-items-center" style={{ gap: "0" }}>
              <Col md={6}>
                <div className="art-body">
                  <p>{hardwareText}</p>
                </div>
              </Col>
              <Col md={6} style={{ paddingLeft: "24px" }}>
                <img
                  src={hardwareImg}
                  alt="Greenhouse hardware schematic"
                  className="art-img-half"
                />
                <p className="art-caption">
                  {/* TODO: Add caption */}[Enclosure schematic with component layout ]
                </p>
              </Col>
            </Row>
          </div>

          {/* 3.2 Firmware */}
          <div className="art-subsection">
            <h3 className="art-subsection-title">
              <BsCpu /> Firmware
            </h3>
            <div className="art-body">
              <p>{firmwareText}</p>
            </div>
            {/* TODO: Add firmware architecture diagram, flowchart, or code snippet screenshot */}
            {/* <div className="art-img-placeholder">
              [ Add image: firmware flowchart or architecture diagram ]
            </div>
            <p className="art-caption">
              [ Caption — e.g. "Sensor polling and control loop overview" ]
            </p> */}
          </div>

          {/* 3.3 User Interface */}
          <div className="art-subsection">
            <h3 className="art-subsection-title">
              <BsPhone /> User Interface
            </h3>
            <div className="art-body">
              <p>{uiPara1}</p>
              <p>{uiPara2}</p>
            </div>
            <img
              src={appImg}
              alt="Greenhouse mobile app screenshots"
              className="art-img-full"
            />
            <p className="art-caption">
              {/* TODO: Add caption */}[ React Native app — login, live readings, and plant-mode settings ]
            </p>
          </div>
        </section>

        <div className="art-divider" />

        {/* ── SECTION 4: SKILLS USED ──────────────────────────────────────── */}
        <section className="art-section">
          <div className="art-section-label">
            <span className="art-section-number">03</span>
            <h2 className="art-section-title">Skills Used</h2>
          </div>
          <Techstack />
        </section>

      </Container>
    </Container>
  );
}

export default AutomaticGreenhouse;
