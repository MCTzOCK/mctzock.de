/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import minecraft from "../../../assets/minecraft.png";

export default function LaserTag() {
  return (
    <>
      <div className={"header"}>
        <div className="header-left">
          <h1 className="title">LaserTag</h1>
          <h1 className="header-subtitle">
            I've developed LaserTag in Minecraft. You can shoot other players
            and earn points.
          </h1>
          <div className={"buttons"}>
            <Button
              color={"link"}
              className={"mt-6"}
              onClick={() => {
                window.open(
                  "https://github.com/CraftionsMC/LaserTag",
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
