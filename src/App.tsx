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
import EP2019 from "./views/Projects/EP2019/EP2019";
import JuFo2020 from "./views/Projects/JuFo2020/JuFo2020";
import JuFo2021 from "./views/Projects/JuFo2021/JuFo2021";
import JuFo2022 from "./views/Projects/JuFo2022/JuFo2022";
import Imprint from "./views/Legal/Imprint/Imprint";
import Privacy from "./views/Legal/Privacy/Privacy";

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
        <Route exact path={"/projects/all"} component={Projects} />
        <Route exact path={"/legal/imprint"} component={Imprint} />
        <Route exact path={"/legal/privacy"} component={Privacy} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}
