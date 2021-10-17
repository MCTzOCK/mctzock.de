/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import "./Contact.scss";

export default function Contact() {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <p style={{ marginBottom: "2rem" }} className={"title"}>
          Contact
        </p>
        <div className={"footer-links"}>
          <a
            className={"subtitle has-text-danger"}
            href={"mailto:dev@mctzock.de"}
            target={"_blank"}
          >
            E-Mail
          </a>
          <em>•</em>
          <a
            className={"subtitle has-text-danger"}
            href={"https://discord.gg/YEHzrWVTp6"}
            target={"_blank"}
          >
            Discord
          </a>
        </div>
      </div>
    </>
  );
}
