/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import node from "../../../assets/node.svg";
import RHeader, { RProps } from "../../../components/RHeader/RHeader";
import { Button } from "react-bulma-components";

export default function InCodeURLShorter(props: RProps) {
  return (
    <>
      <RHeader
        title={"@incodelang/urlshorter"}
        image={node}
        imageAlt={"nodejs"}
        noAnimation={props.animation}
      >
        @incodelang/urlshorter is a npm package that allows you to create an URL
        Shorter.
        <div className={"buttons"}>
          <Button
            color={"link"}
            className={"mt-6"}
            onClick={() => {
              window.open("https://npmjs.com/@incodelang/urlshorter", "_blank");
            }}
          >
            View on NPM
          </Button>
          <Button
            color={"link"}
            className={"mt-6"}
            onClick={() => {
              window.open("https://github.com/InCodeDevs/URLShorter", "_blank");
            }}
          >
            Source Code
          </Button>
        </div>
      </RHeader>
    </>
  );
}
