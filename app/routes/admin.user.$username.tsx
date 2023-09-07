import { User } from "@prisma/client";
import { LoaderFunction, json } from "@remix-run/node";
import { useOutletContext } from "@remix-run/react";
import AboutUser from "~/components/admin/AboutUser";
import { getUniqueTextsGroup } from "~/model/server.group";
import { getAprovedBatch } from "~/model/server.text";
import { getUsers } from "~/model/server.user";
import { getCategories } from "~/model/utils/server.category";

export const loader: LoaderFunction = async ({ request, params }) => {
  let selectedUser = params.username;
  let users: User[] = await getUsers();
  let groups = await getAprovedBatch();
  let reviewers = users.filter((user) => user.role === "REVIEWER");
  let categories = await getCategories();
  let texts = await getUniqueTextsGroup();
  return json({
    selectedUser,
    texts,
    users: users.sort(
      (a, b) => b.assigned_batch.length - a.assigned_batch.length
    ),
    groups,
    reviewers,
    categories,
  });
};

export default function User_Detail() {
  let user = useOutletContext();

  return <AboutUser user={user} />;
}
