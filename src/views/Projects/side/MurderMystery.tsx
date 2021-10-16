/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import minecraft from "../../../assets/minecraft.png";

export default function MurderMystery() {
  return (
    <>
      <div className={"header"}>
        <div className="header-left">
          <h1 className="title">MurderMystery</h1>
          <h1 className="header-subtitle">
            MurderMystery is a minecraft Plugin where you can either be the
            murder, a detective or an innocent. Depending on your role you have
            weapons and different tasks.
          </h1>
          <div className={"buttons"}>
            <Button
              color={"link"}
              className={"mt-6"}
              onClick={() => {
                window.open(
                  "https://download.mctzock.de/plugins/murdermystery-1.0-SNAPSHOT.jar",
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
                  "https://www.spigotmc.org/resources/murdermystery.87606/",
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
                window.open(
                  "https://github.com/CraftionsMC/MurderMystery",
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
