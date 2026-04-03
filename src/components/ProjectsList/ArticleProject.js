import React from "react";
import { Col, Row } from "react-bootstrap";
import projectMainImage from "../../Assets/Projects/AutomaticGreenhouse/GreenHouseSection1Img.png";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


function ArticleProject(props) {
  return (
    <Row style={{ justifyContent: "center", padding: "10px" }}>
      {/* <Col
        md={5}
        style={{ paddingTop: "120px", paddingBottom: "50px" }}
        className="about-img"
      >
        <img src={projectMainImage} alt="about" className="img-fluid" />
      </Col> */}
    <Col
      md={12}
      style={{
        justifyContent: "center",
        paddingTop: "30px",
        paddingBottom: "50px",
      }}
    >
      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
        Know Who <strong className="purple">I'M</strong>
      </h1>

        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Apart from coding, some other activities that I love to do!
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis scelerisque semper. Mauris vitae feugiat lacus. Quisque in mi vel sem suscipit commodo ac pellentesque massa. Curabitur consequat vehicula enim et dictum. Phasellus aliquam imperdiet mi ut laoreet. Ut suscipit tortor ut sapien condimentum, ut tristique felis accumsan. Fusce lobortis, elit et faucibus mattis, eros risus bibendum sem, eget tempus justo urna eu augue. Aliquam a suscipit sapien. Pellentesque consectetur volutpat dui ut tincidunt. Nullam a nisi a sem finibus elementum in et magna. Donec eget enim ut tortor euismod interdum. Etiam vehicula augue ac scelerisque lacinia. Sed porttitor lacus mi, nec varius velit tincidunt placerat. Sed nulla ligula, tempus non blandit a, fermentum eget purus.

In maximus sapien sed malesuada rutrum. Etiam quis est neque. Integer ut ligula ut elit tristique mollis. Nunc vitae odio eu ex aliquet tempor sit amet non urna. Nunc vel lobortis ipsum. Pellentesque rutrum est tellus, at lacinia est porttitor sed. Etiam hendrerit neque at augue porta, ac scelerisque nibh lobortis. Integer posuere ornare eros, at finibus erat accumsan at. Sed in dignissim augue. In fringilla euismod efficitur.

Maecenas nulla sem, malesuada at blandit eu, rutrum pharetra leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id fringilla augue. Nulla arcu odio, semper faucibus ligula non, consectetur dapibus diam. Aenean bibendum risus ac orci porttitor scelerisque. Fusce condimentum arcu a justo accumsan tempor. Pellentesque a imperdiet felis, vitae rhoncus turpis. Integer non purus varius, commodo mauris accumsan, volutpat quam. Donec convallis lacinia nisl et tincidunt. Etiam et augue magna. Cras volutpat varius lectus, id viverra velit pulvinar eu. Nam mattis leo a felis accumsan tempor.
          </p>
        </blockquote>
    </Col>
  </Row>
  );
}

export default ArticleProject;
