/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */
import enigma from "../../../assets/enigma.png";
import * as React from "react";
import { Button } from "react-bulma-components";

export default function EP2019() {
  return (
    <>
      <div className={"header"}>
        <div className="header-left">
          <h1 className="title">Enigma</h1>
          <h1 className="header-subtitle">
            The Enigma was my first project I've developed for a competition.
            With that program you can encrypt and decrypt data with an password.
            You can download this project. But attention, the project is not
            really good, because I wasn't so experienced back then.
            <Button
              color={"link"}
              style={{
                marginTop: "2rem",
              }}
              onClick={() => {
                window.open("/download/enigma_ep2019.zip", "_blank");
              }}
            >
              Download
            </Button>
          </h1>
        </div>
        <div className="header-right" style={{ textAlign: "center" }}>
          <img src={enigma} alt={"Enigma"} />
        </div>
      </div>
    </>
  );
}
