/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import React from "react";
import { Link } from "react-router-dom";
import img_decryptor from "../../assets/decryptor.jpg";
import img_senos from "../../assets/senos.png";
import img_incode from "../../assets/incode-400.png";

export default function Awards() {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <p style={{ marginBottom: "2rem" }} className={"title"}>
          Awards
        </p>
        <div className="columns" style={{ marginInline: "2rem", gap: "2rem" }}>
          <div className="column">
            <div className={"card"}>
              <div className={"card-image"}>
                <figure className={"image"}>
                  <img
                    src={img_decryptor}
                    alt="Decryptor"
                    width={64}
                    height={64}
                  />
                </figure>
              </div>
              <div className={"card-content"}>
                <div className={"media"}>
                  <div className={"media-content"}>
                    <p className={"title is-4"}>
                      Jugend Forscht (regional competition)
                    </p>
                    <p className={"subtitle is-6"}>
                      3. Place with <Link to={"/jufo2020"}>Decryptor</Link>
                    </p>
                  </div>
                </div>

                <div className={"content"}>
                  <p>
                    I won the 3rd place at the competition Jugend Forscht for my
                    Project Decryptor.&nbsp;
                    <a
                      href={"/certificate/jugend_forscht/2020.pdf"}
                      target={"_blank"}
                    >
                      Certificate
                    </a>
                    <br />
                    <time dateTime="2016-1-1">19 Feb 2020</time>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className={"card"}>
              <div className={"card-image"}>
                <figure className={"image"}>
                  <img src={img_senos} alt="SenOS" width={64} height={64} />
                </figure>
              </div>
              <div className={"card-content"}>
                <div className={"media"}>
                  <div className={"media-content"}>
                    <p className={"title is-4"}>
                      Jugend Forscht (regional competition)
                    </p>
                    <p className={"subtitle is-6"}>
                      1. Place with <Link to={"/jufo2021"}>SenOS</Link>
                    </p>
                  </div>
                </div>

                <div className={"content"}>
                  <p>
                    I won the 1st place at the competition Jugend Forscht for my
                    Project SenOS.&nbsp;
                    <a
                      href={"/certificate/jugend_forscht/2021.pdf"}
                      target={"_blank"}
                    >
                      Certificate
                    </a>
                    <br />
                    <time dateTime="2016-1-1">24 Feb 2021</time>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className={"card"}>
              <div className={"card-image"}>
                <figure className={"image"}>
                  <img src={img_incode} alt="InCode" width={64} height={64} />
                </figure>
              </div>
              <div className={"card-content"}>
                <div className={"media"}>
                  <div className={"media-content"}>
                    <p className={"title is-4"}>
                      Jugend Forscht (regional competition)
                    </p>
                    <p className={"subtitle is-6"}>
                      1. Place with <Link to={"/jufo2022"}>InCode</Link>
                    </p>
                  </div>
                </div>

                <div className={"content"}>
                  <p>
                    I won the 1st place at the competition Jugend Forscht for my
                    Project InCode.&nbsp;
                    <a
                      href={"/certificate/jugend_forscht/2022.pdf"}
                      target={"_blank"}
                    >
                      Certificate
                    </a>
                    <br />
                    <time dateTime="2016-1-1">16 Feb 2022</time>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
