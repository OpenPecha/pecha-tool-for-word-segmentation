import { useLoaderData, useSearchParams } from "@remix-run/react";
import { useState } from "react";
import { db } from "~/service/db.server";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import style1 from "react-date-range/dist/styles.css"; // main style file
import style2 from "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { LinksFunction } from "@remix-run/node";
import useModal from "~/components/hooks/useModal";
ChartJS.register(ArcElement, Tooltip, Legend);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: style1 },
  { rel: "stylesheet", href: style2 },
];

export const loader = async ({ request }) => {
  let url = new URL(request.url);
  let reviewer = url.searchParams.get("reviewer");
  let startDate = url.searchParams.get("startDate");
  let endDate = url.searchParams.get("endDate");

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
        where: {
          reviewed: true,
          updatedAt:
            startDate && endDate
              ? { gte: new Date(startDate), lte: new Date(endDate) }
              : undefined,
        },
        select: { word_count: true, updatedAt: true, duration: true },
      },
      role: true,
    },
  });
  let reviewers = await db.user.findMany({ where: { role: "REVIEWER" } });

  let usersDetail = users.map((user) => {
    const wordSum = user.text.reduce((total, obj) => total + obj.word_count, 0);
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
    let taskCount = user.text.length;
    return {
      username: user.username,
      nickname: user.nickname,
      wordSum,
      duration,
      taskCount,
    };
  });
  return { usersDetail, reviewers };
};

function report() {
  let { usersDetail, reviewers } = useLoaderData();
  let [params, setParams] = useSearchParams();
  let { Modal, Toggle_Modal, changeOpen } = useModal();
  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  function handleReviewerChange(e) {
    setParams((prev) => {
      prev.set("reviewer", e.target.value);
      return prev;
    });
  }
  function downloadReport() {
    const blob = new Blob([JSON.stringify(usersDetail, null, 2)], {
      type: "text/plain",
    });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "data.txt";
    document.body.appendChild(a);
    a.click();

    // Clean up by revoking the Object URL
    URL.revokeObjectURL(url);
  }
  function handleSelect(ranges) {
    setRange(ranges.selection);
  }
  function handleSubmitDate() {
    setParams((prev) => {
      prev.set("startDate", range?.startDate);
      prev.set("endDate", range?.endDate);
      return prev;
    });
    changeOpen();
  }
  function handleReset() {
    setParams((prev) => {
      prev.delete("startDate");
      prev.delete("endDate");
      return prev;
    });
    changeOpen();
  }
  return (
    <div className="mt-3 mx-8">
      <div className="flex justify-between items-center">
        <div>
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
        </div>
        <Toggle_Modal>
          <div className="bg-gray-400 px-2 rounded">view Date Range</div>
        </Toggle_Modal>
        <Modal>
          <DateRangePicker ranges={[range]} onChange={handleSelect} />
          <button
            className="ml-4 bg-green-300 px-3 hover:bg-green-400"
            onClick={handleSubmitDate}
            type="button"
          >
            submit
          </button>
          <button
            className="ml-4 text-red-300 px-3"
            onClick={handleReset}
            type="button"
          >
            reset
          </button>
        </Modal>
        <button
          onClick={downloadReport}
          className="bg-green-600 px-2  rounded hover:bg-green-700 text-white"
        >
          download Report
        </button>
      </div>
      <div className="flex gap-3 flex-wrap">
        {usersDetail.map((user) => {
          const data = {
            labels: ["word", "task"],
            datasets: [
              {
                data: [user.wordSum, user.taskCount],
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
              className=" flex flex-col bg-gray-200 p-2 capitalize px-10 hover:bg-gray-300 cursor-pointer"
            >
              <span className="font-bold text-xl mb-2">{user.nickname}</span>
              <div className="flex gap-3">
                <div>
                  <div>Task: {user.taskCount}</div>
                  <div>Word: {user.wordSum}</div>
                  <div>Duration: {user.duration}</div>
                  {/* <div>Pay: ₹ {pay_cal(user.wordSum, user.duration)}</div> */}
                </div>
                {user.wordSum?.length > 0 ||
                  (user.duration?.length > 0 && (
                    <div className="max-h-[100px] flex">
                      <Pie data={data} />
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
