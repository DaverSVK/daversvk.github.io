import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsEye, BsCpu, BsBarChart } from "react-icons/bs";
import Techstack from "./TechstackDDPM";
import heroLogo from "../../Assets/Projects/DiabeticRetinopathy/DDPMTitleImg.png";
import diseasImg from "../../Assets/Projects/DiabeticRetinopathy/DDPMSection0Img.png";
import modelImg from "../../Assets/Projects/DiabeticRetinopathy/DDPMSection1Img.png";
import resultImg from "../../Assets/Projects/DiabeticRetinopathy/DDPMSection2Img.png";

/* ─── CONTENT ────────────────────────────────────────────────────────────── */
const overviewPara1 =
  "This project explores whether AI can generate medically realistic retinal images for different stages of diabetic retinopathy — a disease that damages the back of the eye and can lead to blindness if not caught early. The challenge is not just to create images that look believable, but to create images that match the correct disease stage in a way that is useful for research and model training.";

const overviewPara2 =
  "That matters because medical datasets are rarely balanced. Mild cases are more common, severe cases are harder to collect, and expert labeling is expensive. In practice, that means diagnostic systems often learn from incomplete data. My goal was to test whether diffusion models could help by generating synthetic retinal images that are both visually convincing and clinically aligned with specific stages of disease progression.";

const overviewCallout =
  "💡 In medical AI, realism is not enough — the synthetic image also has to mean the right thing.";

const problemText =
  "The project focuses on diabetic retinopathy fundus images, grouped into five stages: No DR, Mild NPDR, Moderate NPDR, Severe NPDR, and Proliferative DR. I trained on the public DDR dataset, which was preprocessed into centered, square retinal crops with a consistent black background. After filtering unusable samples, the working training set contained 6,260 images. The class distribution was highly imbalanced, which became one of the central technical problems of the project.";

const modelText =
  "I tested two diffusion-based approaches built with the Hugging Face Diffusers library. The first used a cross-attention conditioned U-Net, where the disease stage explicitly guided generation. The second used a simpler class-conditioning method, injecting the stage label directly into the model's embedding pathway and combining it with classifier-free guidance. The simpler design turned out to be more stable: it trained faster, produced fewer visual artifacts, and preserved retinal structure more reliably while still responding to stage labels.";

const resultsPara1 =
  "The most important result was that conditioning worked: when given a disease stage, the model more often produced features consistent with that stage instead of drifting toward the most common classes. In other words, it became possible to generate retinal images with some control over disease severity rather than relying on a generic generator that mostly reproduces the dataset average.";

const resultsPara2 =
  "The cross-attention model could reproduce vessel structure, but it often developed unrealistic global color casts and struggled with advanced lesions. The simplified conditioned model performed better overall. On the DDR dataset, it achieved a combined FID of 60.73 [Worlds best score 2025 is FID 48] and KID of 0.0680 ± 0.0048, while also training more efficiently than the heavier conditioned variant. Severe stages were still the hardest to synthesize, which reflects both their rarity in the dataset and the fact that their lesions are more variable and harder to model.";

const significanceText =
  "Technically, the project shows that more complex conditioning is not always better. For a small set of discrete medical labels, a lightweight conditioning strategy can outperform a more elaborate architecture because it introduces fewer failure modes. Practically, the outcome is a pipeline that could help balance rare disease classes, support robustness testing of diagnostic systems, and create controlled educational examples without needing to collect new patient data for every stage.";
/* ────────────────────────────────────────────────────────────────────────── */

