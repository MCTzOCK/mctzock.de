/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import github from "../../assets/github.png";
import RHeader from "../../components/RHeader/RHeader";
import { Button } from "react-bulma-components";

export default function OpenSourceMaintainer() {
  return (
    <>
      <RHeader
        title={"Open Source Maintainer"}
        image={github}
        imageAlt={"GitHub"}
      >
        As an Open Source Maintainer I love creating open source projects. I
        maintain over 100 Open Source Projects.
        <div className={"buttons mt-4"}>
          <Button
            color={"link"}
            onClick={() => {
              window.open("https://github.com/MCTzOCK", "_blank");
            }}
          >
            View my GitHub
          </Button>
        </div>
      </RHeader>
    </>
  );
}
