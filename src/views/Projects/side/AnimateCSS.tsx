/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import RHeader, { RProps } from "../../../components/RHeader/RHeader";

export default function AnimateCSS(props: RProps) {
  return (
    <>
      <RHeader
        title={"AdminTools"}
        image={
          "https://user-images.githubusercontent.com/53553315/116579197-71484800-a912-11eb-8d6e-17cc50d8027d.png"
        }
        imageAlt={"Animate.css"}
        noAnimation={props.animation}
      >
        Animate.css is my CSS Animation Library.
        <div className={"buttons"}>
          <Button
            color={"link"}
            className={"mt-6"}
            onClick={() => {
              window.open(
                "https://cdn.senos.xyz/animate.css/dist/animate.min.css",
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
              window.open("https://github.com/SenOSDev/Animate.css", "_blank");
            }}
          >
            Source Code
          </Button>
        </div>
      </RHeader>
    </>
  );
}
