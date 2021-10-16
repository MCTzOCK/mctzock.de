/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import minecraft from "../../../assets/minecraft.png";

export default function HomeTPA() {
  return (
    <>
      <div className={"header"}>
        <div className="header-left">
          <h1 className="title">HomeTPA</h1>
          <h1 className="header-subtitle">
            HomeTPA is a minecraft Plugin with essential functionality for homes
            and tpas.
          </h1>
          <div className={"buttons"}>
            <Button
              color={"link"}
              className={"mt-6"}
              onClick={() => {
                window.open(
                  "https://www.spigotmc.org/resources/tpa-home.86679/",
                  "_blank"
                );
              }}
            >
              View on SpigotMC
            </Button>
            <Button
              color={"link"}
              className={"mt-6"}
              onClick={() => {
                window.open("https://github.com/MCTzOCK/HomeTPA", "_blank");
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
