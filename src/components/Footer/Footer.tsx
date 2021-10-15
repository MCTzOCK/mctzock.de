/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import "./Footer.scss";

import { Footer as BulmaFooter } from "react-bulma-components";
import { BrowserRouter, Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <BrowserRouter>
        <BulmaFooter
          style={{
            marginTop: "3rem",
            marginBottom: "0",
          }}
        >
          <div className={"has-text-centered content"}>
            <p>
              Copyright © 2018-{new Date().getFullYear()}
              <Link to={"/"}>&nbsp;Ben Siebert</Link>
              . All rights reserved.
              <br />
              The website is licensed&nbsp;
              <a
                href={"https://choosealicense.com/licenses/gpl-3.0/"}
                target={"_blank"}
                rel={"noreferrer"}
              >
                GPL-3.0-only
              </a>
              . <br />
              <div className={"footer-links"}>
                <a
                  href={"https://github.com/MCTzOCK"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  GitHub
                </a>
                <em>•</em>
                <a
                  href={"https://twitter.com/OfficialMCTzOCK"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  Twitter
                </a>
                <em>•</em>
                <a
                  href={
                    "https://www.youtube.com/channel/UCYpiMr7urCu8V8Lv4-6ikyw"
                  }
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  YouTube
                </a>
                <em>•</em>
                <a
                  href={"https://twitch.tv/mctzock"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  Twitch
                </a>
              </div>
            </p>
          </div>
        </BulmaFooter>
      </BrowserRouter>
    </>
  );
}
