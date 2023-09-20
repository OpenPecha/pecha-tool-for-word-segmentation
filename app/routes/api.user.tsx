import { Role } from "@prisma/client";
import { ActionFunction, LoaderFunction } from "@remix-run/node";
import {
  getUsers,
  updateUserNickname,
  updateUserAssign,
  updateUserCategory,
  updateUserReviewer,
  updateUserRole,
  removeUser,
} from "~/model/server.user";

export const loader: LoaderFunction = async ({ request }) => {
  return { users: await getUsers() };
};
export const action: ActionFunction = async ({ request }) => {
  let formdata = await request.formData();
  let nickname = formdata.get("nickname") as string;
  let id = formdata.get("id") as string;
  let allow = formdata.get("allow") as string;
  let action = formdata.get("action") as string;
  let updated = null;
  switch (action) {
    case "change_nickname":
      updated = await updateUserNickname(id, nickname);
    case "change_categories":
      let category = formdata.get("category") as string;
      updated = await updateUserCategory(id, category);
    case "change_allow_assign":
      updated = await updateUserAssign(id, allow === "true");

    case "change_reviewer":
      let reviewer_name = formdata.get("reviewer") as string;
      updated = await updateUserReviewer(id, reviewer_name);

    case "change_role":
      let role = formdata.get("role") as Role;
      updated = await updateUserRole(id, role);

    case "remove_user":
      let username = formdata.get("username") as string;
      updated = await removeUser(username);
  }

  return updated;
};
