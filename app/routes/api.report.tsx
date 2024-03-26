import { ActionFunction } from "@remix-run/node";
import { db } from "~/service/db.server";

export const action: ActionFunction = async ({ request }) => {
  let formdata = await request.formData();

  let data = formdata.get("data");
  let range = JSON.parse(data);
  let startDate = new Date(range?.startDate);
  let endDate = new Date(range?.endDate);

  const records = await db.text.findMany({
    select: {
      id: true,
      modified_by: true,
      original_text: true,
      modified_text: true,
      reviewed_by: true,
      status: true,
      updatedAt: true,
      duration: true,
      word_count: true,
    },
    where: {
      updatedAt: {
        gte: startDate, // greater than or equal to startDate
        lte: endDate, // less than or equal to endDate
      },
    },
  });

  return records;
};
