/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import Routes from "./Routes";
import Sitemap from "./components/Sitemap/Sitemap";

export default function App() {
  return (
    <>
      <Router>
        <Route path={"/sitemap.xml"} component={Sitemap} />
        <Route path={"/"}>
          <NavigationBar />
          <Routes />
          <Footer />
        </Route>
      </Router>
    </>
  );
}
