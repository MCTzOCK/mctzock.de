/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import craftions from "../../../assets/craftions.png";

export default function CraftionsHTTP() {
  return (
    <>
      <div className={"header"}>
        <div className="header-left">
          <h1 className="title">Craftions HTTP</h1>
          <h1 className="header-subtitle">
            Craftions HTTP is a HTTP Server that supports many scripting
            languages.
          </h1>
          <div className={"buttons"}>
            <Button
              color={"link"}
              className={"mt-6"}
              onClick={() => {
                window.open("https://github.com/CraftionsMC/HTTP", "_blank");
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
