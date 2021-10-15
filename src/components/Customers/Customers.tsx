/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import "./Customers.scss";

import customer_0erPing from "../../assets/customers/0erPinq.png";
import customer_RedBuild from "../../assets/customers/RedBuild.webp";
import customer_leaf4 from "../../assets/customers/leaf4.jpg";
import customer_gcc from "../../assets/customers/gcc.webp";

export default function Customers() {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <p style={{ marginBottom: "2rem" }}>
        Here is a list of a few of my customers.
      </p>
      <div className="customer">
        <a
          target={"_blank"}
          href={"https://twitch.tv/0erPinq"}
          rel={"noreferrer"}
        >
          <img
            src={customer_0erPing}
            alt="0erPinq"
            width={128}
            height={128}
            className="customer-logo customer-0erPinq"
          />
        </a>
      </div>
      <div className="customer">
        <a target={"_blank"} href={"http://red-build.de"} rel={"noreferrer"}>
          <img
            src={customer_RedBuild}
            alt="RedBuild"
            width={128}
            height={128}
            className="customer-logo customer-RedBuild"
          />
        </a>
      </div>
      <div className="customer">
        <a
          target={"_blank"}
          href={"https://www.youtube.com/channel/UCYSQlFKppuG0a5HL-hfBHDQ"}
          rel={"noreferrer"}
        >
          <img
            src={customer_leaf4}
            alt="Leaf4"
            width={128}
            height={128}
            className="customer-logo customer-leaf4"
          />
        </a>
      </div>
      <div className="customer">
        <a
          target={"_blank"}
          href={"http://gamecodercorner.de/"}
          rel={"noreferrer"}
        >
          <img
            src={customer_gcc}
            alt="GameCoderCorner"
            width={128}
            height={128}
            className="customer-logo customer-gcc"
          />
        </a>
      </div>
    </div>
  );
}
