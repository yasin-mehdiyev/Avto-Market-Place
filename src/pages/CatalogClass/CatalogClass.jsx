import React, { useLayoutEffect, useState } from "react";
// React Redux Hooks
import { useSelector } from "react-redux";
// React Routing Hooks
import { useHistory } from "react-router";
// Additional Library React-Spinner-Loading Yarn Package
import Loader from "react-loader-spinner";
// React İcons yarn package
import { AiOutlineArrowLeft } from "react-icons/ai";
// Routing Utility Function for developer
import { routingUrl } from "../../utilities/routingUrl";
// HTTP Services
import { GetDetailsOfCatalogs } from "../../services/Catalogs";
// Reactstrap
import { Col, Container, Row } from "reactstrap";
// Local İmages
import maskCar from "../../utilities/assets/image/mask_car.png";
// React Spinner Loading CSS File
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// Using my Custom Hook 
import usePathname from "../../utilities/useLocation";
// Get Car Logo
import mercedes from '../../utilities/assets/cars/MERCEDES-BENZ.png';
// Custom CSS Files
import "../CatalogClass/CatalogClass.css";
import "../Catalogs/Catalog.css";
import "../../App.css";

const CatalogClass = () => {
  let history = useHistory();
  let path = usePathname(3);
  const { manuFactures, productCount } = useSelector(
    (state) => state.manufactures
  );
  const [catalogDetails, setCatalogDetails] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [loading, setLoading] = useState(false);

  if (isNaN(path)) {
    history.replace('/');
  }

  const getCategoryClassData = async () => {
    return await GetDetailsOfCatalogs("b-class");
  };

  const getCatalogClass = (isInitial) => {
    (async function getCatalogsOfClass() {
      try {
        setLoading(true);
        let response = await getCategoryClassData();
        console.log('resp', response)
        setSelectedBrand(response?.brand[response?.brand?.length - 1]);
        if (!isInitial) {
          setCatalogDetails(response?.kataloq);
          return;
        }
        setCatalogDetails(response?.kataloq.slice(0, 11));
      } catch (error) {
        console.log("error: ", error);
      } finally {
        setLoading(false);
      }
    })();
  };

  useLayoutEffect(() => {
    getCatalogClass(true);
  }, []);

  return (
    <div className="common-section">
      <>
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
                  <Col xs={12} md={7} className="d-block text-center">
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
                            onClick={() => getCatalogClass(false)}
                          >
                            Hamısına bax
                          </button>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>

              <div className="catalogs-class-wrapper">
                <Row>
                  <Col sm={12} md={4} className="d-block d-md-flex align-items-md-center">
                    <img
                      src={maskCar}
                      alt={`#${maskCar}`}
                      className="img-fluid"
                    />
                    <div className="text-white">
                      <h2 style={{ fontSize: "21px" }}>
                        {selectedBrand?.ModelName}
                      </h2>
                      <span>
                        Məhsul sayı: <b>22 000</b>
                      </span>
                    </div>
                  </Col>
                  <Col sm={12} md={7} className="d-flex justify-content-center justify-content-md-end mb-3">
                    <div
                      style={{
                        marginTop: "5%",
                        cursor: "pointer",
                        color: "#fff",
                        fontWeight: "bold",
                      }}
                      onClick={() => routingUrl(history.replace("/catalogs"))}
                    >
                      <AiOutlineArrowLeft
                        size={25}
                        color="white"
                        style={{ marginRight: "10px" }}
                      />
                      Geri qayıt
                    </div>
                  </Col>
                </Row>
              </div>

              <section className="common-section">
                <Container>
                  <Row>
                    <Col
                      xs={12}
                      md={4}
                      className="d-flex justify-content-center align-items-center mb-3"
                    >
                      <button
                        className="btn btn-outline-primary"
                        onClick={() =>
                          routingUrl(
                            history.push("/catalogs/model/all/products")
                          )
                        }
                      >
                        Əyləc Sisteminə baxış
                      </button>
                    </Col>

                    {catalogDetails?.map((item, index) => (
                      <Col
                        xs={12}
                        md={4}
                        key={index}
                        className="d-flex justify-content-center align-items-center mb-3"
                      >
                        <div>{item?.assemblyGroupName}</div>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </section>
            </section>
          </>
        )}
      </>
    </div>
  );
};

export default CatalogClass;
