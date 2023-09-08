import { LinksFunction, LoaderFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import React, { useEffect, useState } from "react";
import tailwindStyle from "./styles/tailwind.css";
import globalStyle from "./styles/global.css";
import drawwerStyle from "react-modern-drawer/dist/index.css";
import { SocketProvider, connect } from "./components/contexts/SocketContext";
import type { Socket } from "socket.io-client";
export const loader: LoaderFunction = async ({ request }) => {
  let url = new URL(request.url);
  let session = url.searchParams.get("session") as string;

  return { session };
};
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyle },
  { rel: "stylesheet", href: globalStyle },
  { rel: "stylesheet", href: drawwerStyle },
];
export default function App() {
  const [socket, setSocket] = useState<Socket>();
  const { session } = useLoaderData();
  useEffect(() => {
    const socket = connect();
    setSocket(socket);
    socket.emit("user_login", session);

    return () => {
      socket.close();
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="m-0 overflow-hidden font-[20px]">
        <SocketProvider socket={socket}>
          <Outlet />
        </SocketProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        {/* add the UI you want your users to see */}
        <Scripts />
      </body>
    </html>
  );
}
