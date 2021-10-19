/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import devops from "../../assets/devops.png";
import RHeader from "../../components/RHeader/RHeader";

export default function DevOpsEngineer() {
  return (
    <>
      <RHeader title={"DevOps Engineer"} image={devops} imageAlt={"DevOps"}>
        As a DevOps Engineer I love automating the processes of Development. I
        create powerful workflows and Pipelines. I've worked with GitHub
        Actions, Jenkins, TravisCI and more!
      </RHeader>
    </>
  );
}