function DiabeticRetinopathyDiffusion() {
  return (
    <Container fluid className="about-section">
      <Container>

        {/* ── SECTION 1: HERO ─────────────────────────────────────────────── */}
        <div className="art-hero">
          <Row
            className="align-items-center"
            style={{ maxWidth: "900px", margin: "0 auto", textAlign: "left" }}
          >
            <Col md={8}>
              <h1 style={{ fontSize: "2.6em", marginBottom: "8px" }}>
                Conditional Generation of{" "}
                <strong className="purple">Retinal Images</strong>
              </h1>
              <p className="art-slogan" style={{ marginBottom: "20px" }}>
                Using diffusion models to generate stage-specific diabetic retinopathy images
              </p>
              <div className="art-meta" style={{ justifyContent: "flex-start" }}>
                <span className="article-tag">Medical AI</span>
                <span className="article-tag">Diffusion Models</span>
                <span className="article-tag">Computer Vision</span>
                <span className="art-meta-sep">·</span>
                <span>~6 min read</span>
                <span className="art-meta-sep">·</span>
                <span>2025</span>
              </div>
            </Col>
            <Col md={4} style={{ textAlign: "center" }}>
              <img
                src={heroLogo}
                alt="Retinal diffusion project logo"
                style={{ width: "100%", maxWidth: "180px", opacity: 0.9 }}
              />
            </Col>
          </Row>
        </div>

        <div className="art-divider" />

        {/* ── SECTION 2: WHY THIS PROJECT MATTERS ─────────────────────────── */}
        <section className="art-section">
          <div className="art-section-label">
            <span className="art-section-number">01</span>
            <h2 className="art-section-title">Why This Project Matters</h2>
          </div>
          <div className="art-body">
            <p>{overviewPara1}</p>
            <p>{overviewPara2}</p>
            <div className="art-callout">{overviewCallout}</div>
            <img
              src={diseasImg}
              alt="Retinal Disease Symptoms"
              className="art-img-half"
            />
            <p className="art-caption">
              [ Diabetic retinopathy symptoms ]
            </p>
          </div>
        </section>

        <div className="art-divider" />

        {/* ── SECTION 3: HOW IT WORKS ─────────────────────────────────────── */}
        <section className="art-section">
          <div className="art-section-label">
            <span className="art-section-number">02</span>
            <h2 className="art-section-title">How It Works</h2>
          </div>
          <div className="art-body">
            <p>
              The project combines a medical imaging problem with generative AI.
              In simple terms, the model starts from noise and gradually learns how to
              turn that noise into a realistic retinal image. The key question was whether
              that generation process could also be controlled so the output reflects a
              chosen disease stage rather than producing random retinal imagery.
            </p>
          </div>

          {/* 3.1 Problem + Data */}
          <div className="art-subsection">
            <h3 className="art-subsection-title">
              <BsEye /> Problem and Data
            </h3>
            <Row className="align-items-center" style={{ gap: "0" }}>
              <Col md={6}>
                <div className="art-body">
                  <p>{problemText}</p>
                </div>
              </Col>
              <Col md={6} style={{ paddingLeft: "24px" }}>
                <img
                  src={modelImg}
                  alt="Retinal image generation pipeline"
                  className="art-img-half"
                />
                <p className="art-caption">
                  [ From disease label and noise to synthetic retinal image ]
                </p>
              </Col>
            </Row>
          </div>

          {/* 3.2 Model Design */}
          <div className="art-subsection">
            <h3 className="art-subsection-title">
              <BsCpu /> Model Design
            </h3>
            <div className="art-body">
              <p>{modelText}</p>
            </div>

            {/* <div className="art-img-placeholder">
              [ Add image: architecture diagram or comparison of both model variants ]
            </div>
            <p className="art-caption">
              [ Caption — e.g. "Cross-attention conditioning vs. simplified class-conditioning" ]
            </p> */}
          </div>

          {/* 3.3 Results */}
          <div className="art-subsection">
            <h3 className="art-subsection-title">
              <BsBarChart /> Results and Takeaways
            </h3>
            <div className="art-body">
              <p>{resultsPara1}</p>
              <p>{resultsPara2}</p>
            </div>
            <img
              src={resultImg}
              alt="Generated retinal images across diabetic retinopathy stages"
              className="art-img-full"
            />
            <p className="art-caption">
              [ Generated examples across five diabetic retinopathy stages ]
            </p>
          </div>
        </section>

        <div className="art-divider" />

        {/* ── SECTION 4: WHY IT IS IMPORTANT ──────────────────────────────── */}
        <section className="art-section">
          <div className="art-section-label">
            <span className="art-section-number">03</span>
            <h2 className="art-section-title">Why It Is Important</h2>
          </div>
          <div className="art-body">
            <p>{significanceText}</p>
            <p>
              From a portfolio perspective, this project sits at the intersection of
              applied machine learning, healthcare, experimentation, and engineering judgment.
              It is not just about training a model — it is about comparing architectures,
              identifying failure modes, interpreting imperfect metrics, and designing a system
              that remains useful under real-world constraints such as data scarcity and class imbalance.
            </p>
          </div>
        </section>

        <div className="art-divider" />

        {/* ── SECTION 5: SKILLS USED ──────────────────────────────────────── */}
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

export default DiabeticRetinopathyDiffusion;