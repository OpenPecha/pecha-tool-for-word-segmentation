import { LoaderFunction, defer, redirect } from "@remix-run/node";
import React from "react";
import AboutText from "~/components/admin/AboutText";
import { getUniqueTextsGroup } from "~/model/server.group";
import { getLastBatch } from "~/model/server.text";
import { db } from "~/service/db.server";

export const loader: LoaderFunction = async ({ request }) => {
  let url = new URL(request.url);
  let session = url.searchParams.get("session");
  if (!session) return redirect("/error");
  let texts = getUniqueTextsGroup();
  const [user, lastbatch] = await Promise.all([
    db.user.findUnique({
      where: { username: session },
      select: {
        id: true,
        role: true,
        username: true,
      },
    }),
    getLastBatch(),
  ]);
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
