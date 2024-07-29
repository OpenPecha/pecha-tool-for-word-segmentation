// app/components/BarChart.jsx

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components of Chart.js
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data }) => {
  // Extract unique dates and user IDs
  const dates = [...new Set(data.map((entry) => entry.date))].sort();
  const userIds = [...new Set(data.map((entry) => entry.userId.id))];
  const userNames = Object.fromEntries(
    [...new Set(data.map((entry) => entry.userId.id))].map((id) => [
      id,
      data.find((entry) => entry.userId.id === id).userId.nickname,
    ])
  );

  // Create a dataset for each user
  const datasets = userIds.map((userId) => {
    const userData = dates.map((date) => {
      const entry = data.find((e) => e.date === date && e.userId.id === userId);
      return entry ? entry.totalWordCount : 0;
    });
    return {
      label: userNames[userId] || "Unknown User",
      data: userData,
      backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)}, 0.5)`,
      borderColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)}, 1)`,
      borderWidth: 1,
    };
  });

  const chartData = {
    labels: dates,
    datasets: datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: "Total Word Count per User Over Time",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Total Word Count",
        },
      },
    },
  };

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
