/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import { Link } from "react-router-dom";
import node from "../../../assets/node.svg";

export default function NodeJSPortScanner() {
  return (
    <>
      <div className={"header"}>
        <div className="header-left">
          <h1 className="title">nodejs-port-scanner</h1>
          <h1 className="header-subtitle">
            nodejs-port-scanner is a npm package that allows you to scan for
            open ports on a specific host.
          </h1>
          <div className={"buttons"}>
            <Button
              color={"link"}
              className={"mt-6"}
              onClick={() => {
                window.open("https://npmjs.com/nodejs-port-scanner", "_blank");
              }}
            >
              View on NPM
            </Button>
            <Button
              color={"link"}
              className={"mt-6"}
              onClick={() => {
                window.open(
                  "https://github.com/MCTzOCK/nodejs-port-scanner",
                  "_blank"
                );
              }}
            >
              Source Code
            </Button>
          </div>
        </div>
        <div className="header-right" style={{ textAlign: "center" }}>
          <img src={node} alt={"node-js"} width={512} height={256} />
        </div>
      </div>
    </>
  );
}
