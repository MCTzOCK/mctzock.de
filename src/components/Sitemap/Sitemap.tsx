/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */
import Routes from "../../Routes";
import { Route } from "react-router-dom";

export default function Sitemap() {
  const baseUrl = "https://mctzock.de";
  const now = new Date().toISOString();

  const staticRoutes = Routes().props.children.map((r: Route) => {
    console.log(r);
    // @ts-ignore
    return `<url key="${r.props.path[0]}">
        <loc>${baseUrl}${r.props.path}</loc>
        <lastmod>${now}</lastmod>
      </url>`;
  });
  return (
    <>
      {`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticRoutes}
      </urlset>`}
    </>
  );
}
