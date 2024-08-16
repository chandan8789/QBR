import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function PerformanceGraph({ data }) {
  const chartData = {
    labels: ["Tasks"],
    datasets: [
      {
        label: "Completed",
        data: [data.completed],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Pending",
        data: [data.pending],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  return (
    <div className="section">
      <h2>Performance Graph</h2>
      <Bar data={chartData} />
    </div>
  );
}

export default PerformanceGraph;
