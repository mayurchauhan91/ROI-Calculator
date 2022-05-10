import React from "react";
import { Chart as Chartjs } from "chart.js/auto";
import { Bar, Chart } from "react-chartjs-2";

const BarChart = ({ ageValue, results }) => {
  const chartData = {
    labels: [ageValue],
    datasets: [
      {
        label: "Balance",
        data: [results],
        backgroundColor: ["rgba(75, 192, 192, 0.3)"],
        borderColor: ["rgba(75,192,192,1)"],
        borderWidth: 1,
      },
      {
        label: "",
      },
    ],
  };

  return (
    <div>
      <Bar
        data={chartData}
        width={600}
        height={400}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default BarChart;
