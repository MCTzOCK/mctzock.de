/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */
import RHeader, { RProps } from "../../../../components/RHeader/RHeader";
import a0erPinq from "../../../../assets/customers/0erPinq.png";
import { Button } from "react-bulma-components";

export default function A0erPinqBot(props: RProps) {
  return (
    <>
      <RHeader
        title={"0erPinq Bot"}
        image={a0erPinq}
        imageAlt={"0erPinq"}
        noAnimation={props.animation}
        imageStyle={{
          borderRadius: "50%",
          scale: ".5",
        }}
      >
        I've developed the Discord Bot for 0erPinq's Discord Server
        <div className="buttons">
          <Button
            color={"link"}
            className={"mt-6"}
            onClick={() => {
              window.open("https://discord.gg/Rx8urErBbx", "_blank");
            }}
          >
            Join 0erPinq's Discord
          </Button>
        </div>
      </RHeader>
    </>
  );
}
