/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import minecraft from "../../../assets/minecraft.png";
import RHeader, { RProps } from "../../../components/RHeader/RHeader";

export default function MinecraftPortFinder(props: RProps) {
  return (
    <>
      <RHeader
        title={"Minecraft Port Finder"}
        image={minecraft}
        imageAlt={"Minecraft"}
        noAnimation={props.animation}
      >
        Minecraft Port Finder is a program which can scan a whole host for
        running Minecraft Servers.
        <div className={"buttons"}>
          <Button
            color={"link"}
            className={"mt-6"}
            onClick={() => {
              window.open(
                "http://cloud.mctzock.de/serverping/1.2/ServerPing.jar",
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
                "https://github.com/MCTzOCK/MinecraftPortFinder",
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
