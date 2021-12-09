import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import './FooterUp.css';
// React Routing Hooks
import { useHistory } from "react-router";
// Utilities Method For Routing
import { routingUrl } from "../../../utilities/routingUrl";

const FooterUp = () => {
    let history = useHistory();

    return (
        <div style={{padding: '30px 0px'}}>
            <Container>
                <Row>
                    <Col sm={12} md={2} lg={1} className="d-flex justify-content-center align-items-center">
                        <a className="navbar-brand" style={{ cursor: 'pointer' }} onClick={()=>routingUrl(history.replace('/catalogs'))}>
                            logo.
                        </a>
                    </Col>
                    <Col sm={12} md={4} lg={6} className="d-flex align-items-center" style={{justifyContent: 'space-evenly'}}>
                        <div className="contact-us">
                            <div><a style={{ cursor: 'pointer', color: '#fff' }} onClick={()=>routingUrl(history.replace('/catalogs'))}>Ana Səhifə</a></div>
                            <div><a href="#">Haqqımızda</a></div>
                        </div>
                        <div className="contact-us">
                            <div><a href="#">Kataloq</a></div>
                            <div><a href="#">Qeydiyyat</a></div>
                        </div>
                        <div className="contact-us">
                            <div><a href="#">Tariflər</a></div>
                            <div><a href="#">Əlaqə</a></div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={5} className="text-mobile-center text-large-left">
                        <div className="subscribtion">
                            <h4 className="subscribtion-title">Yeniliklərə abunə ol!</h4>
                            <p className="subscribtion-desc">Saytımızda olan yeniliklərdən daim xəbərdar olmaq üçün abunə ola bilərsiniz</p>
                            <div className="d-flex justify-content-center align-items-center">
                                <input type="email" placeholder="E-poçt addresi" className="subscribtion-email" />
                                <a className="btn btn-primary subscribtion-btn" href="#">
                                    Abunə ol
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FooterUp
