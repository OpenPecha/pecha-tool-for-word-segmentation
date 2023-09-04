import { LoaderFunction, defer, redirect } from "@remix-run/node";
import React from "react";
import AboutText from "~/components/admin/AboutText";
import { getUniqueTextsGroup } from "~/model/server.group";

export const loader: LoaderFunction = async ({ request }) => {
  let url = new URL(request.url);
  let session = url.searchParams.get("session");
  if (!session) return redirect("/error");
  let texts = await getUniqueTextsGroup();
  return defer({
    texts,
  });
};

function Admin_Text() {
  return <AboutText />;
}

export default Admin_Text;
