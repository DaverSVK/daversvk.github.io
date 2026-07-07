import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import GreenhouseImg from "../../Assets/Projects/AutomaticGreenhouse/GreenHouse3Dsqr.png";
import DDPMImg from "../../Assets/Projects/DiabeticRetinopathy/DDPMTitleImg.png";
import SGTImg from "../../Assets/Projects/SGT/FormulaCarTitle.png";
import Github from "./Github";

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
              imgPath={GreenhouseImg}
              isBlog={false}
              title="Automatic greenhouse"
              description="An automated greenhouse that detects plant diseases and infections, manages growth with plant-specific modes, and optimizes conditions for each plant. Control and monitor everything remotely through a clean, easy-to-use app."
              ghLink="http://github.com/DaverSVK/GreenhouseControl"
              // demoLink="https://chatify-49.web.app/"
              navigateTo="/automatic_greenhouse"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SGTImg}
              isBlog={false}
              title="Electronic Differential & Vehicle Control System"
              description="Complete electrical integration of a Formula Student race car — custom PCB design, CAN bus communication, wiring harness, and an electronic differential using the AMK Racing Kit v2 for real-time torque vectoring."
              ghLink="https://github.com/DaverSVK"
              navigateTo="/electronic_differential"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DDPMImg}
              isBlog={false}
              title="Diabetic Retinopathy — Diffusion Models"
              description="Using conditional diffusion models to generate stage-specific retinal fundus images. Tackles medical data imbalance by synthesizing realistic images aligned with disease severity, trained on the DDR dataset."
              ghLink="https://github.com/DaverSVK/DDPM_classifier_free"
              navigateTo="/diabetic_retinopathy"
            />
          </Col>

        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default Projects;
