import React, { Fragment } from "react";
// Reactstrap
import { Col, Row } from "reactstrap";
// CSS Files for developers
import "./ManuDictionary.css";

const ManuDictionary = ({ manufactures }) => {
  
  const prepareGroupingData = () => {
    let data = manufactures.reduce((r, e) => {
      let group = e.manuName[0];
      if (!r[group]) r[group] = { group, children: [e] };
      else r[group].children.push(e);
      return r;
    }, {});
    let result = Object.values(data);

    return result;
  };

  let data = manufactures?.length > 0 && prepareGroupingData();

  return (
    <Fragment>
      <Row>
        {manufactures?.length
          ? data?.map((elem, index) => (
              <Col xs={6} sm={6} md={3} key={index}>
                <div className="box-wrapper">
                  <div>
                    <div className="box-wrap">{elem.group}</div>
                  </div>
                  <div className="box-avto">
                    <div>
                      {elem.children.map((item, index) => (
                        <p className="box-avto-name" key={index}>
                          {item.manuName}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
            ))
          : null}
      </Row>
    </Fragment>
  );
};

export default ManuDictionary;
