/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */
import { Button } from "react-bulma-components";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className={"sub-page"}>
        <h1 className={"sub-page-title title"}>Oops!</h1>
        <div className={"sub-page-content subtitle"}>
          We can not find the page you were looking for. Try going home.
          <br />
          <Button
            color={"link"}
            renderAs={Link}
            to={"/"}
            style={{ marginTop: "2rem" }}
          >
            Home
          </Button>
        </div>
      </div>
    </>
  );
}
