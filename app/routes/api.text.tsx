import { ActionFunction, redirect } from "@remix-run/node";
import {
  changeCategory,
  deleteTextByVersion,
  rejectText,
  saveText,
  updateTextRejectCount,
} from "~/model/text.server";
import { updateUserAssign } from "~/model/user.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  let headerUrl = request.headers.get("referer") as string;

  let url = new URL(headerUrl);
  let session = url.searchParams.get("session") as string;
  let history = url.searchParams.get("history");
  let admin_id = formData.get("adminId") as string;
  const action = formData.get("_action") as string;

  if (request.method === "POST") {
    const modified_text = formData.get("modified_text") as string;
    const userId = formData.get("userId") as string;
    const id = formData.get("id") as string;
    const time = formData.get("duration") as string;
    let text = await saveText(
      parseInt(id),
      modified_text,
      userId,
      admin_id,
      time
    );
    if (history) {
      return redirect(`/?session=${session}`);
    }
    return text;
  }
  if (request.method === "PATCH") {
    const id = formData.get("id") as string;
    const userId = formData.get("userId") as string;
    if (action === "reject") {
      let numberOfReject = await updateTextRejectCount(parseInt(id));
      if (numberOfReject !== 0 && numberOfReject % 3 === 0) {
        await updateUserAssign(userId, false);
      }
      let text = await rejectText(parseInt(id), userId);

      return text;
    }

    if (action === "change_category") {
      const category = formData.get("category") as string;
      const version = formData.get("version") as string;
      console.log(category, version);
      let text = await changeCategory(version, category);
      return text;
    }
    if (history) {
      return redirect(`/?session=${session}`);
    }
  }
  if (request.method === "DELETE") {
    const version = formData.get("version") as string;
    let deletedText = await deleteTextByVersion(version);
    return deletedText;
  }

  return null;
};
