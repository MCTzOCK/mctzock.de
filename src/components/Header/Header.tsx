/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import "./Header.scss";
import { Button } from "react-bulma-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className={"header"}>
        <div className={"header-content"}>
          <h1 className={"header-title"}>MCTzOCK</h1>
          <Button renderAs={Link} to={"/hire"} color={"link"}>
            Hire me
          </Button>
        </div>
      </div>
    </>
  );
}
