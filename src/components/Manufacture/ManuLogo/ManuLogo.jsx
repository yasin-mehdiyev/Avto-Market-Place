import React, { Fragment } from "react";
// React Routing Hooks
import { useHistory } from "react-router-dom";
// Reactstrap
import { Col, Row } from "reactstrap";
// My utility function for helpers to other developers
import { routingUrl } from "../../../utilities/routingUrl";
// Custom CSS Files
import "./ManuLogo.css";

const ManuLogo = ({ manufactures }) => {
  const history = useHistory();

  return (
    <Fragment>
      <Row>
        {manufactures?.length
          ? manufactures?.map((item, index) => (
              <Col xs={6} sm={6} md={2} key={index} className="mb-3">
                <div
                  className="logo-box"
                  onClick={() => routingUrl(history.replace(`/catalogs/${item.manuId}`))}
                >
                  <div className="logo-box-header">
                    <img
                      src={item.url}
                      className="img-fluid"
                      alt={`#${item.manuName}`}
                    />
                  </div>
                  <div className="logo-box-name">
                    <span>{item.manuName}</span>
                  </div>
                </div>
              </Col>
            ))
          : null}
      </Row>
    </Fragment>
  );
};

export default ManuLogo;
