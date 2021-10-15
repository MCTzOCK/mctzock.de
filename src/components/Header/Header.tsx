/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import "./Header.scss";
import { BrowserRouter, Link } from "react-router-dom";
import logo from "../../assets/logo_trimmed.png";

export default function Header() {
  return (
    <>
      <BrowserRouter>
        <div className={"header"}>
          <div className="header-left">
            <h1 className="title">
              <span>👋</span>Hey, I'm Ben Siebert.
            </h1>
            <h1 className="header-subtitle">
              I'm a&nbsp;
              <Link to={"/fullstack-developer"}>Full Stack Developer</Link>
              &nbsp; and&nbsp;
              <Link to={"/open-source-maintainer"}>open source maintainer</Link>
              . You can take a look at my projects or&nbsp;
              <Link to={"/hire"}>hire</Link>
              &nbsp;me for your own <Link to={"/projects"}>projects</Link>!
            </h1>
          </div>
          <div className="header-right" style={{ textAlign: "center" }}>
            <img src={logo} alt={"MCTzOCK"} />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
