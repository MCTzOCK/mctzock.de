/*
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import logo from "../../assets/logo_trimmed.png";
import * as React from "react";
import RHeader from "../../components/RHeader/RHeader";

export default function FullstackDeveloper() {
  return (
    <>
      <RHeader
        title={"Fullstack Developer"}
        image={logo}
        imageAlt={"FullstackDeveloper Developer"}
      >
        As a Fullstack Developer I work on the frontend and the backend! I
        create beautiful designs and powerful backend services.
      </RHeader>
    </>
  );
}
