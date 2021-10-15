/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import "./NavigationBar.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Navbar } from "react-bulma-components";

export default function Home() {
  return (
    <Router>
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item renderAs={Link} to={"/"}>
            <h1 className={"web_logo_name"}>MCTzOCK</h1>
          </Navbar.Item>
          <Navbar.Burger
            aria-label={"menu"}
            aria-expanded={"false"}
            data-target={"nav-bar-menu"}
          >
            <span aria-hidden={"true"} />
            <span aria-hidden={"true"} />
            <span aria-hidden={"true"} />
          </Navbar.Burger>
        </Navbar.Brand>
        <Navbar.Menu id={"nav-bar-menu"}>
          <div className={"navbar-start"}>
            <Navbar.Item renderAs={Link} to={"/"}>
              Home
            </Navbar.Item>
            <Navbar.Item renderAs={Link} to={"/about"}>
              About
            </Navbar.Item>
            <Navbar.Item renderAs={Link} to={"/hire"}>
              Hire me
            </Navbar.Item>
          </div>
        </Navbar.Menu>
      </Navbar>
    </Router>
  );
}
