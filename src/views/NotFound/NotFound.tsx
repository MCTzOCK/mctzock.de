/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */
import { Button } from "react-bulma-components";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_trimmed.png";
import * as React from "react";

export default function NotFound() {
  return (
    <>
      <div className={"header"}>
        <div className="header-left">
          <h1 className="title has-text-danger">
            Oops, this page was not found
          </h1>
          <h1 className="header-subtitle">
            We could not find the page you were looking for. Try going{" "}
            <Link to="/">Home</Link>
          </h1>
        </div>
        <div className="header-right" style={{ textAlign: "center" }}>
          <h1
            className={"title"}
            style={{
              fontFamily: "monospace",
              fontSize: "8rem",
            }}
          >
            404
          </h1>
          <h1 className={"subtitle"}>Not Found</h1>
        </div>
      </div>
    </>
  );
}
