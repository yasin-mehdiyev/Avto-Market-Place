import React, { useLayoutEffect, useState } from "react";
// React Routing Hooks
import { useHistory } from "react-router";
// Additional Library React-Spinner-Loading Yarn Package
import Loader from "react-loader-spinner";
// Reactstrap
import { Col, Container, Row } from "reactstrap";
// Material Uİ
import { makeStyles } from "@material-ui/core/styles";
// React İcons Library
import {
  AiOutlineArrowLeft,
  AiOutlineShoppingCart,
  AiOutlineTwitter,
} from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
// Custom Utility Function is related to react routing
import { routingUrl } from "../../utilities/routingUrl";
// HTTP Services
import { GetEylecSystemByCatalogType } from "../../services/Catalogs";
// Additional Library react-responsive-modal yarn package
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
// Additional Library react-paginate yarn package
import ReactPaginate from "react-paginate";
// Local İmages includes for project
import logo from "../../utilities/assets/image/car.png";
import phone from "../../utilities/assets/image/store.png";
import cube from "../../utilities/assets/image/cube.png";
import clock from "../../utilities/assets/image/clock.png";
import envelope from "../../utilities/assets/image/envelope.png";
import location from "../../utilities/assets/image/location.png";
import phoneCall from "../../utilities/assets/image/phoneCall.png";
// React Spinner Loading CSS File
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// Custom CSS Files
import "../CatalogProducts/CatalogProduct.css";
import "./CatalogProduct.css";
import "../Catalogs/Catalog.css";
import "../Root/Root.css";
import "../../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    padding: "30px",
  },
}));

