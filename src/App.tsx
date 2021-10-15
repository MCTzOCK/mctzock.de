/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./views/Home/Home";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <NavigationBar />
      <Router>
        <Switch>
          <Route path={"/"}>
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}
