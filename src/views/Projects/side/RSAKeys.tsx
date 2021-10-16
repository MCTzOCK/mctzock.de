/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import java from "../../../assets/java.png";

export default function RSAKeys() {
  return (
    <>
      <div className={"header"}>
        <div className="header-left">
          <h1 className="title">RSAKeys</h1>
          <h1 className="header-subtitle">
            RSAKeys is a Java Library that allows you to encrypt and decrypt
            Text with the RSA Encryption.
          </h1>
          <div className={"buttons"}>
            <Button
              color={"link"}
              className={"mt-6"}
              onClick={() => {
                window.open("https://github.com/MCTzOCK/RSAKeys", "_blank");
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
