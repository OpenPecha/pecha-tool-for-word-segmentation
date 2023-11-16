import { Role } from "@prisma/client";
import { db } from "~/service/db.server";

export const createUserIfNotExists = async (username: string) => {
  let user;
  user = await db.user.findUnique({
    where: {
      username: username,
    },
    select: {
      rejected_list: { select: { id: true, reviewed: true, batch: true } },
      _count: {
        select: { text: { where: { reviewed: true } } }, //only count reviewed text
      },
      text: {
        where: { reviewed: { not: true } },
        orderBy: { id: "desc" },
      },
      categories: true,
      allow_assign: true,
      role: true,
      reviewer_id: true,
      nickname: true,
      picture: true,
      id: true,
      username: true,
    },
  });
  if (!user) {
    user = await db.user.create({
      data: {
        username: username,
        nickname: username.split("@")[0],
        role: "USER",
      },
      include: {
        text: true,
      },
    });
  }
  if (!user.picture) {
    //get user detail from api
    let api = "https://pecha.tools/api/user/?email=" + username;
    let response = await fetch(api);
    let data = await response.json();
    await db.user.update({
      where: { username },
      data: {
        picture: data.picture,
      },
    });
  }
  return user;
};

export const getUsers = async () => {
  try {
    let users = await db.user.findMany({
      include: {
        text: {
          select: { id: true, status: true, reviewed: true, modified_on: true },
          orderBy: { id: "desc" },
          take: 50,
        },
        rejected_list: true,
        ignored_list: true,
        reviewer: true,
      },
    });
    return users;
  } catch (e) {
    throw new Error(e);
  }
};

export const getUser = async (username: string) => {
  try {
    return await db.user.findUnique({
      where: { username },
      include: {
        text: {
          select: {
            id: true,
            reviewed: true,
            modified_text: true,
          },
          orderBy: { id: "desc" },
        },
        rejected_list: { select: { id: true } }, // Select specific fields or all (undefined)
        _count: {
          select: { text: { where: { reviewed: true } }, rejected_list: true },
        },
        reviewer: true,
      },
    });
  } catch (e) {
    throw new Error(e);
  }
};

export const updateUserNickname = async (id: string, name: string) => {
  try {
    let user = await db.user.update({
      where: {
        id,
      },
      data: {
        nickname: name,
      },
    });
    return user;
  } catch (e) {
    throw new Error(e);
  }
};

export async function updateUserCategory(id: string, category: string) {
  return db.user.update({
    where: { id },
    data: {
      categories: { set: JSON.parse(category) },
    },
  });
}

export const updateUserAssign = async (id: string, allow: boolean) => {
  try {
    let user = await db.user.update({
      where: {
        id,
      },
      data: {
        allow_assign: allow,
      },
    });
    return user;
  } catch (e) {
    throw new Error(e);
  }
};
export const updateUserReviewer = async (
  id: string,
  reviewer_name: string | null
) => {
  if (reviewer_name === null || reviewer_name === "") {
    let updatedUser = await db.user.update({
      where: { id },
      data: { reviewer_id: null },
    });
    return updatedUser;
  }
  try {
    let updatedUser = await db.user.update({
      where: { id },
      data: {
        reviewer: {
          connect: { username: reviewer_name },
        },
      },
    });
    return updatedUser;
  } catch (e) {
    throw new Error(e);
  }
};
export const removeBatchFromUser = async (batch: number, id: string) => {
  //check if all text inside batch is either ignored by user or reviewed;

  try {
    const user = await db.user.findUnique({
      where: { id },
      include: { ignored_list: true },
    });
    let isAllIgnored = await areAllTextsIgnoredOrReviewed(id, batch);
    if (!user) throw new Error("user not found");
    if (isAllIgnored) {
      const updatedAssignedBatchs = user.assigned_batch.filter(
        (number) => number !== batch
      );

      let updatedUser = await db.user.update({
        where: {
          id,
        },
        data: {
          assigned_batch: updatedAssignedBatchs,
        },
      });
      return updatedUser;
    }
    return null;
  } catch (e) {
    throw new Error("cannot add group" + e);
  }
};

async function areAllTextsIgnoredOrReviewed(userId: string, batchId: number) {
  const user = await db.user.findUnique({
    where: { id: userId },
    include: {
      ignored_list: { where: { batch: batchId } },
      text: { where: { batch: batchId } },
    },
  });

  if (!user) {
    throw new Error("User not found");
  }
  let approved_count = user.text.length;
  let reviewed_count = user.text.filter((l) => l.reviewed).length;
  if (approved_count === reviewed_count) return true;
  const ignoredTexts = await db.text.findMany({
    where: {
      batch: batchId,
      ignored_by: { some: { username: { equals: user.username } } },
    },
    include: {
      ignored_by: true,
    },
  });

  const ignoredTextIds = ignoredTexts.map((text) => text.id);

  const remainingTexts = await db.text.findMany({
    where: {
      batch: batchId,
      NOT: {
        id: { in: ignoredTextIds },
      },
    },
  });

  // Check if all texts in the batch are either ignored or reviewed
  const allIgnoredOrReviewed = remainingTexts.every((text) => {
    return text.reviewed === true;
  });

  return allIgnoredOrReviewed;
}

export async function updateUserRole(id: string, role: Role) {
  let item = await db.user.update({
    where: { id },
    data: { role },
  });
  return item;
}
export async function removeUser(username: string) {
  let item = await db.user.delete({
    where: { username },
  });
  return item;
}
