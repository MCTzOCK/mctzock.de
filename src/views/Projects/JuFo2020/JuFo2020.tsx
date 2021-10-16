/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */
import decryptor from "../../../assets/decryptor.jpg";
import * as React from "react";
import { Button } from "react-bulma-components";
import { Link } from "react-router-dom";

export default function JuFo2020() {
  return (
    <>
      <div className={"header"}>
        <div className="header-left">
          <h1 className="title">Decryptor</h1>
          <h1 className="header-subtitle">
            The Decryptor is the next generation of my&nbsp;
            <Link to={"/projects/ep2019"}>Enigma</Link>&nbsp;. In this Project
            I've added many encryption methods. With the Project I've earned the
            3rd place at the competition "Jugend Forscht". You can download the
            Project or view the source code by clicking on the buttons below.
            <div className={"field is-grouped"}>
              <Button
                color={"link"}
                style={{
                  marginTop: "2rem",
                }}
                onClick={() => {
                  window.open("/download/decryptor_jufo2020.zip", "_blank");
                }}
              >
                Download
              </Button>
              <Button
                color={"link"}
                style={{
                  margin: "2rem",
                }}
                onClick={() => {
                  window.open("https://github.com/MCTzOCK/Decryptor", "_blank");
                }}
              >
                Source Code
              </Button>
            </div>
          </h1>
        </div>
        <div className="header-right" style={{ textAlign: "center" }}>
          <img
            src={decryptor}
            alt={"Decryptor"}
            style={{
              borderRadius: "50%",
              scale: ".5",
            }}
          />
        </div>
      </div>
    </>
  );
}
