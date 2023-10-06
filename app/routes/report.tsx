import { useLoaderData, useSearchParams } from "@remix-run/react";
import React from "react";
import { db } from "~/service/db.server";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const loader = async ({ request }) => {
  let url = new URL(request.url);
  let reviewer = url.searchParams.get("reviewer");
  let users = await db.user.findMany({
    where: {
      reviewer:
        reviewer === "all"
          ? undefined
          : reviewer
          ? { username: reviewer }
          : undefined,
    },
    select: {
      username: true,
      nickname: true,
      text: {
        where: { reviewed: true },
        select: { word_count: true, updatedAt: true, duration: true },
      },
      role: true,
    },
  });
  let reviewers = await db.user.findMany({ where: { role: "REVIEWER" } });
  return { users, reviewers };
};

function report() {
  let { users, reviewers } = useLoaderData();
  let [params, setParams] = useSearchParams();
  function handleReviewerChange(e) {
    setParams({ reviewer: e.target.value });
  }
  return (
    <div className="mt-3 mx-8">
      <label htmlFor="selectReviewer">Reviewer</label>
      <select
        id="selectReviewer"
        onChange={handleReviewerChange}
        value={params.get("reviewer")!}
        className="m-6"
      >
        <option value="all">all</option>
        {reviewers.map((user) => {
          return (
            <option key={user.nickname} value={user.username}>
              {user.username}
            </option>
          );
        })}
      </select>
      <div className="flex gap-3 flex-wrap">
        {users.map((user) => {
          const wordSum = user.text.reduce(
            (total, obj) => total + obj.word_count,
            0
          );
          const duration_sec = user.text.reduce((total, obj) => {
            let duration = obj.duration;
            return total + duration;
          }, 0);
          let duration =
            duration_sec > 0
              ? Math.floor(duration_sec / 60).toFixed(2)
              : wordSum > 0
              ? 3
              : 0; // in minutes
          const data = {
            labels: ["Word", "Duration"],
            datasets: [
              {
                label: "# of Votes",
                data: [wordSum, duration],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                ],
                borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
                borderWidth: 1,
              },
            ],
          };

          return (
            <div
              key={user.username}
              className=" flex flex-col bg-gray-200 p-2 capitalize "
            >
              <span className="font-bold text-xl mb-2">{user.nickname}</span>
              <div className="flex gap-3">
                <div>
                  <div>Word: {wordSum}</div>
                  <div>Duration: {duration}</div>
                  <div>Pay: ₹ {pay_cal(wordSum, duration)}</div>
                </div>
                {wordSum?.length > 0 ||
                  (duration?.length > 0 && (
                    <div className="max-h-[100px] flex">
                      <Pie data={data} />;
                    </div>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function pay_cal(word, minute) {
  let bill = 5 * minute + word * 0.4;
  return bill.toFixed(2);
}

export default report;
