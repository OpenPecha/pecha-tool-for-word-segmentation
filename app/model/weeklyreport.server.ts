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
    dates.push(date.toISOString().split("T")[0]); // Formats the date to YYYY-MM-DD
  }

  return dates.reverse(); // Reverse to get the most recent week first
}

async function generateWeeklyWordCountData() {
  const weeks = 10; // Number of weeks to generate data for

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
  const startOfCurrentWeek = getStartOfCurrentWeek();
  const weeklyDates = generateWeeklyDates(startOfCurrentWeek, weeks);

  // Generate dummy data for each user
  const data = users.reduce((acc, userId) => {
    weeklyDates.forEach((date) => {
      acc.push({
        userId,
        date,
        totalWordCount: Math.floor(Math.random() * 2000), // Random count for example
      });
    });
    return acc;
  }, []);
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
