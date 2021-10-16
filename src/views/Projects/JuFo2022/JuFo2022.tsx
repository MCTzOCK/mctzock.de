/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */
import incode from "../../../assets/incode-400.png";
import * as React from "react";
import { Button } from "react-bulma-components";

export default function JuFo2022() {
  return (
    <>
      <div className={"header"}>
        <div className="header-left">
          <h1 className="title">InCode</h1>
          <h1 className="header-subtitle">
            InCode is my current project for the competition "Jugend Forscht" in
            2022. It's a programming language which allows you to write german
            sentences. It's very beginner friendly and you can learn it in less
            than an hour. We also integrated a Blockly based Editor so you don't
            have to remember all the commands.
          </h1>
          <div className={"field is-grouped"}>
            <Button
              color={"link"}
              style={{
                marginTop: "2rem",
              }}
              onClick={() => {
                window.open("https://editor.incodelang.de", "_blank");
              }}
            >
              Open the Editor
            </Button>
            <Button
              color={"link"}
              style={{
                margin: "2rem",
              }}
              onClick={() => {
                window.open("https://github.com/InCodeDevs", "_blank");
              }}
            >
              Source Code
            </Button>
          </div>
        </div>
        <div className="header-right" style={{ textAlign: "center" }}>
          <img src={incode} alt={"InCode"} />
        </div>
      </div>
    </>
  );
}
