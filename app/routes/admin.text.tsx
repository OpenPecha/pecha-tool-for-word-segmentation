import { LoaderFunction, defer, redirect } from "@remix-run/node";
import React from "react";
import AboutText from "~/components/admin/AboutText";
import { getUniqueTextsGroup } from "~/model/server.group";
import { getLastBatch } from "~/model/server.text";
import { getUser } from "~/model/server.user";
import { db } from "~/service/db.server";

export const loader: LoaderFunction = async ({ request }) => {
  let url = new URL(request.url);
  let session = url.searchParams.get("session");
  if (!session) return redirect("/error");
  let texts = getUniqueTextsGroup();
  let user = await db.user.findUnique({
    where: { username: session },
    select: {
      id: true,
      role: true,
      username: true,
    },
  });
  let lastbatch = await getLastBatch();

  return defer({
    user,
    texts,
    lastbatch,
  });
};

function Admin_Text() {
  return <AboutText />;
}

export default Admin_Text;
