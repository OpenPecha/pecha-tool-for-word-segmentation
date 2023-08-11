import { db } from "~/service/db.server";

export const getAllUniqueBatches = async () => {
  try {
    const texts = await db.text.findMany({
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

export const getUnassignedBatch = async () => {
  try {
    const allBatches = await getAllUniqueBatches();
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
