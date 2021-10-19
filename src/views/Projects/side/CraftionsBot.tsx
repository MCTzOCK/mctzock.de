/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import craftions from "../../../assets/craftions.png";
import RHeader, { RProps } from "../../../components/RHeader/RHeader";

export default function CraftionsBot(props: RProps) {
  return (
    <>
      <RHeader
        title={"Craftions Bot"}
        image={craftions}
        imageAlt={"Craftions Bot"}
        noAnimation={props.animation}
      >
        The Craftions Discord Bot is a moderation discord bot.
        <div className={"buttons"}>
          <Button
            color={"link"}
            className={"mt-6"}
            onClick={() => {
              window.open(
                "https://discord.com/oauth2/authorize?client_id=847866052058546196&permissions=8&scope=bot",
                "_blank"
              );
            }}
          >
            Invite
          </Button>
          <Button
            color={"link"}
            className={"mt-6"}
            onClick={() => {
              window.open(
                "https://github.com/CraftionsMC/Discord-Bot",
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
