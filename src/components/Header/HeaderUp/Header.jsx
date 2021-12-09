import React from "react";
import { Container } from "reactstrap";
import './Header.css';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: 'rgb(19 124 229 / 55%)'}}>
        <Container className="d-flex justify-content-center d-lg-block">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-sm-center justify-content-lg-end" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Mağazanı yarat</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Necə işləyir?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">FAQ</a>
              </li>
              <li className="nav-item dropdown d-flex align-items-center justify-content-center">
                <div>
                    <a className="btn btn-danger custom-btn dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                      En
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">En</a>
                      <a className="dropdown-item" href="#">Az</a>
                      <a className="dropdown-item" href="#">Ru</a>
                    </div>
                </div>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </div>
  );
};

export default Header;
