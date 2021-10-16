/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import craftions from "../../../assets/craftions.png";

export default function CraftionsBot() {
  return (
    <>
      <div className={"header"}>
        <div className="header-left">
          <h1 className="title">Craftions Bot</h1>
          <h1 className="header-subtitle">
            The Craftions Discord Bot is a moderation discord bot.
          </h1>
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
        </div>
        <div className="header-right" style={{ textAlign: "center" }}>
          <img src={craftions} alt={"Craftions"} width={256} />
        </div>
      </div>
    </>
  );
}
