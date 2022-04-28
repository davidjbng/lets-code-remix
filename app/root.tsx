import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { NavLink } from "react-router-dom";

import tailwindStylesheetUrl from "./styles/tailwind.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix Notes",
  viewport: "width=device-width,initial-scale=1",
});

type LoaderData = {};

export const loader: LoaderFunction = async ({ request }) => {
  return json<LoaderData>({});
};

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <div className="flex h-full min-h-screen flex-col">
          <header className="flex items-center justify-between bg-slate-800 p-4 text-white">
            <nav className="flex items-center justify-between gap-8">
              <NavLinkItem to="notes">Notes</NavLinkItem>
            </nav>
          </header>
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

function NavLinkItem({
  to,
  children,
}: React.PropsWithChildren<{ to: string }>) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-3xl text-slate-300 ${isActive ? "font-bold text-slate-50" : ""}`
      }
    >
      {({ isActive }) => (isActive ? <h1>{children}</h1> : children)}
    </NavLink>
  );
}
