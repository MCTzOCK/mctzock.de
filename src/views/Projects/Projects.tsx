/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import { useState } from "react";
import logo from "../../assets/logo_trimmed.png";
import JuFo2020 from "./main/JuFo2020/JuFo2020";
import EP2019 from "./main/EP2019/EP2019";
import JuFo2022 from "./main/JuFo2022/JuFo2022";
import JuFo2021 from "./main/JuFo2021/JuFo2021";
import { Button } from "react-bulma-components";
import AdminTools from "./side/AdminTools";
import CraftionsBot from "./side/CraftionsBot";
import EncryptFolder from "./side/EncryptFolder";
import HomeTPA from "./side/HomeTPA";
import InCodeAccounts from "./side/InCodeAccounts";
import InCodeAccountsClient from "./side/InCodeAccountsClient";
import InCodeURLShorter from "./side/InCodeURLShorter";
import JavaMySQL from "./side/JavaMySQL";
import MinecraftPortFinder from "./side/MinecraftPortFinder";
import MurderMystery from "./side/MurderMystery";
import NodeJSPortScanner from "./side/NodeJSPortScanner";
import RSAKeys from "./side/RSAKeys";

export default function Projects() {
  const [mainProjectsVisible, setMainProjectsVisible] = useState(false);

  const [sideProjectsVisible, setSideProjectsVisible] = useState(false);

  return (
    <>
      <div className={"header"}>
        <div className="header-left">
          <h1 className="title">Projects</h1>
          <h1 className="header-subtitle">
            As a Developer I've worked on many projects. You can download some
            of my projects and some other can be viewed in the web.
          </h1>
        </div>
        <div className="header-right" style={{ textAlign: "center" }}>
          <img src={logo} alt={"DevOps"} />
        </div>
      </div>
      <div className={"projects"}>
        <h1
          className={"title has-text-centered"}
          onClick={() => {
            setMainProjectsVisible(!mainProjectsVisible);
          }}
        >
          Main Projects
        </h1>
        <div className={"has-text-centered"}>
          <Button
            color={"link"}
            onClick={() => {
              setMainProjectsVisible(!mainProjectsVisible);
            }}
          >
            {!mainProjectsVisible ? "Show" : "Hide"} Main Projects
          </Button>
        </div>
        <div
          className={
            "main-projects " + (!mainProjectsVisible ? "is-hidden" : "")
          }
        >
          <EP2019 />
          <JuFo2020 />
          <JuFo2021 />
          <JuFo2022 />
        </div>
        <h1 className={"title has-text-centered m-6"}>Side Projects</h1>
        <div className={"has-text-centered"}>
          <Button
            color={"link"}
            onClick={() => {
              setSideProjectsVisible(!sideProjectsVisible);
            }}
          >
            {!sideProjectsVisible ? "Show" : "Hide"} Side Projects
          </Button>
        </div>
        <div
          className={
            "side-projects " + (!sideProjectsVisible ? "is-hidden" : "")
          }
        >
          <h1 className={"title has-text-centered mt-6"}>Minecraft</h1>
          <AdminTools />
          <HomeTPA />
          <MurderMystery />
          <MinecraftPortFinder />

          <h1 className={"title has-text-centered mt-6"}>NodeJS Libraries</h1>
          <EncryptFolder />
          <InCodeAccounts />
          <InCodeAccountsClient />
          <InCodeURLShorter />
          <NodeJSPortScanner />

          <h1 className={"title has-text-centered mt-6"}>Java Libraries</h1>
          <JavaMySQL />
          <RSAKeys />

          <h1 className={"title has-text-centered mt-6"}>Other</h1>
          <CraftionsBot />
        </div>
        <div className={"has-text-centered"}>
          <Button
            color={"link"}
            className={"mt-6"}
            onClick={() => {
              window.open("https://github.com/MCTzOCK", "_blank");
            }}
          >
            See more on GitHub
          </Button>
        </div>
      </div>
    </>
  );
}
