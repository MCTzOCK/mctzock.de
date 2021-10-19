/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import "./Home.scss";
import Customers from "../../components/Customers/Customers";
import Contact from "../../components/Contact/Contact";
import RHeader from "../../components/RHeader/RHeader";
import logo from "../../assets/logo_trimmed.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <RHeader
        title={
          <>
            <span>👋</span>&nbsp;Ben Siebert
          </>
        }
        image={logo}
        imageAlt={"MCTzOCK"}
      >
        I'm a&nbsp;
        <Link to={"/fullstack-developer"}>Full Stack Developer</Link>
        ,&nbsp;
        <Link to={"/devops-engineer"}>DevOps Engineer</Link>
        &nbsp; and&nbsp;
        <Link to={"/open-source-maintainer"}>open source maintainer</Link>. You
        can take a look at my <Link to={"/projects"}>projects</Link>
        &nbsp; or&nbsp;
        <Link to={"/hire"}>hire</Link>
        &nbsp;me for your own projects!
      </RHeader>
      <Customers />
      <Contact />
    </>
  );
}
