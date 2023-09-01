import { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import React, { useEffect, useState } from "react";
import tailwindStyle from "./styles/tailwind.css";
import globalStyle from "./styles/global.css";
import drawwerStyle from "react-modern-drawer/dist/index.css";
import { SocketProvider, connect } from "./components/contexts/SocketContext";
import type { Socket } from "socket.io-client";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyle },
  { rel: "stylesheet", href: globalStyle },
  { rel: "stylesheet", href: drawwerStyle },
];
export default function App() {
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    const socket = connect();
    setSocket(socket);
    return () => {
      socket.close();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;
    socket.on("confirmation", (data) => {});
  }, [socket]);
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
