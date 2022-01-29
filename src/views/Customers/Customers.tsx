/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";

import customer_0erPing from "../../assets/customers/0erPinq.png";
import customer_RedBuild from "../../assets/customers/RedBuild.webp";
import customer_leaf4 from "../../assets/customers/leaf4.jpg";
import customer_gcc from "../../assets/customers/gcc.webp";
import customer_star_v from "../../assets/customers/star-v.bmp";
import RHeader from "../../components/RHeader/RHeader";
import { Button } from "react-bulma-components";

export default function Customers() {
  return (
    <>
      <h1 className={"has-text-centered title"}>Customers</h1>
      <RHeader
        title={"0erPinq"}
        image={customer_0erPing}
        imageStyle={{ width: "256px", borderRadius: "50%" }}
        noAnimation
      >
        I've been working with 0erPinq since January 2021. In this period of
        time I've developed a bot for his Discord Server.
        <div className="buttons mt-4">
          <Button
            color={"link"}
            onClick={() => {
              window.open("https://twitch.tv/0erPinq", "_blank");
            }}
          >
            Twitch
          </Button>
          <Button
            color={"link"}
            onClick={() => {
              window.open("https://discord.gg/pgbCKgX3tk", "_blank");
            }}
          >
            Discord
          </Button>
        </div>
      </RHeader>
      <RHeader
        title={"Red-Build"}
        image={customer_RedBuild}
        imageStyle={{ width: "256px", borderRadius: "50%" }}
        rtl={true}
        noAnimation
      >
        I worked together with Red-Build for a very long time. I've developed
        some Minecraft Plugins, Websites and a Discord Bot for them.
        <div className="buttons mt-4">
          <Button
            color={"link"}
            onClick={() => {
              window.open("https://red-build.de", "_blank");
            }}
          >
            Website
          </Button>
          <Button
            color={"link"}
            onClick={() => {
              window.open("https://discord.gg/AhkKVTxJ3K", "_blank");
            }}
          >
            Discord
          </Button>
        </div>
      </RHeader>
      <RHeader
        title={"Leaf4"}
        image={customer_leaf4}
        imageStyle={{ width: "256px", borderRadius: "50%" }}
        noAnimation
      >
        Leaf4 was a Minecraft YouTube Channel. Back then when I worked with him
        I helped him with his YouTube Projects and wrote some Minecraft Plugins.
        I also provided Minecraft Servers for his projects.
      </RHeader>
      <RHeader
        title={"GameCoderCorner"}
        image={customer_gcc}
        imageStyle={{ width: "256px", borderRadius: "50%" }}
        rtl={true}
        noAnimation
      >
        GameCoderCorner is an online community for (Game) Developers. I am
        currently working on a new discord bot for them.
        <div className="buttons mt-4">
          <Button
            color={"link"}
            onClick={() => {
              window.open("http://gamecodercorner.de/", "_blank");
            }}
          >
            Website
          </Button>
          <Button
            color={"link"}
            onClick={() => {
              window.open("https://discord.gg/mrP4MfJEWQ", "_blank");
            }}
          >
            Discord
          </Button>
        </div>
      </RHeader>
      <RHeader
        title={"Star-V"}
        image={customer_star_v}
        imageStyle={{ width: "256px", borderRadius: "50%" }}
        noAnimation
      >
        Star-V is my latest customer. I've developed their Discord Bot.
        <div className="buttons mt-4">
          <Button
            color={"link"}
            onClick={() => {
              window.open("https://star-v.de", "_blank");
            }}
          >
            Website
          </Button>
          <Button
            color={"link"}
            onClick={() => {
              window.open("https://discord.gg/star-v", "_blank");
            }}
          >
            Discord
          </Button>
        </div>
      </RHeader>
    </>
  );
}
