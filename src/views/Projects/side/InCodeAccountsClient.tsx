/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import { Link } from "react-router-dom";
import incode from "../../../assets/incode-400.png";

export default function InCodeAccountsClient() {
  return (
    <>
      <div className={"header"}>
        <div className="header-left">
          <h1 className="title">@incodelang/accounts-client</h1>
          <h1 className="header-subtitle">
            @incodelang/accounts-client is the web client for my npm
            package&nbsp;
            <Link to={"/projects/incode-accounts"}>@incodelang/accounts</Link>
          </h1>
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
        </div>
        <div className="header-right" style={{ textAlign: "center" }}>
          <img src={incode} alt={"InCode"} width={512} height={256} />
        </div>
      </div>
    </>
  );
}
