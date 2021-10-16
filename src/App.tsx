/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./views/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./views/About/About";
import History from "./views/History/History";
import Hire from "./views/Hire/Hire";
import FullstackDeveloper from "./views/FullstackDeveloper/FullstackDeveloper";
import NotFound from "./views/NotFound/NotFound";
import DevOpsEngineer from "./views/DevOpsEngineer/DevOpsEngineer";
import OpenSourceMaintainer from "./views/OpenSourceMaintainer/OpenSourceMaintainer";
import Projects from "./views/Projects/Projects";
import EP2019 from "./views/Projects/main/EP2019/EP2019";
import JuFo2020 from "./views/Projects/main/JuFo2020/JuFo2020";
import JuFo2021 from "./views/Projects/main/JuFo2021/JuFo2021";
import JuFo2022 from "./views/Projects/main/JuFo2022/JuFo2022";
import Imprint from "./views/Legal/Imprint/Imprint";
import Privacy from "./views/Legal/Privacy/Privacy";
import EncryptFolder from "./views/Projects/side/EncryptFolder";
import InCodeAccounts from "./views/Projects/side/InCodeAccounts";
import InCodeAccountsClient from "./views/Projects/side/InCodeAccountsClient";
import InCodeURLShorter from "./views/Projects/side/InCodeURLShorter";
import NodeJSPortScanner from "./views/Projects/side/NodeJSPortScanner";
import RSAKeys from "./views/Projects/side/RSAKeys";
import JavaMySQL from "./views/Projects/side/JavaMySQL";
import AdminTools from "./views/Projects/side/AdminTools";
import MurderMystery from "./views/Projects/side/MurderMystery";
import HomeTPA from "./views/Projects/side/HomeTPA";
import CraftionsBot from "./views/Projects/side/CraftionsBot";
import MinecraftPortFinder from "./views/Projects/side/MinecraftPortFinder";
import CraftionsAPI from "./views/Projects/side/CraftionsAPI";
import CraftionsHTTP from "./views/Projects/side/CraftionsHTTP";
import Lobby from "./views/Projects/side/Lobby";
import LaserTag from "./views/Projects/side/LaserTag";
import RageMode from "./views/Projects/side/RageMode";
import AnimateCSS from "./views/Projects/side/AnimateCSS";

export default function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/history" component={History} />
        <Route exact path="/hire" component={Hire} />
        <Route
          exact
          path="/fullstack-developer"
          component={FullstackDeveloper}
        />
        <Route exact path="/devops-engineer" component={DevOpsEngineer} />
        <Route
          exact
          path="/open-source-maintainer"
          component={OpenSourceMaintainer}
        />
        <Route exact path="/projects" component={Projects} />
        <Route
          exact
          path={[
            "/projects/enigma-ep2019",
            "/projects/ep2019",
            "/projects/enigma",
            "/ep2019",
            "/enigma",
          ]}
          component={EP2019}
        />
        <Route
          exact
          path={[
            "/projects/decryptor-jufo2020",
            "/projects/jufo2020",
            "/projects/decryptor",
            "/jufo2020",
            "/decryptor",
          ]}
          component={JuFo2020}
        />
        <Route
          exact
          path={[
            "/projects/senos-jufo2021",
            "/projects/jufo2021",
            "/projects/senos",
            "/jufo2021",
            "/senos",
          ]}
          component={JuFo2021}
        />
        <Route
          exact
          path={[
            "/projects/incode-jufo2022",
            "/projects/jufo2022",
            "/projects/incode",
            "/jufo2022",
            "/incode",
          ]}
          component={JuFo2022}
        />
        <Route
          exact
          path={["/projects/encrypt-folder", "/encrypt-folder"]}
          component={EncryptFolder}
        />
        <Route
          exact
          path={["/projects/incode-accounts", "/incode-accounts"]}
          component={InCodeAccounts}
        />
        <Route
          exact
          path={["/projects/incode-accounts-client", "/incode-accounts-client"]}
          component={InCodeAccountsClient}
        />
        <Route
          exact
          path={["/projects/incode-urlshorter", "/incode-urlshorter"]}
          component={InCodeURLShorter}
        />
        <Route
          exact
          path={["/projects/nodejs-port-scanner", "/nodejs-port-scanner"]}
          component={NodeJSPortScanner}
        />
        <Route
          exact
          path={["/projects/rsa-keys", "/rsa-keys"]}
          component={RSAKeys}
        />
        <Route
          exact
          path={["/projects/java-mysql", "/java-mysql"]}
          component={JavaMySQL}
        />
        <Route
          exact
          path={["/projects/admin-tools", "/admin-tools"]}
          component={AdminTools}
        />
        <Route
          exact
          path={["/projects/murdermystery", "/murdermystery"]}
          component={MurderMystery}
        />
        <Route
          exact
          path={["/projects/hometpa", "/hometpa"]}
          component={HomeTPA}
        />
        <Route
          exact
          path={["/projects/craftions-bot", "/craftions-bot"]}
          component={CraftionsBot}
        />
        <Route
          exact
          path={["/projects/minecraft-port-finder", "/minecraft-port-finder"]}
          component={MinecraftPortFinder}
        />
        <Route
          exact
          path={["/projects/craftions-api", "/craftions-api"]}
          component={CraftionsAPI}
        />
        <Route
          exact
          path={["/projects/craftions-http", "/craftions-http"]}
          component={CraftionsHTTP}
        />
        <Route exact path={["/projects/lobby", "/lobby"]} component={Lobby} />
        <Route
          exact
          path={["/projects/lasertag", "/lasertag"]}
          component={LaserTag}
        />
        <Route
          exact
          path={["/projects/ragemode", "/ragemode"]}
          component={RageMode}
        />
        <Route
          exact
          path={[
            "/projects/animate-css",
            "/animate-css",
            "/projects/animate.css",
            "/animate.css",
          ]}
          component={AnimateCSS}
        />
        <Route exact path={"/projects/all"} component={Projects} />
        <Route exact path={"/legal/imprint"} component={Imprint} />
        <Route exact path={"/legal/privacy"} component={Privacy} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}
