import { db } from "~/service/db.server";

function getStartOfCurrentWeek() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const diff = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Monday is the start of the week
  const startOfWeek = new Date(today.setDate(today.getDate() - diff));
  startOfWeek.setHours(0, 0, 0, 0); // Set to 12 AM
  return startOfWeek;
}

function generateWeeklyDates(startDate, weeks) {
  const dates = [];
  const oneWeek = 7 * 24 * 60 * 60 * 1000; // milliseconds in one week

  for (let i = 0; i < weeks; i++) {
    const date = new Date(startDate.getTime() - i * oneWeek);
    dates.push({
      start: new Date(date),
      end: new Date(date.getTime() + oneWeek - 1),
    });
  }

  return dates.reverse(); // Reverse to get the most recent week first
}

async function generateWeeklyWordCountData() {
  const weeks = 10; // Number of weeks to generate data for

  const startOfCurrentWeek = getStartOfCurrentWeek();
  const weeklyDates = generateWeeklyDates(startOfCurrentWeek, weeks);

  // Fetch users with their reviewer information
  const users = await db.user.findMany({
    where: {
      reviewer_id: {
        not: null,
      },
    },
    select: {
      id: true,
      username: true,
      picture: true,
      nickname: true,
      reviewer: {
        select: {
          id: true,
          username: true,
        },
      },
    },
  });

  // Initialize an empty array to store the aggregated data
  const data = [];

  // Loop through each user
  for (const user of users) {
    // Loop through each weekly date range
    for (const { start, end } of weeklyDates) {
      // Fetch word count data for the user in the current week
      const totalWordCount = await db.text.aggregate({
        _sum: {
          word_count: true,
        },
        where: {
          modified_on: {
            gt: start.toISOString(),
            lte: end.toISOString(),
          },
        },
      });

      data.push({
        userId: user,
        date: start.toISOString().split("T")[0], // Format start date as YYYY-MM-DD
        totalWordCount: totalWordCount._sum.word_count || 0,
      });
    }
  }

  // Sort data by userId and date in descending order
  data.sort((a, b) => {
    if (a.userId.username === b.userId.username) {
      return new Date(b.date) - new Date(a.date);
    }
    return a.userId.username.localeCompare(b.userId.username);
  });

  return data;
}

// Example usage:
export default generateWeeklyWordCountData;
