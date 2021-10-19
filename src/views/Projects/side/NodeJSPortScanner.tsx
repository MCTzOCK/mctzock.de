/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import node from "../../../assets/node.svg";
import RHeader, { RProps } from "../../../components/RHeader/RHeader";

export default function NodeJSPortScanner(props: RProps) {
  return (
    <>
      <RHeader
        title={"nodejs-port-scanner"}
        image={node}
        imageAlt={"nodejs"}
        noAnimation={props.animation}
      >
        nodejs-port-scanner is a npm package that allows you to scan for open
        ports on a specific host.
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
      </RHeader>
    </>
  );
}
