import type { LinksFunction } from "@remix-run/node";
import { Outlet, useRouteError } from "@remix-run/react";
import ty from "app/common/styles/ty.css";
import { ErrorBoundary as Error } from "~/common/components/errorBoundary/ErrorBoundary";
import { Layout } from "~/common/components/layout/Layout";
import tailwindcss from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindcss },
  { rel: "stylesheet", href: ty },
];

export default function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <Layout>
      <Error error={error} />
    </Layout>
  );
}
