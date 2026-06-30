// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/Robot-Home.png";
// import Particle from "../Particle";
// // import Home2 from "./Home2";
// import Type from "./Type";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

// function Home() {
//   return (
//     <section>
//       <Container fluid className="home-section" id="home">
//         <Particle />
//         <Container className="home-content">
//           <Row>
//             <Col md={7} className="home-header">
//               <h1 style={{ paddingBottom: 15 }} className="heading">
//                 Hi There!{" "}
//               </h1>

//               <h1 className="heading-name">
//                 I'M
//                 <strong className="main-name"> Dávid Szépvölgyi</strong>
//               </h1>

//               <div style={{ padding: 50, textAlign: "left" }}>
//                 <Type />
//               </div>
//             </Col>

//             <Col md={5} style={{ paddingBottom: 20 }}>
//               <img
//                 src={homeLogo}
//                 alt="home pic"
//                 className="img-fluid"
//                 style={{ maxHeight: "450px" }}
//               />
//             </Col>
//           </Row>
//          <ul className="home-about-social-links">
//             <li className="social-icons">
//               <a
//                 href="https://github.com/DaverSVK"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="icon-colour  home-social-icons"
//               >
//                 <AiFillGithub />
//               </a>
//             </li>
//             {/* <li className="social-icons">
//               <a
//                 href="https://twitter.com/Soumyajit4419"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="icon-colour  home-social-icons"
//               >
//                 <AiOutlineTwitter />
//               </a>
//             </li> */}
//             <li className="social-icons">
//               <a
//                 href="https://www.linkedin.com/in/d%C3%A1vid-sz%C3%A9pv%C3%B6lgyi-a6167b210/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="icon-colour  home-social-icons"
//               >
//                 <FaLinkedinIn />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href="https://www.instagram.com/david__szepvolgyi/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="icon-colour home-social-icons"
//               >
//                 <AiFillInstagram />
//               </a>
//             </li>
//           </ul>
//         </Container>
//       </Container>
//       {/* <Home2 /> */}
//     </section>
//   );
// }

// export default Home;
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import Type from "./Type";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineArrowRight,
  AiOutlineDownload,
} from "react-icons/ai";
import { FaLinkedinIn, FaMapMarkerAlt, FaBrain } from "react-icons/fa";
import DroneHome from "../../Assets/Home/DroneHome.png";
import EmbeddedHome from "../../Assets/Home/EmbeddedHome.png";
import BioGenerativeAIHome from "../../Assets/Home/BioGenerativeAIHome.png";
import BioMechanicalHome from "../../Assets/Home/BioMechanicalHome.png";

function Home() {
  const panels = [
    {
      img: DroneHome,
      // title: "Intelligent Systems",
      // text: "Designing autonomous systems that perceive, learn and adapt.",
    },
    {
      img: EmbeddedHome,
      // title: "Embedded Intelligence",
      // text: "Building robust embedded solutions with real-time intelligence.",
    },
    {
      img: BioGenerativeAIHome,
      // title: "Machine Learning",
      // text: "Extracting insights from data and building models that drive decisions.",
    },
    {
      img: BioMechanicalHome,
      // title: "Human + Technology",
      // text: "Exploring the future where technology enhances human potential.",
    },
  ];

  return (
    <section>
      <Container fluid className="home-section neo-home" id="home">
        <Particle />

        <div className="neo-shell">
          <aside className="neo-intro">
            {/* <div className="neo-status">
              <span /> Available for opportunities
            </div> */}

            <h1>
              Hi There!
              <br />
              I&apos;m <strong>Dávid Szépvölgyi</strong>
            </h1>

            <div style={{ padding: 50, textAlign: "left" }}>
               <Type />
            </div>

            <div className="neo-actions">
              <Link to="/resume" className="neo-btn neo-btn-primary">
                View Resume <AiOutlineDownload />
              </Link>

              <Link to="/articles" className="neo-btn neo-btn-ghost">
                Read Articles <AiOutlineArrowRight />
              </Link>
            </div>

            <div className="neo-bottom">
              <div>
                <small>Let&apos;s connect</small>
                <div className="neo-socials">
                  <a href="https://github.com/DaverSVK" target="_blank" rel="noreferrer">
                    <AiFillGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/d%C3%A1vid-sz%C3%A9pv%C3%B6lgyi-a6167b210/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://www.instagram.com/david__szepvolgyi/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillInstagram />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          <div className="neo-panels">
            {panels.map((panel) => (
              <article className="neo-panel" key={panel.title}>
                <img className="neo-panel-bg" src={panel.img} alt={panel.title} />

                {/* <div className="neo-panel-copy">
                  <span className="neo-panel-icon">
                    <img src={panel.img} alt={panel.title} />
                  </span>
                  <h3>{panel.title}</h3>
                  <p>{panel.text}</p>
                  <i />
                </div> */}
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Home;