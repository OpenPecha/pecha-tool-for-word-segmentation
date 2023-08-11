import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { getUsers, updateUserNickname } from "~/model/user";

export const loader: LoaderFunction = async ({ request }) => {
  return { users: await getUsers() };
};
export const action: ActionFunction = async ({ request }) => {
  let formdata = await request.formData();
  let nickname = formdata.get("nickname") as string;
  let id = formdata.get("id") as string;
  if (request.method === "POST") {
    let updated = await updateUserNickname(id, nickname);
    return updated;
  }

  return null;
};
