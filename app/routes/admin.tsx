import { useState } from "react";
import Header from "~/components/admin/Header";
import { Outlet, useLoaderData, useLocation } from "@remix-run/react";
import Sidebar from "~/components/admin/Sidebar";
import { LoaderFunction, json, redirect } from "@remix-run/node";
import { getProgress } from "~/model/text.server";
import { useRouteError, isRouteErrorResponse } from "@remix-run/react";
import { db } from "~/service/db.server";
export const loader: LoaderFunction = async ({ request }) => {
  let url = new URL(request.url);
  let session = url.searchParams.get("session");
  if (!session) return redirect("/error");
  const [user, progress] = await Promise.all([
    db.user.findUnique({
      where: {
        username: session,
      },
      select: {
        username: true,
        id: true,
        nickname: true,
        picture: true,
      },
    }),
    getProgress(),
  ]);
  return json({
    user,
    progress,
  });
};

const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const { user } = useLoaderData();
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main className="pointer-events-auto">
            <div
              className={`mx-auto max-w-screen-2xl  ${
                pathname.includes("metabase") ? "p-0" : " p-4 md:p-6 2xl:p-10"
              }`}
            >
              <Outlet context={user} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export function ErrorBoundary() {
  const error = useRouteError();

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops</h1>
        <p>Status: {error.status}</p>
        <p>{error.data.message}</p>
      </div>
    );
  }

  // Don't forget to typecheck with your own logic.
  // Any value can be thrown, not just errors!
  let errorMessage = "Unknown error";

  return (
    <div>
      <h1>Uh oh ...</h1>
      <p>Something went wrong.</p>
      <pre>{errorMessage}</pre>
    </div>
  );
}

export default DefaultLayout;
