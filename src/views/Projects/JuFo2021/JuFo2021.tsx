/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */
import senos from "../../../assets/senos.png";
import * as React from "react";

export default function JuFo2021() {
  return (
    <>
      <div className={"header"}>
        <div className="header-left">
          <h1 className="title">SenOS</h1>
          <h1 className="header-subtitle">
            SenOS was my project for the competition "Jugend Forscht" in the
            year 2021. It's an Operating System which was made for beginners.
            It's very user friendly and easy to use. We made many apps for it
            such as a Calculator, a Store and a few games. We even built a
            custom chat for this Operating System. With the Project we earned
            the 1st place at this competition!
          </h1>
        </div>
        <div className="header-right" style={{ textAlign: "center" }}>
          <img src={senos} alt={"SenOS"} />
        </div>
      </div>
    </>
  );
}
