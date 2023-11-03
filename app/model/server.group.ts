import { PER_PAGE } from "~/components/admin/AboutText";
import { db } from "~/service/db.server";

export const getAllUniqueBatches = async (category: string[]) => {
  try {
    const texts = await db.text.findMany({
      where: {
        category: { in: category },
      },
      select: {
        batch: true,
      },
      orderBy: {
        batch: "asc",
      },
    });

    // Extracting the batch numbers
    const batches = texts.map((text) => text.batch);

    // Getting unique batch numbers
    const uniqueBatches = [...new Set(batches)];
    return uniqueBatches;
  } catch (error) {
    console.error("An error occurred while fetching unique batches:", error);
    throw error;
  }
};

export const getAllAssignedBatches = async () => {
  try {
    const users = await db.user.findMany({
      select: {
        assigned_batch: true,
      },
    });

    // Extracting the assigned batches
    const allBatches = users.flatMap((user) => user.assigned_batch);

    // Getting unique batch numbers
    const uniqueAssignedBatches = [...new Set(allBatches)];

    return uniqueAssignedBatches;
  } catch (error) {
    console.error("An error occurred while fetching assigned batches:", error);
    throw error;
  }
};

export const getUnassignedBatch = async (category: string[]) => {
  try {
    const allBatches = await getAllUniqueBatches(category);
    const assignedBatches = await getAllAssignedBatches();

    // Finding the batches that are not assigned
    const unassignedBatches = allBatches
      .filter((batch) => !assignedBatches.includes(batch))
      .sort((a, b) => parseInt(a) - parseInt(b));

    return unassignedBatches[0];
  } catch (error) {
    console.error(
      "An error occurred while fetching unassigned batches:",
      error
    );
    throw error;
  }
};

export const getUniqueTextsGroup = async (skip: number) => {
  let take = PER_PAGE;
  const textRecords = await db.text.findMany({
    select: {
      version: true,
      category: true, // Include category in the query
      reviewed: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
    distinct: ["version"],
    take,
    skip,
  });
  return textRecords;
};

export const getGroupInfo = async (version: string) => {
  const textRecords = await db.text.findMany({
    where: {
      version: version,
    },
    select: {
      version: true,
      category: true, // Include category in the query
      reviewed: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
  let reviewed_count =
    textRecords.filter((item) => item.reviewed === true).length ?? 0;
  return { total: textRecords.length, reviewed: reviewed_count };
};
