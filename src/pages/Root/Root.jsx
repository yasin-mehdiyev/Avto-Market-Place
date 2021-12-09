import React, { useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
// Additional Library React-Spinner-Loading Yarn Package
import Loader from "react-loader-spinner";
// Components
import ManuLogo from "../../components/Manufacture/ManuLogo/ManuLogo";
import ManuDictionary from "../../components/Manufacture/ManuDictionary/ManuDictionary";
import TabPanel from "../../components/TabPanel/TabPanel";
// Reactstrap
import { Col, Container, Row } from "reactstrap";
// Material Uİ
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// HTTP Services
import { GetManufactures } from "../../services/Manufactures";
// Fething Redux Toolkit Action
import { fetchManufactures } from "../../redux/features/Manufacture/ManuAction";
// Local İmages
import logo from "../../utilities/assets/image/catalog.png";
// React Spinner Loading CSS File
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// Custom CSS Files
import "./Root.css";
import "../../App.css";

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const Root = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [manufactures, setManufactures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  useLayoutEffect(() => {
    (async function getManufactures() {
      try {
        setLoading(true);
        let response = await GetManufactures();
        setManufactures(response);
        dispatch(fetchManufactures());
      } catch (error) {
        console.log("error: ", error);
      } finally {
        setLoading(false);
      }
    })();
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
              <div className={classes.root}>
                <Col sm={12}>
                  <div className="auto-logo-wrapper">
                    <div className="auto-logo">
                      <img src={logo} alt="#logo" className="img-fluid" />
                    </div>
                    <div className="auto-content">
                      <h3>Avtomobil kataloqu</h3>
                      <p>
                        Maecenas eu lectus a Leo viverra hendrerit id a <br />{" "}
                        enim.{" "}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col sm={12}>
                  <AppBar
                    position="static"
                    color="default"
                    style={{ backgroundColor: "#fff" }}
                  >
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      indicatorColor="primary"
                      textColor="primary"
                      variant="scrollable"
                      scrollButtons="auto"
                      aria-label="scrollable auto tabs example"
                    >
                      <Tab label="Əlifbaya uyğun" {...a11yProps(0)} />
                      <Tab label="Loqolara uyğun" {...a11yProps(1)} />
                    </Tabs>
                  </AppBar>
                  <TabPanel value={value} index={0}>
                    <ManuDictionary manufactures={manufactures} />
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <ManuLogo manufactures={manufactures} />
                  </TabPanel>
                </Col>
              </div>
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Root;
