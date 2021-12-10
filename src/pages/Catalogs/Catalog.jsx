import React, { useLayoutEffect, useState } from "react";
// React Redux Hooks
import { useDispatch, useSelector } from "react-redux";
// React Routing Hooks
import { useHistory } from "react-router";
// Additional Library React-Spinner-Loading Yarn Package
import Loader from "react-loader-spinner";
// Reactstrap
import { Col, Container, Row } from "reactstrap";
// React İcons Library
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// Fetching Slices
import { setProductCounter } from "../../redux/features/Manufacture/ManuSlice";
// HTTP Services
import { GetCatalogs } from "../../services/Catalogs";
// Custom Routing utilitied method
import { routingUrl } from "../../utilities/routingUrl";
// React Spinner Loading CSS File
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// Using my Custom Hook 
import usePathname from "../../utilities/useLocation";
// Get Car Logo
import mercedes from '../../utilities/assets/cars/MERCEDES-BENZ.png';
// Custom CSS Styles Files
import "./Catalog.css";
import "../../App.css";

const Catalog = () => {
  let path = usePathname(2).toString();
  let history = useHistory();
  const dispatch = useDispatch();
  const { manuFactures } = useSelector((state) => state.manufactures);
  const [catalogs, setCatalogs] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [loading, setLoading] = useState(false);

  let checkIsExistWrittenParam = manuFactures?.filter(e=>e.manuId == path);
  if (checkIsExistWrittenParam.length === 0) {
    history.replace('/');
  }

  const getCategoryData = async () => {
    return await GetCatalogs("74");
  };

  const getCatalogs = (isInitial) => {
    (async function getManufactures() {
      try {
        setLoading(true);
        let response = await getCategoryData();
        setProductCount(response.length);
        dispatch(setProductCounter(response.length));
        if (!isInitial) {
          setCatalogs(response);
          return;
        }
        setCatalogs(response.slice(0, 12));
      } catch (error) {
        console.log("error: ", error);
      } finally {
        setLoading(false);
      }
    })();
  };

  const handleLoadedCatalogs = () => {
    if (catalogs.length > 12) {
      return;
    }
    getCatalogs();
  };

  useLayoutEffect(() => {
    getCatalogs(true);
  }, []);

  return (
    <div className="common-section">
      <Container>
        <Row>
          {loading ? (
            <>
              {" "}
              <Loader
                type="Circles"
                color="#00BFFF"
                height={80}
                width={80}
                timeout={5000}
              />{" "}
            </>
          ) : (
            <>
              <section className="catalog-wrapper">
                <Container>
                  <Row>
                    <Col
                      xs={12}
                      md={5}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <div className="catalog-brand">
                        <img
                          src={mercedes}
                          className="img-fluid"
                          alt="#mercedes"
                        />
                        <h3>Mercedes-Benz</h3>
                      </div>
                    </Col>
                    <Col
                      xs={12}
                      md={7}
                      className="d-block text-center"
                    >
                      <div>
                        <div className="general-info">Ümumi məlumat</div>
                        <div className="d-block d-md-flex catalog-list">
                          <div>
                            <div className="catalog-list-item">
                              <span>
                                Ümumi məhsul sayı:{" "}
                                <b>{manuFactures.length * productCount}</b>
                              </span>
                            </div>
                            <div className="catalog-list-item">
                              <span>
                                Bu ay yükələn məhsul: <b>500</b>
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="catalog-list-item">
                              <span>
                                Model sayı: <b>{manuFactures.length}</b>
                              </span>
                            </div>
                            <div className="catalog-list-item">
                              <span>
                                Məhsul kateqoriyası: <b>{productCount}</b>
                              </span>
                            </div>
                          </div>
                          <div className="catalog-list-item">
                            <button
                              className="btn btn-danger custom-danger"
                              onClick={handleLoadedCatalogs}
                            >
                              Hamısına bax
                            </button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row className="mt-4">
                    <Col sm={12}>
                      <div className="custom-divider">
                        <AiOutlineArrowLeft size={25} />
                        <span
                          onClick={() =>
                            routingUrl(history.replace("/catalogs"))
                          }
                        >
                          Geri qayıt
                        </span>
                      </div>
                    </Col>
                  </Row>

                  <Row className="mt-4">
                    {catalogs.map((catalog, index) => (
                      <Col xs={12} md={4} lg={3} key={index}>
                        <div
                          className="catalog-class-wrapper"
                          onClick={() =>
                            routingUrl(
                              history.replace(
                                `/catalogs/model/${catalog.modId}`
                              )
                            )
                          }
                        >
                          <div className="cat-class-header">
                            <div className="cat-class-name">
                              {catalog.ModelName}
                            </div>
                            <div className="cat-class-icon">
                              <AiOutlineArrowRight size={28} />
                            </div>
                          </div>
                          <div className="cat-class-footer">
                            <span>
                              Məhsul sayı: <b>{productCount}</b>
                            </span>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </section>
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Catalog;
