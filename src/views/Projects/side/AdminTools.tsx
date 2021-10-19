/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import minecraft from "../../../assets/minecraft.png";
import RHeader, { RProps } from "../../../components/RHeader/RHeader";

export default function AdminTools(props: RProps) {
  return (
    <>
      <RHeader
        title={"AdminTools"}
        image={minecraft}
        imageAlt={"Minecraft"}
        noAnimation={props.animation}
      >
        AdminTools is a minecraft Plugin that contains all needed tools for
        server admins.
        <div className={"buttons"}>
          <Button
            color={"link"}
            className={"mt-6"}
            onClick={() => {
              window.open(
                "https://download.mctzock.de/plugins/AdminTools-1.0-SNAPSHOT.jar",
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
                "https://www.spigotmc.org/resources/admintools.86179/",
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
              window.open("https://github.com/MCTzOCK/AdminTools", "_blank");
            }}
          >
            Source Code
          </Button>
        </div>
      </RHeader>
    </>
  );
}
