/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import redbuild from "../../../../assets/customers/RedBuild.webp";
import { Button } from "react-bulma-components";
import RHeader, { RProps } from "../../../../components/RHeader/RHeader";

export default function RedBuildWebsite(props: RProps) {
  return (
    <>
      <RHeader
        title={"RedBuild Website"}
        image={redbuild}
        imageAlt={"RedBuild"}
        noAnimation={props.animation}
        imageStyle={{
          borderRadius: "50%",
        }}
      >
        I've developed the Website for RedBuild
        <div className="buttons">
          <Button
            color={"link"}
            className={"mt-6"}
            onClick={() => {
              window.open("https://red-build.de", "_blank");
            }}
          >
            View RedBuild's Website
          </Button>
        </div>
      </RHeader>
    </>
  );
}
