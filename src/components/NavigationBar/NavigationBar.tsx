/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import { Link } from "react-router-dom";
import { Button, Navbar } from "react-bulma-components";
import logo from "../../assets/logo_trimmed.png";

export default function Home() {
  return (
    <Navbar fixed={"top"}>
      <Navbar.Brand>
        <Navbar.Item renderAs={Link} to={"/"}>
          <img src={logo} alt={"MCTzOCK"} />
          <h1 className={"web_logo_name"} style={{ paddingLeft: "0.5rem" }}>
            MCTzOCK
          </h1>
        </Navbar.Item>
        <Navbar.Burger
          aria-label={"menu"}
          aria-expanded={"false"}
          data-target={"nav-bar-menu"}
          onClick={() => {
            const $navbarBurgers = Array.prototype.slice.call(
              document.querySelectorAll(".navbar-burger"),
              0
            );
            if ($navbarBurgers.length > 0) {
              $navbarBurgers.forEach((el) => {
                el.addEventListener("click", () => {
                  const target = el.dataset.target;
                  const $target = document.getElementById(
                    target
                  ) as HTMLElement;
                  el.classList.toggle("is-active");
                  $target.classList.toggle("is-active");
                });
              });
            }
          }}
        >
          <span aria-hidden={"true"} />
          <span aria-hidden={"true"} />
          <span aria-hidden={"true"} />
        </Navbar.Burger>
      </Navbar.Brand>
      <Navbar.Menu id={"nav-bar-menu"}>
        <div className={"navbar-start"}>
          <Navbar.Item renderAs={Link} to={"/"}>
            Home
          </Navbar.Item>
          <Navbar.Item renderAs={Link} to={"/about"}>
            About
          </Navbar.Item>
          <Navbar.Item renderAs={Link} to={"/history"}>
            My history
          </Navbar.Item>
          <Navbar.Item className={"has-dropdown is-hoverable"}>
            <Navbar.Link>Projects</Navbar.Link>

            <Navbar.Dropdown>
              <Navbar.Item renderAs={Link} to={"/projects/ep2019"}>
                Enigma
              </Navbar.Item>
              <Navbar.Item renderAs={Link} to={"/projects/jufo2020"}>
                Decryptor
              </Navbar.Item>
              <Navbar.Item renderAs={Link} to={"/projects/jufo2021"}>
                SenOS
              </Navbar.Item>
              <Navbar.Item renderAs={Link} to={"/projects/jufo2022"}>
                InCode
              </Navbar.Item>
              <Navbar.Item renderAs={Link} to={"/projects/all"}>
                View all
              </Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
        </div>
        <div className={"navbar-end"}>
          <Navbar.Item>
            <div className="buttons">
              <Button color={"primary"} renderAs={Link} to={"/hire"}>
                Hire me
              </Button>
              <Button
                color={"link"}
                onClick={() => {
                  window.open("https://discord.gg/YEHzrWVTp6", "_blank");
                }}
              >
                Discord
              </Button>
            </div>
          </Navbar.Item>
        </div>
      </Navbar.Menu>
    </Navbar>
  );
}
