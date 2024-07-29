import { LinksFunction, LoaderFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetchers,
  useNavigation,
} from "@remix-run/react";
import React, { useMemo } from "react";
import tailwindStyle from "./styles/tailwind.css";
import globalStyle from "./styles/global.css";
import drawwerStyle from "react-modern-drawer/dist/index.css";

import NProgress from "nprogress";
import nProgressStyles from "nprogress/nprogress.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyle },
  { rel: "stylesheet", href: globalStyle },
  { rel: "stylesheet", href: drawwerStyle },
  { rel: "stylesheet", href: nProgressStyles },
];
const numberOfUser = 10;
export const WORD_PER_MONTH = 1_510_000 / numberOfUser;

export default function App() {
  let transition = useNavigation();

  let fetchers = useFetchers();

  let state = useMemo<"idle" | "loading">(
    function getGlobalState() {
      let states = [
        transition.state,
        ...fetchers.map((fetcher) => fetcher.state),
      ];
      if (states.every((state) => state === "idle")) return "idle";
      return "loading";
    },
    [transition.state, fetchers]
  );

  React.useEffect(() => {
    if (state === "loading") NProgress.start();
    if (state === "idle") NProgress.done();
  }, [transition.state]);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="m-0 overflow-hidden font-[20px]">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
