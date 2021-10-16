/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import github from "../../assets/github.png";

export default function OpenSourceMaintainer() {
  return (
    <>
      <div className={"header"}>
        <div className="header-left">
          <h1 className="title">Open Source Maintainer</h1>
          <h1 className="header-subtitle">
            As an Open Source Maintainer I love creating open source projects. I
            maintain over 100 Open Source Projects.
          </h1>
        </div>
        <div className="header-right" style={{ textAlign: "center" }}>
          <img src={github} alt={"DevOps"} />
        </div>
      </div>
    </>
  );
}
