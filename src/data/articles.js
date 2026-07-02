// Add new articles by appending an object to this array.
// Fields:
//   id          — unique slug string (used as React key only)
//   title       — article title
//   overview    — 1–3 sentence summary shown on the card
//   ghLink      — GitHub repo URL (required)
//   articleLink — external article/post URL, or null to hide the button
//   navigateTo  — internal route (e.g. "/my-article"), or null for external fallback
//   imgPath     — imported image shown on the card, or null for no image
//   tags        — array of technology/topic strings
//   date        — "YYYY-MM" string, displayed as "Mon YYYY"
//
// Click priority: navigateTo → articleLink → ghLink

import GreenHouse2Img from "../Assets/Projects/AutomaticGreenhouse/GreenHouse3Dsqr.png";
import DDPMTitleImg from "../Assets/Projects/DiabeticRetinopathy/DDPMTitleImg.png";
import SGTImg from "../Assets/Projects/SGT/FormulaCarTitle.png";

export const articles = [
  {
    id: "automatic-greenhouse",
    title: "Automatic Greenhouse — From Hardware to Mobile App",
    overview:
      "An end-to-end IoT project connecting ESP32 sensor nodes to a React Native app via Firebase. Covers firmware architecture, real-time data sync, and automated plant-care state machines.",
    ghLink: "https://github.com/DaverSVK",
    articleLink: null,
    navigateTo: "/automatic_greenhouse",
    imgPath: GreenHouse2Img,
    tags: ["ESP32", "React Native", "Firebase", "Python"],
    date: "2024-06",
  },
  {
    id: "electronic-differential",
    title: "Electronic Differential & Vehicle Control System",
    overview:
      "Designing the complete electrical architecture for a Formula Student race car — from custom PCBs and wiring harness to CAN-based torque vectoring using the AMK Racing Kit v2.",
    ghLink: "https://github.com/DaverSVK",
    articleLink: null,
    navigateTo: "/electronic_differential",
    imgPath: SGTImg,
    tags: ["Embedded Systems", "PCB Design", "CAN Communication", "Formula Student"],
    date: "2024-01",
  },
  {
    id: "diabetic-retinopathy-diffusion",
    title: "Conditional Generation of Retinal Images",
    overview:
      "Using diffusion models to generate stage-specific diabetic retinopathy fundus images. Compares cross-attention vs. simplified class-conditioning on the DDR dataset to tackle medical data imbalance.",
    ghLink: "https://github.com/DaverSVK/DDPM_classifier_free",
    articleLink: null,
    navigateTo: "/diabetic_retinopathy",
    imgPath: DDPMTitleImg,
    tags: ["Medical AI", "Diffusion Models", "Computer Vision", "Python"],
    date: "2025-01",
  },
];
