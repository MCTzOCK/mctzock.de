/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import enigma from "../../assets/enigma.png";
import * as React from "react";
import logo from "../../assets/logo_trimmed.png";

export default function Projects() {
  return (
    <>
      <div className={"header"}>
        <div className="header-left">
          <h1 className="title">Projects</h1>
          <h1 className="header-subtitle">
            As a Developer I've worked on many projects. You can download some
            of my projects and some other can be viewed in the web.
          </h1>
        </div>
        <div className="header-right" style={{ textAlign: "center" }}>
          <img src={logo} alt={"DevOps"} />
        </div>
      </div>
      <div className={"projects"}>
        <div className={"project"}></div>
      </div>
    </>
  );
}
