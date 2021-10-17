/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import node from "../../../assets/node.svg";

export default function InCodeAccounts() {
  return (
    <>
      <div className={"header"}>
        <div className="header-left">
          <h1 className="title">@incodelang/accounts</h1>
          <h1 className="header-subtitle">
            @incodelang/accounts is a npm package that allows you to easily
            integrate an account system in your application.
          </h1>
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
        </div>
        <div className="header-right" style={{ textAlign: "center" }}>
          <img src={node} alt={"node-js"} width={512} height={256} />
        </div>
      </div>
    </>
  );
}
