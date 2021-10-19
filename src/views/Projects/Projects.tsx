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
import Lobby from "./side/Lobby";
import CraftionsAPI from "./side/CraftionsAPI";
import AnimateCSS from "./side/AnimateCSS";
import CraftionsHTTP from "./side/CraftionsHTTP";
import LaserTag from "./side/LaserTag";
import RageMode from "./side/RageMode";
import A0erPinqBot from "./customer/0erPinq/0erPinqBot";
import RedBuildWebsite from "./customer/RedBuild/RedBuildWebsite";

export default function Projects() {
  const [mainProjectsVisible, setMainProjectsVisible] = useState(false);

  const [sideProjectsVisible, setSideProjectsVisible] = useState(false);
  const [customerProjectsVisible, setCustomerProjectsVisible] = useState(false);

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
          <img src={logo} alt={"MCTzOCK"} />
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
          <EP2019 animation />
          <JuFo2020 animation />
          <JuFo2021 animation />
          <JuFo2022 animation />
        </div>
        <h1
          className={"title has-text-centered m-6"}
          onClick={() => {
            setSideProjectsVisible(!sideProjectsVisible);
          }}
        >
          Side Projects
        </h1>
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
          <AdminTools animation />
          <HomeTPA animation />
          <MurderMystery animation />
          <MinecraftPortFinder animation />
          <Lobby animation />
          <CraftionsAPI animation />
          <LaserTag animation />
          <RageMode animation />

          <h1 className={"title has-text-centered mt-6"}>NodeJS Libraries</h1>
          <EncryptFolder animation />
          <InCodeAccounts animation />
          <InCodeAccountsClient animation />
          <InCodeURLShorter animation />
          <NodeJSPortScanner animation />

          <h1 className={"title has-text-centered mt-6"}>Java Libraries</h1>
          <JavaMySQL animation />
          <RSAKeys animation />

          <h1 className={"title has-text-centered mt-6"}>Other</h1>
          <CraftionsBot animation />
          <AnimateCSS animation />
          <CraftionsHTTP animation />

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

        <h1
          className={"title has-text-centered m-6"}
          onClick={() => {
            setSideProjectsVisible(!sideProjectsVisible);
          }}
        >
          Customer Projects
        </h1>
        <div className={"has-text-centered"}>
          <Button
            color={"link"}
            onClick={() => {
              setCustomerProjectsVisible(!customerProjectsVisible);
            }}
          >
            {!customerProjectsVisible ? "Show" : "Hide"} Customer Projects
          </Button>
        </div>
        <div
          className={
            "customer-projects " + (!customerProjectsVisible ? "is-hidden" : "")
          }
        >
          <A0erPinqBot />
          <RedBuildWebsite />
        </div>
      </div>
    </>
  );
}
