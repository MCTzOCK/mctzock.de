/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import java from "../../../assets/java.png";

export default function JavaMySQL() {
  return (
    <>
      <div className={"header"}>
        <div className="header-left">
          <h1 className="title">JavaMySQL</h1>
          <h1 className="header-subtitle">
            JavaMySQL is a Java Library that allows you to connect and manage a
            MySQL Database.
          </h1>
          <div className={"buttons"}>
            <Button
              color={"link"}
              className={"mt-6"}
              onClick={() => {
                window.open("https://github.com/MCTzOCK/JavaMySQL", "_blank");
              }}
            >
              Source Code
            </Button>
          </div>
        </div>
        <div className="header-right" style={{ textAlign: "center" }}>
          <img src={java} alt={"java"} width={256} height={128} />
        </div>
      </div>
    </>
  );
}
