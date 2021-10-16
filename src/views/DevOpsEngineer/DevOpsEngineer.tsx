/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import devops from "../../assets/devops.png";

export default function DevOpsEngineer() {
  return (
    <>
      <div className={"header"}>
        <div className="header-left">
          <h1 className="title">DevOps Engineer</h1>
          <h1 className="header-subtitle">
            As a DevOps Engineer I love automating the processes of Development.
            I create powerful workflows and Pipelines. I've worked with GitHub
            Actions, Jenkins, TravisCI and more!
          </h1>
        </div>
        <div className="header-right" style={{ textAlign: "center" }}>
          <img src={devops} alt={"DevOps"} />
        </div>
      </div>
    </>
  );
}
