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

export const getUniqueTextsGroup = async () => {
  const textRecords = await db.text.findMany({
    select: {
      version: true,
      category: true, // Include category in the query
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  // Create a Map to store unique versions and their categories
  const uniqueVersionCategories = new Map();
  const versionCount = {};
  // Iterate through the records and store unique version-category pairs
  for (const record of textRecords) {
    if (!uniqueVersionCategories.has(record.version)) {
      uniqueVersionCategories.set(record.version, record.category);
    }
    let version = record.version;
    if (!versionCount[version]) {
      versionCount[version] = 1;
    } else {
      versionCount[version]++;
    }
  }

  // Convert the Map to an array of objects
  const result = Array.from(uniqueVersionCategories, ([version, category]) => ({
    version,
    category,
    count: versionCount[version] || 0,
  }));

  return result;
};
