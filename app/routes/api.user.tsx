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
  switch (action) {
    case "change_nickname":
      return await updateUserNickname(id, nickname);
    case "change_categories":
      let category = formdata.get("category") as string;
      return await updateUserCategory(id, category);
    case "change_allow_assign":
      return await updateUserAssign(id, allow === "true");
    case "change_reviewer":
      let reviewer_name = formdata.get("reviewer") as string;
      return await updateUserReviewer(id, reviewer_name);

    case "change_role":
      let role = formdata.get("role") as Role;
      return await updateUserRole(id, role);

    case "remove_user":
      let username = formdata.get("username") as string;
      return await removeUser(username);
  }

  return null;
};
