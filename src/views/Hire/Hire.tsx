/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import { Button } from "react-bulma-components";

export default function Hire() {
  return (
    <>
      <div className={"sub-page"}>
        <h1 className={"sub-page-title title"}>Hire me!</h1>
        <p className={"sub-page-content subtitle"}>
          If you are interested in hiring me for your project, please job my
          discord server by clicking the button below. You can then submit your
          application on my discord server. Please make sure that your
          application includes the name of the project, your name and a detailed
          description of what you want me to do. Please also make an offer of
          what you want to pay me for my work. I'll then individually decide if
          I'll accept your offer or not.
          <br />
          <Button
            color={"link"}
            style={{
              marginTop: "2rem",
            }}
            onClick={() => {
              window.open("https://discord.gg/YEHzrWVTp6", "_blank");
            }}
          >
            Discord
          </Button>
        </p>
      </div>
    </>
  );
}
