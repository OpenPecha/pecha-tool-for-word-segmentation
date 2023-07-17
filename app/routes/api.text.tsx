import { ActionFunction } from "@remix-run/node";
import { ignoreText, rejectText, resetText, saveText } from "~/model/text";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  if (request.method === "POST") {
    const modified_text = formData.get("modified_text") as string;
    const userId = formData.get("userId") as string;
    const id = formData.get("id") as string;
    let text = await saveText(parseInt(id), modified_text, userId);
    return text;
  }

  if (request.method === "DELETE") {
    const id = formData.get("id") as string;
    let res = await resetText(parseInt(id));
    return res;
  }
  if (request.method === "PATCH") {
    const id = formData.get("id") as string;
    const userId = formData.get("userId") as string;
    const action = formData.get("_action") as string;
    let res = null;
    if (action === "reject") {
      res = await rejectText(parseInt(id), userId);
    }
    if (action === "ignore") {
      res = await ignoreText(parseInt(id), userId);
    }
    return res;
  }
};
