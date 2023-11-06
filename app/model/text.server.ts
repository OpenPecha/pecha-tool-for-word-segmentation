import { db } from "~/service/db.server";
import { getUnassignedBatch } from "./group.server";

export async function checkAndAssignBatch(userId: string) {
  try {
    let batchToAssign = null;
    // 1. Retrieve the user's current assigned batches (if any)
    const user = await db.user.findUnique({
      where: { id: userId },
      select: {
        username: true,
        assigned_batch: true,
        ignored_list: true,
        categories: true,
      },
    });
    let assigned_batch = user?.assigned_batch;
    if (!user) return null;
    if (assigned_batch?.length === 0) {
      batchToAssign = await getUnassignedBatch(user.categories);
    } else {
      let textsInBatch = await db.text.findMany({
        where: {
          batch: { in: user.assigned_batch },
        },
        select: {
          status: true,
          modified_text: true,
          batch: true,
          reviewed: true,
        },
      });
      for (const batch of user.assigned_batch) {
        let batchList = textsInBatch.filter((item) => item.batch === batch);
        // If there is any text with a null modified_text, return false
        if (batchList.some((text) => text.modified_text === null)) {
          return batch;
        }
        if (
          batchList.some(
            (text) => text.status === null || text.status === "PENDING"
          )
        ) {
          return batch;
        }
      }
      //check if all assigned batch is accepted

      if (!batchToAssign) {
        batchToAssign = await getUnassignedBatch(user.categories);
      }
    }
    // 3. Assign the batch to the user
    if (!batchToAssign) return null;
    if (!user?.assigned_batch?.includes(batchToAssign)) {
      await db.user.update({
        where: { id: userId },
        data: {
          assigned_batch: {
            set: [...(user?.assigned_batch || []), batchToAssign],
          },
        },
      });
    }
    return batchToAssign;
  } catch (error) {
    console.error(
      "An error occurred while checking and assigning batch:",
      error
    );
    throw error;
  }
}

export async function getTextToDisplay(userId: string, history: any) {
  if (history) {
    const text = await db.text.findUnique({
      where: { id: parseInt(history) },
    });
    let show = text?.modified_text
      ? JSON.parse(text?.modified_text).join(" ")
      : text?.original_text;
    return {
      ...text,
      id: text?.id,
      original_text: show,
      status: text?.status,
    };
  }
  let batch = await checkAndAssignBatch(userId);

  // remove batch if all the text in it is reviewed

  let text = await db.text.findFirst({
    where: {
      batch: batch,
      OR: [{ status: null }, { status: "PENDING" }],
    },
    orderBy: {
      id: "asc",
    },
    select: {
      id: true,
      original_text: true,
      modified_text: true,
      status: true,
      batch: true,
    },
  });
  if (!text) return null;
  return text;
}

export async function getProgress() {
  try {
    const [total_count, reviewed_count] = await Promise.all([
      db.text.count(),
      db.text.count({ where: { reviewed: true } }),
    ]);

    return { total: total_count, reviewed: reviewed_count };
  } catch (e) {
    throw new Error(e);
  }
}

export async function rejectText(id: number, userId: string) {
  let text = await db.text.update({
    where: {
      id,
    },
    data: {
      status: "REJECTED",
      modified_by: { disconnect: { id: userId } },
      rejected_by: { connect: { id: userId } },
      reviewed: false,
    },
  });
  return text;
}

export function saveText(
  id: number,
  text: string,
  userId: string,
  adminId: string,
  time?: string
) {
  let isReviewer = !!adminId;
  let duration = time ? parseFloat(time) : null;
  if (!isReviewer) {
    return db.text.update({
      where: {
        id,
      },
      data: {
        modified_text: JSON.stringify(text.split(" ")),
        modified_by_id: userId,
        reviewed: false,
        status: "APPROVED",
        rejected_by: { disconnect: { id: userId } },
        duration,
        modified_on: new Date(),
        word_count: text.split(" ").length,
      },
    });
  } else {
    return db.text.update({
      where: {
        id,
      },
      data: {
        modified_text: JSON.stringify(text.split(" ")),
        status: "APPROVED",
        rejected_by: { disconnect: { id: userId } },
        reviewed: true,
        reviewed_by_id: adminId,
      },
    });
  }
}

export async function updateTextRejectCount(id: number) {
  try {
    let text = await db.text.update({
      where: { id },
      data: {
        reject_count: { increment: 1 },
      },
    });
    return text?.reject_count || 0;
  } catch (e) {
    throw new Error(e);
  }
}
export async function changeCategory(version: string, category: string) {
  try {
    let text = await db.text.updateMany({
      where: { version },
      data: {
        category,
      },
    });
    return text.count;
  } catch (e) {
    throw new Error(e);
  }
}
export async function deleteTextByVersion(version: string) {
  try {
    let deleted = await db.text.deleteMany({
      where: { version },
    });
    return deleted.count;
  } catch (e) {
    throw new Error(e + "cannot delete");
  }
}