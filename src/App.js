import React, { Suspense, lazy, Fragment } from "react";
// React Routing Dom Library
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// Additional Library React-Spinner-Loading Yarn Package
import Loader from "react-loader-spinner";
// Components
import Header from "./components/Header/HeaderUp/Header";
import Navbar from "./components/Header/HeaderBottom/Navbar";
import Search from "./components/Search/Search";
import FooterUp from "./components/Footer/FooterUp/FooterUp";
import FooterDown from "./components/Footer/FooterDown/FooterDown";
// Root Page
import Root from "./pages/Root/Root";
// React Spinner Loading CSS File
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// Custom App Style File
import "./App.css";
// Dynamic İmports(Code Splittings)
const Catalogs = lazy(() => import("./pages/Catalogs/Catalog"));
const CatalogClass = lazy(() => import("./pages/CatalogClass/CatalogClass"));
const CatalogProducts = lazy(() => import("./pages/CatalogProducts/CatalogProduct"));

const App = () => {

  return (
    <Router>
      <Fragment>
        <div className="bg-color-4DA6FF">
          <Header />
          <hr className="custom-hr" />
          <Navbar />
          <hr className="custom-hr" />
          <Search />

          

          <Suspense fallback={<> <Loader type="Circles" color="#00BFFF" height={80} width={80} timeout={5000}/> </>}>
            <Switch>
                <Route path="/catalogs" exact component={Root} />
                <Route path="/catalogs/:id" exact component={Catalogs} />
                <Route path="/catalogs/model/:id" exact component={CatalogClass} />
                <Route path="/catalogs/model/all/products" exact component={CatalogProducts} />
                <Redirect to="/catalogs" />
            </Switch>
          </Suspense>

          <FooterUp />
          <FooterDown />
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
