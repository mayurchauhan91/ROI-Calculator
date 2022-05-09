import React from "react";
import { Bar, Chart, Line, Pie } from "react-chartjs-2";

const BarChart = () => {
  const chartData = new Chart({
    type: "bar",
    data: {
      labels: ["Maharastra", "Gujarat", "Delhi", "Punnjab", "Bengal"],
      datasets: [
        {
          labels: "Population",
          data: [12345, 123456, 1234567, 12345678, 123456789],
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
          ],
        },
      ],
    },
  });

  return (
    <div className="chart">
      <Line
        data={chartData}
        optoins={{
          plugins: {
            title: {
              display: true,
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
