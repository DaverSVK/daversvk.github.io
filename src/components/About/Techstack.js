import React from "react";
import { Row, Col } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiReact, DiPython, DiGit } from "react-icons/di";
import { SiFirebase, SiAutodesk, SiBlender } from "react-icons/si";
import SkillIcon from "./SkillIcon";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={2}><SkillIcon icon={<CgCPlusPlus />} level={4} /></Col>
      <Col xs={6} md={2}><SkillIcon icon={<DiReact />}    level={3} /></Col>
      <Col xs={6} md={2}><SkillIcon icon={<DiGit />}      level={4} /></Col>
      <Col xs={6} md={2}><SkillIcon icon={<SiFirebase />} level={2} /></Col>
      <Col xs={6} md={2}><SkillIcon icon={<SiBlender />}  level={1} /></Col>
      <Col xs={6} md={2}><SkillIcon icon={<SiAutodesk />} level={2} /></Col>
      <Col xs={6} md={2}><SkillIcon icon={<DiPython />}   level={2} /></Col>
    </Row>
  );
}

export default Techstack;