const CatalogProduct = () => {
  const classes = useStyles();
  let history = useHistory();
  const [productDetails, setProductDetails] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 4,
    skip: 0,
  });
  const [modalState, setModalState] = useState(false);
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    (async function GetProductDetails() {
      try {
        setLoading(true);
        let resp = await GetEylecSystemByCatalogType("b-class");
        setProductDetails(resp);
      } catch (error) {
        console.log("error: ", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const closeModal = () => {
    setModalState(false);
  };

  const openModal = () => {
    setModalState(true);
  };

  const changePage = ({ selected }) => {
    setPagination({ ...pagination, limit: pagination?.limit, skip: selected });
  };

  const handleClickInfo = (operationState) => {
    alert(`Selected operation is ${operationState}. But There must be a quantity field on the backend to change the price of the product when the quantity changes. I didn't do this part because I wasn't given the quantity field in the current api.
    `);
  };

  const pagesVisited = pagination?.skip * pagination?.limit;

  return (
    <div className="common-section">
      <Container>
        <Row>
          {loading ? (
            <> <Loader type="Circles" color="#00BFFF" height={80} width={80} timeout={5000}/> </>
          ) : (
            <div className={classes.root}>
              <Row>
                <Col sm={12}>
                  <div className="auto-logo-wrapper">
                    <div className="auto-logo">
                      <img src={logo} alt="#logo" className="img-fluid" />
                    </div>
                    <div className="auto-content">
                      <h3 style={{ fontWeight: "bold" }}>
                        Mercedes-Benz / B-class
                      </h3>
                      <p style={{ color: "#333" }}>Əyləc sistemi</p>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col sm={12}>
                  <div className="custom-divider">
                    <AiOutlineArrowLeft size={25} />
                    <span
                      onClick={() =>
                        routingUrl(history.replace("/catalogs/model/all"))
                      }
                    >
                      Geri qayıt
                    </span>
                  </div>
                </Col>
              </Row>

              <Row className="mt-4">
                {productDetails?.data?.length
                  ? productDetails?.data
                      ?.slice(pagesVisited, pagesVisited + pagination?.limit)
                      .map((product, index) => (
                        <Col sm={12} className="mb-2" key={index}>
                          <div className="productWrapper">
                            <ul>
                              <li>
                                <span
                                  style={{
                                    color: "#4DA6FF",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {product?.description}
                                </span>
                              </li>
                              <li>
                                <h5 style={{ color: "#4DA6FF" }}>Kod</h5>{" "}
                                <span>{product?.part_number}</span>
                              </li>
                              <li>
                                <h5 style={{ color: "#4DA6FF" }}>Qiymət</h5>{" "}
                                <span>
                                  {" "}
                                  {product?.price?.price}{" "}
                                  {product?.price?.currency}
                                </span>
                              </li>
                              <li>
                                <div className="count">
                                  <div
                                    className="count-decrement"
                                    onClick={() => handleClickInfo("-")}
                                  >
                                    -
                                  </div>
                                  <div className="count-text">1</div>
                                  <div
                                    className="count-increment"
                                    onClick={() => handleClickInfo("+")}
                                  >
                                    +
                                  </div>
                                </div>
                              </li>
                              <li>
                                <button
                                  className="custom-btn-view-customer"
                                  onClick={openModal}
                                >
                                  Satıcını göstər
                                </button>
                              </li>
                              <li>
                                <a href="#" className="shopping-cart">
                                  <AiOutlineShoppingCart />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </Col>
                      ))
                  : null}
              </Row>

              <Row className="mt-3">
                <Col sm={12}>
                  <ReactPaginate
                    previousLabel={"Əvvəl"}
                    nextLabel={"Sonra"}
                    pageCount={Math.ceil(
                      productDetails?.data?.length / pagination?.limit
                    )}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                  />
                </Col>
              </Row>
            </div>
          )}
        </Row>
      </Container>

      <div>
        <Modal
          open={modalState}
          onClose={closeModal}
          className="react-responsive-modal-modal"
        >
          <Row>
            <Col xs={12} sm={6} md={4}>
              <div className="header-logo">
                <div className="logo-wrap">
                  <img src={phone} alt="#" />
                </div>
                <div className="logo-content">
                  <div style={{ paddingLeft: "15px" }}>
                    <h5>Mağazanın adı</h5>
                    <p>Maecenas eu lectus a Leo viverra hendrerit id a enim.</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} md={3} className="d-flex align-items-center">
              <div className="product-count">
                <div className="logo-wrap">
                  <img src={cube} alt="#" className="img-fluid" />
                </div>
                <div className="logo-content">
                  <div style={{ paddingLeft: "8px" }}>
                    <h5>Məhsul sayı</h5> <p>4397</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} md={3} className="d-flex align-items-center mb-3">
              <div className="work-hours">
                <div className="logo-wrap">
                  <img src={clock} alt="#" />
                </div>
                <div className="logo-content">
                  <div style={{ paddingLeft: "8px" }}>
                    <h5>Bazarertəsi - Şənbə</h5> <p>09:00-18:00</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} md={2} className="d-flex align-items-md-center">
              <div className="added-bucket">
                <button className="btn btn-success">Səbətə əlavə et</button>
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={12}>
              <div className="modal-body">
                <h5>Mağaza haqqında</h5>
                <p>
                  Maecenas eu lectus a Leo viverra hendrerit id a enim.
                  Vestibulum sed tincidunt lectus. Integer sit amet accumsan
                  lacus, non luctus velit. Vivamus ut leo egestas, pharetra
                  risus sed, fermentum lorem. Donec fringilla placerat tortor,
                  et vehicula tellus gravida vitae. Sed dignissim, mi congue
                  ultrices egestas, est est consectetur lectus, fermentum
                  tristique dolor metus non lectus. Praesent in diam
                  pellentesque, tempus mauris a, congue neque.
                </p>
                <p>
                  Maecenas eu lectus a Leo viverra hendrerit id a enim.
                  Vestibulum sed tincidunt lectus. Integer sit amet accumsan
                  lacus, non luctus velit. Vivamus ut leo egestas, pharetra
                  risus sed, fermentum lorem. Donec fringilla placerat tortor,
                  et vehicula tellus gravida vitae. Sed dignissim, mi congue
                  ultrices egestas.Donec fringilla placerat tortor, et vehicula
                  tellus gravida vitae. Sed dignissim, mi congue ultrices
                  egestas, est est consectetur lectus, fermentum tristique dolor
                  metus non lectus. Praesent in diam pellentesque, tempus mauris
                  a, congue neq.
                </p>
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={12} sm={6} md={3} className="d-flex justify-content-center justify-content-md-start mb-3">
              <div className="product-count">
                <div className="logo-wrap">
                  <img src={phoneCall} alt="#" className="img-fluid" />
                </div>
                <div className="logo-content">
                  <div style={{ paddingLeft: "5px" }}>
                    <ul
                      style={{ listStyle: "none", margin: "0", padding: "0" }}
                    >
                      <li>+994 55 123 45 67</li>
                      <li>+994 50 123 45 67</li>
                      <li>+994 12 123 45 67</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} sm={6} md={3} className="d-flex justify-content-center justify-content-md-start mb-3">
              <div className="product-count">
                <div className="logo-wrap">
                  <img src={envelope} alt="#" className="img-fluid" />
                </div>
                <div className="logo-content">
                  <div style={{ paddingLeft: "5px" }}>
                    <ul
                      style={{ listStyle: "none", margin: "0", padding: "0" }}
                    >
                      <li>info@website.com</li>
                      <li>info@website.com</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} sm={6} md={3} className="d-flex justify-content-center justify-content-md-start mb-3">
              <div className="product-count">
                <div className="logo-wrap">
                  <img src={location} alt="#" className="img-fluid" />
                </div>
                <div className="logo-content">
                  <div style={{ paddingLeft: "5px" }}>
                    <ul
                      style={{ listStyle: "none", margin: "0", padding: "0" }}
                    >
                      <li>123 Street Name,</li>
                      <li>Baku, Azerbaijan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>

            <Col
              xs={12} 
              sm={6}
              md={3}
              className="d-flex justify-content-center justify-content-md-start align-items-center mb-3"
            >
              <div className="footer-socials">
                <ul className="footer-social-menu">
                  <li>
                    <a href="#">
                      <AiOutlineTwitter size={20} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <ImFacebook size={20} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedinIn size={20} />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Modal>
      </div>
    </div>
  );
};

export default CatalogProduct;
