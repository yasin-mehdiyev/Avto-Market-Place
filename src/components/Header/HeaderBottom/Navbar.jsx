import React from "react";
import { Container } from "reactstrap";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './Navbar.css';
// React Routing Hooks
import { useHistory } from "react-router";
// Utilities Method For Routing
import { routingUrl } from "../../../utilities/routingUrl";

const Navbar = () => {
  let history = useHistory();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Container>
          <a className="navbar-brand" style={{ cursor: 'pointer' }} onClick={()=>routingUrl(history.replace('/catalogs'))}>
            logo.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent1">
            <ul className="navbar-nav ml-auto font-bold">
              <li className="nav-item active">
                <a className="nav-link" style={{ cursor: 'pointer' }} onClick={()=>routingUrl(history.replace('/catalogs'))}>
                  Ana Səhifə
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Haqqımızda
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Əlaqə
                </a>
              </li>
              <li className="nav-item active d-flex align-items-center justify-content-center mb-2">
                <a className="btn btn-light custom-btn-light" href="#">
                  Giriş
                </a>
              </li>
              <li className="nav-item dropdown d-flex align-items-center justify-content-center mb-2">
                <div>
                    <a className="btn btn-primary custom-btn-other dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                      Usd
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">Usd</a>
                      <a className="dropdown-item" href="#">Azn</a>
                      <a className="dropdown-item" href="#">Euro</a>
                    </div>
                </div>
              </li>
              <li className="nav-item active d-flex align-items-center justify-content-center mb-2">
                <a className="btn btn-dark custom-btn-other p-relative" href="#">
                  <AiOutlineShoppingCart />
                  <span className="custom-badge">1</span>
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </div>
  );
};

export default Navbar;
