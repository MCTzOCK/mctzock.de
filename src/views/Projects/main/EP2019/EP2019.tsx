/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */
import enigma from "../../../../assets/enigma.png";
import * as React from "react";
import { Button } from "react-bulma-components";
import RHeader, { RProps } from "../../../../components/RHeader/RHeader";

export default function EP2019(props: RProps) {
  return (
    <>
      <RHeader
        title={"Enigma"}
        image={enigma}
        imageAlt={"Enigma"}
        noAnimation={props.animation}
      >
        The Enigma was my first project I've developed for a competition. With
        that program you can encrypt and decrypt data with an password. You can
        download this project. But attention, the project is not really good,
        because I wasn't so experienced back then.
        <div className="buttons">
          <Button
            color={"link"}
            style={{
              marginTop: "2rem",
            }}
            onClick={() => {
              window.open(
                "https://download.mctzock.de/enigma_ep2019.zip",
                "_blank"
              );
            }}
          >
            Download
          </Button>
        </div>
      </RHeader>
    </>
  );
}
