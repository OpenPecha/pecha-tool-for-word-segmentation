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
    if (!!existingRecord) {
      console.log("Record already exists");
      return { error: "Record already exists" };
    }
    let count = await db.text.count();
    let lastId = await db.text.findFirst({
      orderBy: {
        id: "desc",
      },
      select: { id: true },
      take: 1,
    });
    let id = count !== 0 && lastId?.id ? lastId?.id : 0;
    let UploadData = data?.map((item) => {
      id += 1;
      return {
        id,
        version: item.version,
        original_text: item.original_text,
        batch: item.batch,
      };
    });
    let uploaded = await db.text.createMany({
      data: UploadData,
    });
    console.log("uploaded data");
    return uploaded;
  } catch (e) {
    throw new Error("upload failed" + e);
  }
}
