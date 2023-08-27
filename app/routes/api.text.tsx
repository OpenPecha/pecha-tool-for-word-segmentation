import { ActionFunction, redirect } from "@remix-run/node";
import {
  getNumberOfReject,
  ignoreText,
  rejectText,
  removeRejectText,
  saveText,
  updateTextRejectCount,
} from "~/model/text";
import { updateUserAssign } from "~/model/user";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  let headerUrl = request.headers.get("referer") as string;
  let url = new URL(headerUrl);
  let session = url.searchParams.get("session");
  let history = url.searchParams.get("history");
  let text = null;
  let admin_id = formData.get("adminId") as string;

  if (request.method === "POST") {
    const modified_text = formData.get("modified_text") as string;
    const userId = formData.get("userId") as string;
    const id = formData.get("id") as string;
    await removeRejectText(parseInt(id), userId, "APPROVED");
    text = await saveText(parseInt(id), modified_text, userId, admin_id);
  }

  if (request.method === "PATCH") {
    const id = formData.get("id") as string;
    const userId = formData.get("userId") as string;
    const action = formData.get("_action") as string;
    if (action === "reject") {
      let numberOfReject = await getNumberOfReject(parseInt(id));
      if (numberOfReject !== 0 && numberOfReject % 3 === 0) {
        await updateUserAssign(userId, false);
      } else {
        await updateTextRejectCount(parseInt(id));
      }
      text = await rejectText(parseInt(id), userId);
    }
    if (action === "ignore") {
      await removeRejectText(parseInt(id), userId, "PENDING");
      text = await ignoreText(parseInt(id), userId);
    }
  }
  if (history) {
    return redirect(`/?session=${session}`);
  }
  return text;
};
