import { useFetcher, useLoaderData, useSearchParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import { db } from "~/service/db.server";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import style1 from "react-date-range/dist/styles.css"; // main style file
import style2 from "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { LinksFunction } from "@remix-run/node";

import ExportExcelButton from "~/components/Excel";
import useModal from "~/components/hooks/useModal";
import getWeeklyWordCount from "~/model/weeklyreport.server";
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

  const [users, reviewers] = await Promise.all([
    db.user.findMany({
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
            modified_on:
              startDate && endDate
                ? startDate !== endDate
                  ? { gte: new Date(startDate), lt: new Date(endDate) }
                  : new Date(startDate)
                : undefined,
          },
          select: { word_count: true, updatedAt: true, duration: true },
        },
        role: true,
      },
    }),
    db.user.findMany({
      where: { role: "REVIEWER" },
      select: { username: true },
    }),
  ]);

  let usersDetail = users.map((user) => {
    const word_count = user.text.reduce(
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
        : word_count > 0
        ? 3
        : 0; // in minutes
    let taskCount = user.text.length;
    return {
      username: user.username,
      nickname: user.nickname,
      word_count,
      duration,
      taskCount,
      averageWordCount: (word_count / taskCount).toFixed(2),
    };
  });
  let weeklyReport = await getWeeklyWordCount();

  return { usersDetail, reviewers, weeklyReport };
};

function report() {
  let { usersDetail, reviewers, weeklyReport } = useLoaderData();
  let [params, setParams] = useSearchParams();
  let { Modal, Toggle_Modal, changeOpen } = useModal();
  let detailfetcher = useFetcher();
  const [range, setRange] = useState({
    startDate: new Date(params.get("startDate")) || new Date(),
    endDate: new Date(params.get("endDate")) || new Date(),
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
    let start_date =
      new Date(range.startDate).getMonth() +
      1 +
      "-" +
      new Date(range.startDate).getDate() +
      "-" +
      new Date(range.startDate).getFullYear();
    let end_date =
      new Date(range.endDate).getMonth() +
      1 +
      "-" +
      new Date(range.endDate).getDate() +
      "-" +
      new Date(range.endDate).getFullYear();
    a.download = `${start_date}-${end_date}.txt`;
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

  function fetchDetailData() {
    let formdata = new FormData();
    formdata.append("data", JSON.stringify(range));

    detailfetcher.submit(formdata, {
      action: "/api/report",
      method: "POST",
    });
  }

  useEffect(() => {
    if (detailfetcher.data) {
      console.log(detailfetcher.data);
    }
  }, [detailfetcher.data]);

  return (
    <div className="mt-3 mx-8">
      <div className="flex justify-between items-center">
        <div>
          <label htmlFor="selectReviewer">Reviewer</label>
          <select
            id="selectReviewer"
            onChange={handleReviewerChange}
            value={params.get("reviewer")! || params.get("session")}
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
        <div className="flex gap-3">
          <button
            onClick={downloadReport}
            className="bg-green-600 px-2  rounded hover:bg-green-700 text-white"
          >
            download Report
          </button>
          <Toggle_Modal>
            <div className="bg-gray-400 px-2 rounded">Date Range</div>
          </Toggle_Modal>
        </div>
        <Modal>
          <div className="flex">
            <DateRangePicker ranges={[range]} onChange={handleSelect} />
            <div className="flex flex-col flex-1 justify-center items-center gap-3">
              <button
                className="ml-4 btn-md bg-green-300 rounded w-full hover:bg-green-400"
                onClick={handleSubmitDate}
                type="button"
              >
                submit
              </button>
              <button
                className="ml-4  btn-md bg-red-300 rounded w-full"
                onClick={handleReset}
                type="button"
              >
                reset
              </button>
            </div>
          </div>
        </Modal>
      </div>

      <div className="divider"></div>
      <div className="mb-3">
        total wordCount:{" "}
        {usersDetail.reduce((total, item) => {
          return total + item.word_count;
        }, 0)}
      </div>
      <div className="flex">
        <div className="flex flex-1 gap-3 flex-wrap">
          {usersDetail.map((user) => {
            return (
              <div
                key={user.username}
                className=" flex flex-col bg-gray-200 p-2 capitalize px-10 hover:bg-gray-300 cursor-pointer"
              >
                <span className="font-bold text-xl mb-2">{user.nickname}</span>
                <div className="flex gap-3">
                  <div>
                    <div>Task: {user.taskCount}</div>
                    <div title="space count">Word: {user.word_count}</div>
                    <div>average word per task: {user.averageWordCount}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <WordCountList data={weeklyReport} />
    </div>
  );
}

function WordCountList({ data }) {
  const downloadCsv = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Date,Total Word Count\r\n"; // Column headers
    data.forEach((item) => {
      csvContent += `${item.date},${item.totalWordCount}\r\n`; // Data rows
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "WordCountData.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <ul className="list-disc space-y-2">
        {data.map((entry, index) => (
          <li key={index} className="bg-gray-100 p-3 rounded-md shadow">
            <span className="font-bold">Date: </span>
            {entry.date}
            <span className="font-bold">, Total Word Count: </span>
            {entry.totalWordCount.toLocaleString()}
          </li>
        ))}
      </ul>
      <button
        onClick={downloadCsv}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Download CSV
      </button>
    </div>
  );
}

export default report;
