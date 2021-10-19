/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Button } from "react-bulma-components";
import java from "../../../assets/java.png";
import RHeader, { RProps } from "../../../components/RHeader/RHeader";

export default function JavaMySQL(props: RProps) {
  return (
    <>
      <RHeader
        title={"JavaMySQL"}
        image={java}
        imageAlt={"Java"}
        noAnimation={props.animation}
      >
        JavaMySQL is a Java Library that allows you to connect and manage a
        MySQL Database.
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
      </RHeader>
    </>
  );
}
