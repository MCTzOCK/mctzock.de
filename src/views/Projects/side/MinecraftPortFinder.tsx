/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import minecraft from "../../../assets/minecraft.png";

export default function MinecraftPortFinder() {
  return (
    <>
      <div className={"header"}>
        <div className="header-left">
          <h1 className="title">Minecraft Port Finder</h1>
          <h1 className="header-subtitle">
            Minecraft Port Finder is a program which can scan a whole host for
            running Minecraft Servers.
          </h1>
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
        </div>
        <div className="header-right" style={{ textAlign: "center" }}>
          <img src={minecraft} alt={"Minecraft"} width={256} />
        </div>
      </div>
    </>
  );
}
