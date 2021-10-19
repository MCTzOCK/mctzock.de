/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import minecraft from "../../../assets/minecraft.png";
import RHeader, { RProps } from "../../../components/RHeader/RHeader";

export default function MurderMystery(props: RProps) {
  return (
    <>
      <RHeader
        title={"MurderMystery"}
        image={minecraft}
        imageAlt={"Minecraft"}
        noAnimation={props.animation}
      >
        MurderMystery is a minecraft Plugin where you can either be the murder,
        a detective or an innocent. Depending on your role you have weapons and
        different tasks.
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
      </RHeader>
    </>
  );
}
