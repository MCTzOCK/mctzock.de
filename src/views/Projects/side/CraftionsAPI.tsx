/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import craftions from "../../../assets/craftions.png";

export default function CraftionsAPI() {
  return (
    <>
      <div className={"header"}>
        <div className="header-left">
          <h1 className="title">Craftions API</h1>
          <h1 className="header-subtitle">
            The Craftions API is an Minigame API for Minecraft Plugins.
          </h1>
          <div className={"buttons"}>
            <Button
              color={"link"}
              className={"mt-6"}
              onClick={() => {
                window.open(
                  "https://www.spigotmc.org/resources/craftions-api.93384/",
                  "_blank"
                );
              }}
            >
              SpigotMC
            </Button>
            <Button
              color={"link"}
              className={"mt-6"}
              onClick={() => {
                window.open("https://github.com/CraftionsMC/API", "_blank");
              }}
            >
              Source Code
            </Button>
          </div>
        </div>
        <div className="header-right" style={{ textAlign: "center" }}>
          <img src={craftions} alt={"Craftions"} width={256} />
        </div>
      </div>
    </>
  );
}
