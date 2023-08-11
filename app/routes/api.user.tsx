import { Role } from "@prisma/client";
import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { getUsers, updateUserNickname, updateUserRole } from "~/model/user";

export const loader: LoaderFunction = async ({ request }) => {
  return { users: await getUsers() };
};
export const action: ActionFunction = async ({ request }) => {
  let formdata = await request.formData();
  let nickname = formdata.get("nickname") as string;
  let id = formdata.get("id") as string;
  let role = formdata.get("role") as Role;
  let action = formdata.get("action") as string;
  if (action === "change_nickname") {
    let updated = await updateUserNickname(id, nickname);
    return updated;
  }
  if (action === "change_role") {
    let updated = await updateUserRole(id, role);
    return updated;
  }

  return null;
};
