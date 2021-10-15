import * as React from "react";
import { Link } from "react-router-dom";

/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

export default function History() {
  return (
    <>
      <div className={"sub-page"}>
        <h1 className={"sub-page-title title"}>My History</h1>
        <div className={"timeline"}>
          <header className={"timeline-header"}>
            <span className={"tag is-medium is-primary"}>Birth</span>
          </header>
          <div className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content">
              <p className="heading">2015</p>
              <p>My First Steps with Programming (Scratch)</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content">
              <p className="heading">19. September 2019</p>
              <p>The Competition "Exciting Physics" in Bonn</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content">
              <p className="heading">25. September 2019</p>
              <p>I found a Minecraft Server called Exocians</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content">
              <p className="heading">19. February 2020</p>
              <p>
                The Competition "Jugend Forscht" in Dortmund. I won the 3rd
                place with my Project "
                <Link to={"/projects/jufo2020"}>Decryptor</Link>"
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content">
              <p className="heading">08. February 2020</p>
              <p>
                I left Exocians and found my new Minecraft Server&nbsp;
                <a
                  href={"https://craftions.net"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  Craftions
                </a>
                &nbsp;together with my friend&nbsp;
                <a
                  href={"https://ratzfatz.de/foto"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  Felix Schlesinger
                </a>
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content">
              <p className="heading">25. February 2021</p>
              <p>
                The Competition "Jugend Forscht" in Dortmund. I won the 1st
                place with my Project "
                <Link to={"/projects/jufo2021"}>SenOS</Link>"
              </p>
            </div>
          </div>
          <div className="timeline-header">
            <span className="tag is-medium is-primary">Now</span>
          </div>
        </div>
      </div>
    </>
  );
}
