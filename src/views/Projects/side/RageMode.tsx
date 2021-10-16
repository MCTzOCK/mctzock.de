/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import minecraft from "../../../assets/minecraft.png";

export default function RageMode() {
  return (
    <>
      <div className={"header"}>
        <div className="header-left">
          <h1 className="title">RageMode</h1>
          <h1 className="header-subtitle">
            RageMode is a Minecraft Gamemode where every player can be killed
            with one hit.
          </h1>
          <div className={"buttons"}>
            <Button
              color={"link"}
              className={"mt-6"}
              onClick={() => {
                window.open(
                  "https://download.mctzock.de/plugins/ragemode-1.0-SNAPSHOT.jar",
                  "_blank"
                );
              }}
            >
              Download
            </Button>
            <Button
              color={"link"}
              className={"mt-6"}
              onClick={() => {
                window.open(
                  "https://github.com/CraftionsMC/Ragemode",
                  "_blank"
                );
              }}
            >
              Source Code
            </Button>
          </div>
        </div>
        <div className="header-right" style={{ textAlign: "center" }}>
          <img src={minecraft} alt={"Minecraft"} width={256} />
        </div>
      </div>
    </>
  );
}
