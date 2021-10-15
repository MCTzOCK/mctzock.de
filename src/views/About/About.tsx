/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import moment from "moment/moment";
import { Link } from "react-router-dom";

export default function About() {
  let age = moment
    .duration(
      moment(
        new Date().getFullYear() +
          "-" +
          (new Date().getMonth() + 1) +
          "-" +
          new Date().getDate(),
        "YYYY-MM-DD"
      ).diff(moment("2007-03-20", "YYYY-MM-DD"))
    )
    .asYears()
    .toString()
    .split(".")[0];

  return (
    <>
      <div className={"sub-page"}>
        <h1 className={"sub-page-title title"}>About me</h1>
        <p className={"sub-page-content subtitle"}>
          My name ist Ben Siebert. I am a student from germany. I am
          currently&nbsp;
          {age}
          &nbsp;years old. I am a fullstack software developer and maintain
          several open source projects. I am very interested in Backend
          Development with NodeJS and Express and Frontend Development with
          ReactJS and TypeScript! I am developing software since I was 8. In
          this period of time I learned many skills. Here are a few of my
          skills:
          <ul>
            <br />
            <li>
              <strong>Frontend Web Development:</strong>
              <ul>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>SASS and SCSS</li>
                <li>TypeScript</li>
                <li>ReactJS</li>
              </ul>
            </li>
            <br />
            <li>
              <strong>Backend (Web) Development:</strong>
              <ul>
                <li>NodeJS</li>
                <li>Express</li>
                <li>MySQL and MariaDB</li>
              </ul>
            </li>
            <br />
            <li>
              <strong>Other Skills I've learned:</strong>
              <ul>
                <li>Java</li>
                <li>Spigot Plugin</li>
                <li>MySQL and MariaDB</li>
                <li>Python</li>
                <li>C++</li>
                <li>C</li>
              </ul>
            </li>
          </ul>
          <br />
          In my "career" I've earned a few prices on coding competitions. The
          first price I've earned was the third place at the competition "Jugend
          Forscht" with my project "
          <Link to={"/projects/jufo2020"}>Decryptor</Link>". At second I won the
          first place at the same competition one year later with my project "
          <Link to={"/projects/jufo2021"}>SenOS</Link>". If you are interested
          in the stuff I do, I suggest visiting my{" "}
          <a
            href={"https://github.com/MCTzOCK"}
            target={"_blank"}
            rel={"noreferrer"}
          >
            GitHub
          </a>
        </p>
      </div>
    </>
  );
}
