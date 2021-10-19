/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import minecraft from "../../../assets/minecraft.png";
import RHeader, { RProps } from "../../../components/RHeader/RHeader";

export default function LaserTag(props: RProps) {
  return (
    <>
      <RHeader
        title={"LaserTag"}
        image={minecraft}
        imageAlt={"Minecraft"}
        noAnimation={props.animation}
      >
        I've developed LaserTag in Minecraft. You can shoot other players and
        earn points.
        <div className={"buttons"}>
          <Button
            color={"link"}
            className={"mt-6"}
            onClick={() => {
              window.open(
                "https://download.mctzock.de/plugins/lasertag-1.0-SNAPSHOT.jar",
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
              window.open("https://github.com/CraftionsMC/LaserTag", "_blank");
            }}
          >
            Source Code
          </Button>
        </div>
      </RHeader>
    </>
  );
}
