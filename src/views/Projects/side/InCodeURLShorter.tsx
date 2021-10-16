/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import incode from "../../../assets/incode-400.png";

export default function InCodeURLShorter() {
  return (
    <>
      <div className={"header"}>
        <div className="header-left">
          <h1 className="title">@incodelang/urlshorter</h1>
          <h1 className="header-subtitle">
            @incodelang/urlshorter is a npm package that allows you to create an
            URL Shorter.
          </h1>
          <div className={"buttons"}>
            <Button
              color={"link"}
              className={"mt-6"}
              onClick={() => {
                window.open(
                  "https://npmjs.com/@incodelang/urlshorter",
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
                  "https://github.com/InCodeDevs/URLShorter",
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
