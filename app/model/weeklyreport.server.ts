import { db } from "~/service/db.server";

async function getWordCountsByWeek(dates) {
  const wordCounts = await Promise.all(
    dates.map(async (date) => {
      const startDate = new Date(date);
      const endDate = new Date(date);
      endDate.setDate(startDate.getDate() + 7); // Set end date to one week after start date

      const total = await db.text.aggregate({
        _sum: {
          word_count: true,
        },
        where: {
          reviewed: true,
          modified_on: {
            gte: startDate,
            lt: endDate, // Use 'lt' to exclude the end date itself
          },
        },
      });

      return {
        date: date,
        totalWordCount: total._sum.word_count || 0, // Handle cases where there might be no data
      };
    })
  );

  return wordCounts;
}

async function getWeeklyWordCount() {
  function generateWeeklyDates(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const oneWeek = 7 * 24 * 60 * 60 * 1000; // milliseconds in one week
    const dates = [];

    // Adjust start date to the nearest Sunday (start of the week)
    start.setDate(start.getDate() - start.getDay());

    for (
      let date = start;
      date <= end;
      date = new Date(date.getTime() + oneWeek)
    ) {
      dates.push(date.toISOString().split("T")[0]); // Formats the date to YYYY-MM-DD
    }

    return dates;
  }
  const weeklyDates = generateWeeklyDates("2023-10-01", "2024-04-01");

  return await getWordCountsByWeek(weeklyDates);
}

export default getWeeklyWordCount;
