/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import node from "../../../assets/node.svg";
import RHeader, { RProps } from "../../../components/RHeader/RHeader";

export default function EncryptFolder(props: RProps) {
  return (
    <>
      <RHeader
        title={"encrypt-folder"}
        image={node}
        imageAlt={"NodeJS"}
        noAnimation={props.animation}
      >
        encrypt-folder is an API for encrypting and decrypting whole folders
        using either Node.JS or the CLI implementation.
        <div className={"buttons"}>
          <Button
            color={"link"}
            className={"mt-6"}
            onClick={() => {
              window.open("https://npmjs.com/encrypt-folder", "_blank");
            }}
          >
            View on NPM
          </Button>
          <Button
            color={"link"}
            className={"mt-6"}
            onClick={() => {
              window.open(
                "https://github.com/MCTzOCK/encrypt-folder",
                "_blank"
              );
            }}
          >
            Source Code
          </Button>
        </div>
      </RHeader>
    </>
  );
}
