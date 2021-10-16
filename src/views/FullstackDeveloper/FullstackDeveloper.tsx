/*
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import logo from "../../assets/logo_trimmed.png";
import * as React from "react";

export default function FullstackDeveloper() {
  return (
    <>
      <div className={"header"}>
        <div className="header-left">
          <h1 className="title">Fullstack Developer</h1>
          <h1 className="header-subtitle">
            As a Fullstack Developer I work on the frontend and the backend! I
            create beautiful designs and powerful backend services.
          </h1>
        </div>
        <div className="header-right" style={{ textAlign: "center" }}>
          <img src={logo} alt={"Fullstack Developer"} />
        </div>
      </div>
    </>
  );
}
