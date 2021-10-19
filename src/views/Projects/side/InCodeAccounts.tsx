/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import node from "../../../assets/node.svg";
import RHeader, { RProps } from "../../../components/RHeader/RHeader";

export default function InCodeAccounts(props: RProps) {
  return (
    <>
      <RHeader
        title={"@incodelang/accounts"}
        image={node}
        imageAlt={"nodejs"}
        noAnimation={props.animation}
      >
        @incodelang/accounts is a npm package that allows you to easily
        integrate an account system in your application.
        <div className={"buttons"}>
          <Button
            color={"link"}
            className={"mt-6"}
            onClick={() => {
              window.open("https://npmjs.com/@incodelang/accounts", "_blank");
            }}
          >
            View on NPM
          </Button>
          <Button
            color={"link"}
            className={"mt-6"}
            onClick={() => {
              window.open("https://github.com/InCodeDevs/Accounts", "_blank");
            }}
          >
            Source Code
          </Button>
        </div>
      </RHeader>
    </>
  );
}
