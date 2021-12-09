import React from "react";
import { Col, Container, Row } from "reactstrap";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import './FooterDown.css';

const FooterDown = () => {
  return (
    <div
      style={{ backgroundColor: "rgb(19 124 229 / 55%)", padding: "20px 0px" }}
    >
      <Container>
        <Row>
          <Col
            sm={12}
            md={12}
            lg={5}
            className="d-block text-center d-lg-flex justify-content-lg-between align-items-lg-center mb-3"
          >
            <div style={{color: '#fdfdfd'}}>(c) 2019 Company Name. All right reserved</div>
          </Col>
          <Col sm={12} md={12} lg={7}>
            <ul className="d-flex justify-content-center justify-content-lg-end  align-items-center socials">
              <li className="social-list">
                <a href="#" className="social-link">
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-list">
                <a href="#" className="social-link">
                  <ImFacebook />
                </a>
              </li>
              <li className="social-list">
                <a href="#" className="social-link">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterDown;
