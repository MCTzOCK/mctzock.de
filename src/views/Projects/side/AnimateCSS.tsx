/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";

export default function AnimateCSS() {
  return (
    <>
      <div className={"header"}>
        <div className="header-left">
          <h1 className="title">Animate.css</h1>
          <h1 className="header-subtitle">
            Animate.css is my CSS Animation Library.
          </h1>
          <div className={"buttons"}>
            <Button
              color={"link"}
              className={"mt-6"}
              onClick={() => {
                window.open(
                  "https://github.com/SenOSDev/Animate.css",
                  "_blank"
                );
              }}
            >
              Source Code
            </Button>
          </div>
        </div>
        <div className="header-right" style={{ textAlign: "center" }}>
          <img
            src={
              "https://user-images.githubusercontent.com/53553315/116579197-71484800-a912-11eb-8d6e-17cc50d8027d.png"
            }
            alt={"Animate.css"}
            width={256}
          />
        </div>
      </div>
    </>
  );
}
