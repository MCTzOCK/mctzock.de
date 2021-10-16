/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_trimmed.png";

export default function Header() {
  return (
    <>
      <div className={"header"}>
        <div className="header-left">
          <h1 className="title">
            <span>👋</span>&nbsp;Hey, I'm Ben Siebert.
          </h1>
          <h1 className="header-subtitle">
            I'm a&nbsp;
            <Link to={"/fullstack-developer"}>Full Stack Developer</Link>,&nbsp;
            <Link to={"/devops-engineer"}>DevOps Engineer</Link>
            &nbsp; and&nbsp;
            <Link to={"/open-source-maintainer"}>open source maintainer</Link>.
            You can take a look at my <Link to={"/projects"}>projects</Link>
            &nbsp; or&nbsp;
            <Link to={"/hire"}>hire</Link>
            &nbsp;me for your own projects!
          </h1>
        </div>
        <div className="header-right" style={{ textAlign: "center" }}>
          <img src={logo} alt={"MCTzOCK"} />
        </div>
      </div>
    </>
  );
}
