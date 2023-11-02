import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import React from "react";
import AboutUser from "~/components/admin/AboutUser";
import { getAprovedBatch } from "~/model/server.text";
import { getUser, removeBatchFromUser } from "~/model/server.user";
import { getCategories } from "~/model/utils/server.category";
import { db } from "~/service/db.server";

export const loader: LoaderFunction = async ({ request, params }) => {
  let username = params.username;
  let user = await db.user.findUnique({
    where: { username },
    select: {
      id: true,
      text: {
        where: { reviewed: { not: true } },
        select: {
          batch: true,
        },
        distinct: ["batch"],
      },
      _count: {
        select: { text: { where: { reviewed: true } }, rejected_list: true },
      },
      reviewer: {
        select: {
          username: true,
        },
      },
      username: true,
      role: true,
      picture: true,
      nickname: true,
      categories: true,
      allow_assign: true,
    },
  });
  let categories = await getCategories();

  let currentBatch = user?.text.map((item) => item.batch);
  return { user, categories, currentBatch };
};

export const action: ActionFunction = async ({ request }) => {
  let formdata = await request.formData();
  if (request.method === "DELETE") {
    let batch = formdata.get("batch") as string;
    let userId = formdata.get("id") as string;
    let removed = await removeBatchFromUser(parseInt(batch), userId);
    return removed;
  }
};

function User() {
  const fetcher = useFetcher();
  let { user } = useLoaderData();

  function removeUser() {
    if (window.confirm("Are you sure you want to remove this user ?")) {
      fetcher.submit(
        {
          username: user.username,
          action: "remove_user",
        },
        {
          method: "DELETE",
          action: "/api/user",
        }
      );
    }
  }

  return <AboutUser selectedUser={user} removeUser={removeUser} />;
}

export default User;
