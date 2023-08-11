import { Status } from "@prisma/client";
import { db } from "~/service/db.server";
import { getUnassignedBatch } from "./group";

export async function checkAndAssignBatch(userId: string) {
  try {
    let batchToAssign;
    // 1. Retrieve the user's current assigned batches (if any)
    const user = await db.user.findUnique({
      where: { id: userId },
      select: { assigned_batch: true },
    });
    let assigned_batch = user?.assigned_batch;
    if (!user) return null;
    if (assigned_batch?.length === 0) {
      batchToAssign = await getUnassignedBatch();
    } else {
      for (const batch of user.assigned_batch) {
        const textsInBatch = await db.text.findMany({
          where: { batch: batch },
        });

        // If there is any text with a null modified_text, return false
        if (textsInBatch.some((text) => text.modified_text === null)) {
          batchToAssign = batch;
        } else {
          batchToAssign = await getUnassignedBatch();
        }
      }
    }
    // 3. Assign the batch to the user
    if (!batchToAssign) return null;
    if (!user?.assigned_batch?.includes(batchToAssign)) {
      const updatedUser = await db.user.update({
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
    let show = JSON.parse(text?.modified_text).join(" ") || text?.original_text;
    return {
      ...text,
      id: text?.id,
      original_text: show,
      status: text?.status,
    };
  }
  let batch = await checkAndAssignBatch(userId);
  const user = await db.user.findUnique({
    where: { id: userId },
    include: {
      ignored_list: true,
      rejected_list: true,
    },
  });
  const ignoredIds = user?.ignored_list.map((item: any) => item.id);
  const rejectedIds = user?.rejected_list.map((item: any) => item.id);
  let text = await db.text.findFirst({
    where: {
      batch: batch,
      modified_text: null,
      OR: [{ status: null }, { status: "PENDING" }],
      id: {
        notIn: [...(ignoredIds || []), ...(rejectedIds || [])],
      },
    },
  });
  if (!text) return null;
  return text;
}

export function getTextToDisplayByUser(userid: string) {
  let allTextByUser = db.text.findMany({
    where: {
      modified_by_id: userid,
    },
    select: {
      id: true,
      status: true,
      modified_text: true,
    },
  });
  return allTextByUser;
}

export function resetText(id: number) {
  return db.text.update({
    where: {
      id,
    },
    data: {
      modified_text: null,
      modified_by_id: null,
      status: "PENDING",
    },
  });
}

export async function rejectText(id: number, userId: string) {
  let text = await db.text.update({
    where: {
      id,
    },
    data: {
      status: "PENDING",
      modified_by: { disconnect: { id: userId } },
      rejected_by: { connect: { id: userId } },
    },
  });
  return text;
}
export async function removeRejectText(
  id: number,
  userId: string,
  status: Status
) {
  let text = db.text.update({
    where: {
      id,
    },
    data: {
      status,
      rejected_by: { disconnect: { id: userId } },
    },
  });
  let user = db.user.update({
    where: {
      id: userId,
    },
    data: {
      text: {
        connect: { id },
      },
    },
  });
  return text;
}

export async function ignoreText(id: number, userId: string) {
  return db.text.update({
    where: {
      id,
    },
    data: {
      modified_by: { disconnect: { id: userId } },
      ignored_by: { connect: { id: userId } },
      status: "PENDING",
    },
  });
}
export function saveText(
  id: number,
  text: string,
  userId: string,
  isAdmin: boolean
) {
  let data = text.split(" ");
  let updateData = {
    modified_text: JSON.stringify(data),
    modified_by_id: userId,
    status: "APPROVED",
    rejected_by: { disconnect: { id: userId } },
  };
  updateData["reviewed"] = isAdmin;
  return db.text.update({
    where: {
      id,
    },
    data: updateData,
  });
}
export async function getUnAsignedGroups() {
  let data = await db.text.findMany({
    select: {
      group: true,
    },
  });
  const uniqueGroups = new Set();

  data.forEach((item) => {
    uniqueGroups.add(item.group);
  });

  let numbers = Array.from(uniqueGroups).sort((a, b) => {
    return a - b;
  });

  const users = await db.user.findMany({
    select: { assigned_group: true },
  });
  const assignedGroups = users.flatMap((user) => user.assigned_group);
  const unassignedNumbers = numbers.filter(
    (number) => !assignedGroups.includes(number)
  );

  return unassignedNumbers;
}

export async function getAprovedGroup() {
  let data = await db.text.findMany({
    select: {
      batch: true,
    },
  });
  const uniqueGroups = new Set();
  const result = {};
  data.forEach((item) => {
    uniqueGroups.add(item.batch);
  });
  let text_group = await db.text.findMany({
    where: {
      batch: { in: Array.from(uniqueGroups) },
    },
    select: {
      id: true,
      status: true,
      batch: true,
      ignored_by: true,
      reviewed: true,
    },
  });
  for (const item of uniqueGroups) {
    let text = text_group.filter((t) => t.batch === item);
    let approved = text.every((item) => item.status === "APPROVED");
    let reviewed = text.every((item) => item.reviewed === true);
    let rejected = text.some((item) => item.status === "REJECTED");
    const ignored = text.reduce((acc, t) => {
      const ignoredUsersWithNonNullUsername = t.ignored_by.filter(
        (user) => user.username !== null
      );
      const ignoredUsernames = ignoredUsersWithNonNullUsername.map(
        (user) => user.username
      );
      return acc.concat(ignoredUsernames);
    }, []);

    result[item] = { approved, rejected, ignored, reviewed };
  }

  return result;
}
