import { db } from "~/service/db.server";

export async function uploadData({
  name,
  data,
}: {
  name: string[];
  data: any;
}) {
  try {
    const existingRecord = await db.text.findFirst({
      where: {
        version: { in: name },
      },
    });
    console.log("existingRecord", existingRecord);
    if (!!existingRecord) {
      console.log("Record already exists");
      return { error: "Record already exists" };
    }
    let UploadData = data?.map((item) => ({
      version: item.version,
      original_text: item.original_text,
      batch: item.batch,
    }));
    let uploaded = await db.text.createMany({
      data: UploadData,
    });
    console.log("uploaded data");
    return uploaded;
  } catch (e) {
    throw new Error("upload failed" + e);
  }
}
