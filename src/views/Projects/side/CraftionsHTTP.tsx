/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import craftions from "../../../assets/craftions.png";
import RHeader, { RProps } from "../../../components/RHeader/RHeader";

export default function CraftionsHTTP(props: RProps) {
  return (
    <>
      <RHeader
        title={"Craftions HTTP"}
        image={craftions}
        imageAlt={"Craftions"}
        noAnimation={props.animation}
      >
        Craftions HTTP is a HTTP Server that supports many scripting languages.
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
      </RHeader>
    </>
  );
}
