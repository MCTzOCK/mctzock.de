/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Customers from "../../components/Customers/Customers";
import Contact from "../../components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Customers />
      <Contact />
    </>
  );
}
