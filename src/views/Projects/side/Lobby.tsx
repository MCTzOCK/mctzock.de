/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import minecraft from "../../../assets/minecraft.png";

export default function Lobby() {
  return (
    <>
      <div className={"header"}>
        <div className="header-left">
          <h1 className="title">Lobby</h1>
          <h1 className="header-subtitle">
            I've also wrote many Lobby Plugins for Minecraft Servers.
          </h1>
          <div className={"buttons"}>
            <Button
              color={"link"}
              className={"mt-6"}
              onClick={() => {
                window.open(
                  "https://download.mctzock.de/plugins/Lobby-1.0-SNAPSHOT.jar",
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
                  "https://www.spigotmc.org/resources/lobby-system-1-8-1-16-x.88615/",
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
                window.open("https://github.com/CraftionsMC/Lobby", "_blank");
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
