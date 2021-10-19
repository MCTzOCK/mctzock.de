/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import { Link } from "react-router-dom";
import node from "../../../assets/node.svg";
import RHeader, { RProps } from "../../../components/RHeader/RHeader";

export default function InCodeAccountsClient(props: RProps) {
  return (
    <>
      <RHeader
        title={"@incodelang/accounts-client"}
        image={node}
        imageAlt={"nodejs"}
        noAnimation={props.animation}
      >
        @incodelang/accounts-client is the web client for my npm package&nbsp;
        <Link to={"/projects/incode-accounts"}>@incodelang/accounts</Link>
        <div className={"buttons"}>
          <Button
            color={"link"}
            className={"mt-6"}
            onClick={() => {
              window.open(
                "https://npmjs.com/@incodelang/accounts-client",
                "_blank"
              );
            }}
          >
            View on NPM
          </Button>
          <Button
            color={"link"}
            className={"mt-6"}
            onClick={() => {
              window.open(
                "https://github.com/InCodeDevs/Accounts-Client",
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
