/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import minecraft from "../../../assets/minecraft.png";
import RHeader, { RProps } from "../../../components/RHeader/RHeader";

export default function Lobby(props: RProps) {
  return (
    <>
      <RHeader
        title={"Lobby"}
        image={minecraft}
        imageAlt={"Minecraft"}
        noAnimation={props.animation}
      >
        I've also wrote many Lobby Plugins for Minecraft Servers.
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
      </RHeader>
    </>
  );
}
